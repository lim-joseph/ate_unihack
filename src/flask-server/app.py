import sys
from flask import Flask,request
from flask import __version__ as flask_version
from main import main
import os
from supabase import create_client
from flask_cors import CORS
import json
from tok import url,key

supabase = create_client(url, key)

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return (f"""Allodate+ backend :)<br>
            Python {sys.version}<br>
            Flask {flask_version}""")

@app.route("/data")
def data():
    ics_url = request.args.get('ics-url')
    return main(ics_url)

@app.route("/user/<username>")
def get_user(username):
    res= supabase.table('student').select("*").eq("username",username).execute().data
    print(res)
    return res

@app.route("/create",methods=['POST'])
def create_user():
    data = request.data
    data=json.loads(str(data, encoding='utf-8'))
    supabase.table('student').insert(data).execute()
    return "success"

@app.route("/freetime/<username>")
def get_free_time_route(username):
    res = supabase.table('student').select("*").eq("username",username).execute().data
    if(res):
        timetable_link = res[0]['timetable_link']
    else:
        return 'No user', 400
    return main(timetable_link)


if __name__ == "__main__":
    app.run(debug=True)