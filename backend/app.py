from crypt import methods
from flask import Flask, jsonify, render_template
from database import connect, getApps, getAppsContent   #, getAppsByKeyword
from bson.json_util import dumps
from flask_cors import CORS


app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['JSON_AS_ASCII'] = False

CORS(app, resources={r"/.*": {"origins": ["*"]}})

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/helloWorld", methods=['GET'])
def helloWorld():
    conn = connect()
    return 'hello world'

@app.route("/apps", methods=["GET"])
def apps():
    data = getApps()
    return dumps(data)

# @app.route("/apps/<keyword>", methods=["GET"])
# def appsByKeyword(keyword):
#     data = getAppsByKeyword(keyword)
#     return dumps(data)

@app.route("/apps/content/<app_id>")
def appsContent(app_id):
    data = getAppsContent(app_id)
    return jsonify(data)

if __name__ == '__main__':
    app.run('0.0.0.0', 8000, debug=True)