from flask import Flask
from main import main
app = Flask(__name__)

@app.route("/members")
def members():
    return main()

if __name__ == "__main__":
    app.run(debug=True)