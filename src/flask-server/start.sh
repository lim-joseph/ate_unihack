#!/bin/bash
exec gunicorn --chdir src/flask-server -b 0.0.0.0:5000 app:app