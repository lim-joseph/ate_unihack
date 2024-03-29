import sys
from flask import Flask, request, send_from_directory, Response
from flask import __version__ as flask_version
from main import main

app = Flask(__name__, static_folder='../../build', static_url_path='/')


@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/about")
def about():
    return f"<pre>Allodate+ backend :)<br>Python {sys.version}<br>Flask {flask_version}</pre>"


@app.route("/data")
def data():
    ics_url = request.args.get("ics-url1")
    ics_url2 = request.args.get("ics-url2")
    return Response(main(ics_url, ics_url2), mimetype="text/event-stream")


if __name__ == "__main__":
    app.run()
