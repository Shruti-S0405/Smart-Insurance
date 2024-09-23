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
    result={"RenalDiseaseIndicator":"one", "ChronicCond_Alzheimer":"two", "ChronicCond_Heartfailure":"three", "ChronicCond_KidneyDisease":"four", "ChronicCond_Cancer":"five", "ChronicCond_ObstrPulmonary":"six", "ChronicCond_Depression":"seven", "ChronicCond_Diabetes":"eight", "ChronicCond_IschemicHeart":"nine", "ChronicCond_Osteoporasis":"ten", "ChronicCond_rheumatoidarthritis":"eleven", "ChronicCond_stroke":"twelve", "IPAnnualReimbursementAmt":"thirteen", "IPAnnualDeductibleAmt":"fourteen", "OPAnnualReimbursementAmt":"fifteen", "OPAnnualDeductibleAmt":"sixteen"}
    return jsonify(result)
