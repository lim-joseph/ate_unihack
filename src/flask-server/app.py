import sys
from flask import Flask, request
from flask import __version__ as flask_version
from main import main

app = Flask(__name__)


@app.route("/")
def hello():
    return f"""Allodate+ backend :)<br>
            Python {sys.version}<br>
            Flask {flask_version}"""


@app.route("/data")
def data():
    ics_url = request.args.get("ics-url1")
    ics_url2 = request.args.get("ics-url2")
    print(main(ics_url, ics_url2))
    return main(ics_url, ics_url2)


if __name__ == "__main__":
    app.run(debug=True)
