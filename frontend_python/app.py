from flask import Flask, render_template, request, redirect, session, flash
import requests

app = Flask(__name__)
app.secret_key = "frontendsecret"

API_URL = "http://backend:5000"  # backend container name

@app.route("/")
def home():
    if "token" in session:
        return render_template("home.html", username=session.get("username"))
    return redirect("/login")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        data = {"username": request.form["username"], "password": request.form["password"]}
        res = requests.post(f"{API_URL}/login", json=data)
        if res.status_code == 200:
            session["token"] = res.json()["token"]
            session["username"] = data["username"]
            return redirect("/")
        else:
            flash("Invalid login")
    return render_template("login.html")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        data = {
            "username": request.form["username"],
            "email": request.form["email"],
            "password": request.form["password"]
        }
        res = requests.post(f"{API_URL}/signup", json=data)
        if res.status_code == 200:
            flash("Registered successfully, please login.")
            return redirect("/login")
        else:
            flash(res.json().get("message", "Signup failed"))
    return render_template("signup.html")

@app.route("/logout", methods=["GET", "POST"])
def logout():
    session.clear()
    flash("Logged out successfully.")
    return redirect("/login")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
