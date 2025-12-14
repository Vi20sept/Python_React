from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User
from config import SQLALCHEMY_DATABASE_URI, SQLALCHEMY_TRACK_MODIFICATIONS, SECRET_KEY
import jwt, datetime
import re

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = SQLALCHEMY_TRACK_MODIFICATIONS
app.config['SECRET_KEY'] = SECRET_KEY

CORS(app)
db.init_app(app)

# Create tables once app context is available
with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return "Backend API is running!"

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json

        # --- Email validation regex ---
    email_regex = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"

    if not re.match(email_regex, data["email"]):
        return jsonify({"message": "Invalid email format"}), 400

    if User.query.filter_by(username=data["username"]).first():
        return jsonify({"message": "User already exists"}), 400
    user = User(username=data["username"], email=data["email"])
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(username=data["username"]).first()
    if not user or not user.check_password(data["password"]):
        return jsonify({"message": "Invalid credentials"}), 401

    token = jwt.encode(
        {
            "user_id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        },
        app.config["SECRET_KEY"],
        algorithm="HS256"
    )
    return jsonify({"token": token})

@app.route("/logout", methods=["POST"])
def logout():
    # In JWT-based auth, client just discards token
    return jsonify({"message": "Logged out successfully"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
