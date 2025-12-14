# import os

# DB_SERVER = "python-web-app1-server.database.windows.net"
# DB_NAME = "Swiggy"
# DB_USER = os.getenv("DB_USER", "your-db-username")
# DB_PASSWORD = os.getenv("DB_PASSWORD", "your-db-password")

# SQLALCHEMY_DATABASE_URI = (
#     f"mssql+pyodbc://{DB_USER}:{DB_PASSWORD}@{DB_SERVER}:1433/{DB_NAME}"
#     "?driver=ODBC+Driver+17+for+SQL+Server"
# )

# SQLALCHEMY_TRACK_MODIFICATIONS = False
# SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")





import os
import urllib

DB_SERVER = os.getenv("DB_SERVER", "python-web-app1-server.database.windows.net")
DB_NAME = os.getenv("DB_NAME", "Swiggy")
DB_USER = os.getenv("DB_USER", "python-web-app1-server-admin")
DB_PASSWORD = os.getenv("DB_PASSWORD", "Pandiyan@3021")

# Properly URL-encode the password (important if it has special characters like @, #, !)
params = urllib.parse.quote_plus(
    f"DRIVER=ODBC Driver 17 for SQL Server;"
    f"SERVER={DB_SERVER},1433;"
    f"DATABASE={DB_NAME};"
    f"UID={DB_USER};"
    f"PWD={DB_PASSWORD};"
    f"Encrypt=yes;"
    f"TrustServerCertificate=no;"
    f"Connection Timeout=30;"
)

SQLALCHEMY_DATABASE_URI = f"mssql+pyodbc:///?odbc_connect={params}"

SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
