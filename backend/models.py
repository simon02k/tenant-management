from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import datetime

db = SQLAlchemy()
ma = Marshmallow()

class Tenant(db.Model):
    #id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=True)
    houseno = db.Column(db.String(50), nullable=False,primary_key=True)
    status = db.Column(db.String(20), default="active")  # active, inactive, etc.
    move_in_date = db.Column(db.Date, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class TenantSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Tenant
        load_instance = True
