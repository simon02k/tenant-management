from flask import Blueprint, request, jsonify
from models import db, Tenant, TenantSchema
from datetime import datetime

routes = Blueprint("routes", __name__)

tenant_schema = TenantSchema()
tenants_schema = TenantSchema(many=True)

# Get all tenants
@routes.route("/api/tenants", methods=["GET"])
def get_tenants():
    try:
        tenants = Tenant.query.all()
        return tenants_schema.jsonify(tenants), 200
    except Exception as e:
        return {"error": str(e)}, 500
 

# Get single tenant
@routes.route("/api/tenants/<string:houseno>", methods=["GET"])
def get_tenant(houseno):
    tenant = Tenant.query.get_or_404(houseno)
    return tenant_schema.jsonify(tenant)

# Add tenant
@routes.route("/api/tenants", methods=["POST"])
def add_tenant():
    data = request.get_json()

    # Convert move_in_date string ("YYYY-MM-DD") to Python date
    move_in_date = None
    if data.get("move_in_date"):
        move_in_date = datetime.strptime(data["move_in_date"], "%Y-%m-%d").date()

    new_tenant = Tenant(
        name=data["name"],
        houseno=data["houseno"],
        status=data.get("status", "active"),
        move_in_date=move_in_date
    )
    db.session.add(new_tenant)
    db.session.commit()
    return tenant_schema.jsonify(new_tenant), 201

# Update tenant
@routes.route("/api/tenants/<string:houseno>", methods=["PUT"])
def update_tenant(houseno):
    tenant = Tenant.query.get_or_404(houseno)
    data = request.get_json()

    tenant.name = data.get("name", tenant.name)
    tenant.houseno = data.get("houseno", tenant.houseno)
    tenant.status = data.get("status", tenant.status)
    tenant.move_in_date = datetime.strptime(data.get("move_in_date"), "%Y-%m-%d").date()


    db.session.commit()
    return tenant_schema.jsonify(tenant)

# Delete tenant
@routes.route("/api/tenants/<string:houseno>", methods=["DELETE"])
def delete_tenant(houseno):
    tenant = Tenant.query.get_or_404(houseno)
    db.session.delete(tenant)
    db.session.commit()
    return jsonify({"message": "Tenant deleted"})

#soft delete
@routes.route("/api/tenants/softdelete/<string:houseno>", methods=["DELETE"])
def delete_tenant_data(houseno):
    tenant = Tenant.query.get_or_404(houseno)
    tenant.name = None
    tenant.status = "vacant"
    tenant.move_in_date =None

    db.session.commit()
    return jsonify({"message": "Tenant deleted"})




#test to be removed

@routes .route('/api/tenants/bulk', methods=['POST'])
def add_bulk_tenants():
    Tenant.query.delete()
    db.session.commit()
    data = request.get_json()  # Expecting a list of tenants
    tenants = []
    for t in data:
        tenants.append(Tenant(
            houseno=t.get("houseno"),
            name=t.get("name"),
            status=t.get("status"),
            move_in_date = datetime.strptime(t.get("move_in_date"), "%Y-%m-%d").date()
        ))
    db.session.bulk_save_objects(tenants)
    db.session.commit()
    return jsonify({"message": f"{len(tenants)} tenants added successfully"}), 201