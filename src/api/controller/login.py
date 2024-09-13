from flask import Flask, Blueprint, request, jsonify

from helper.helper import token_required
from db.db import ServiceProviderDatabase

# Create a Blueprint instance for the login API
login_bp= Blueprint("login",__name__)

serviceProvider_obj = ServiceProviderDatabase()

#Login API route
@login_bp.route('/login', methods=['GET'], endpoint="login_endpoint")
@token_required
def login():
    try:
        user=request.user
        user_name=user["nickname"] #Getting username
        id=member_obj.okta_login(user_name) #Getting user id from Database
        if id:
            return jsonify({"serviceProvider_id":id}),200
        else:
            return jsonify({"status":"unauthorized"}),401
        
    except:
        print("entered exception")
        return jsonify({"status": "unauthorized"}),401
