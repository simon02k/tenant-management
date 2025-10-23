from flask import Flask
from flask_cors import CORS
from models import db, ma
from routes import routes
from config import Config
from flask_migrate import Migrate
import os

app = Flask(__name__)
app.config.from_object(Config)

# Ensure instance folder exists
os.makedirs(os.path.join(os.path.dirname(__file__), "instance"), exist_ok=True)

# Init extensions
db.init_app(app)
ma.init_app(app)
migrate = Migrate(app, db)

# Enable CORS (allow React frontend)
CORS(app)

# Register routes
app.register_blueprint(routes)

if __name__ == "__main__":
    app.run(debug=True)
