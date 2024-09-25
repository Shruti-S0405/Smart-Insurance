from flask import Flask, Blueprint, request, jsonify
from waitress import serve
from flask_cors import CORS

#Blueprints
from controller.service_provider_api import service_provider_api_bp
from controller.service_provider_portal import service_provider_portal_api_bp

app = Flask(__name__)
CORS(app)

#register Blueprints
app.register_blueprint(service_provider_api_bp)
app.register_blueprint(service_provider_portal_api_bp)


if __name__=='__main__':
    app.run(host='0.0.0.0',port=5001, debug=True) #run on local port
    serve(app, host='0.0.0.0',port=5001, debug=True)
