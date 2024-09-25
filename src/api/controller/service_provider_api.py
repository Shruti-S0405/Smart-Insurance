from flask import Flask, Blueprint, request, jsonify
import json

from db.db import SmartInsuranceDatabase

# Create a Blueprint instance for the member API
service_provider_api_bp= Blueprint("serviceProviderAPI",__name__)


#Create member API route
@service_provider_api_bp.route('/', methods=['GET'])
def home():
    return "Hi"

@service_provider_api_bp.route('/getAllServiceProviders', methods=['GET'])
def service_provider_get():
    obj=SmartInsuranceDatabase()
    data=obj.get_all_serviceprovider()
    return jsonify(data)

@service_provider_api_bp.route('/claims/<int:id>', methods=['GET'])
def get_all_claims(id):
    obj=SmartInsuranceDatabase()
    data=obj.get_all_claims(id)
    return jsonify(data)

@service_provider_api_bp.route('/member/<int:id>', methods=['GET'])
def get_member_details(id):
    obj=SmartInsuranceDatabase()
    data=obj.get_medical_condition_count(id)
    return jsonify(data)

@service_provider_api_bp.route('/chart-data', methods=['GET'])
def graph_data(id):
    result={"barData":{"values":[65,59,80,81,56,55,40],"label":"Dataset 1"},"pieData":{"values":[120,150,180,90],"labels":["Red","Blue","Yellow","Green"]}}
    return jsonify(result)