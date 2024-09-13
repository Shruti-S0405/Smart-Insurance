from flask import Flask, Blueprint, request, jsonify
from waitress import serve
from flask_cors import CORS

#Blueprints
from controllers.service_provider_api import membersevice_provider_api_bp_api_bp
from controllers.login import member_api_bp

if __name__=='__main__':
    app.run(host='0.0.0.0',port=5001) #run on local port
    serve(app, host='0.0.0.0',port=5001, threads=20)
