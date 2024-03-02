import sys
from flask import Flask
from flask import __version__ as flask_version
from main import main
app = Flask(__name__)

@app.route("/")
def hello():
    return (f"""Allodate+ backend :)<br>
            Python {sys.version}<br>
            Flask {flask_version}""")


if __name__ == "__main__":
    app.run(debug=True)