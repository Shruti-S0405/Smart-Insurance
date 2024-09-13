from flask import Flask, request, jsonify
import json
import requests
import jwt
from jwt import PyJWKClient

# app = Flask(__name__) #just now commented
with open(r"src\api\config.json")as json_conf:
     config=json.load(json_conf)

# Function to verify the token
def verify_token(token):
    try:
        # Fetch Okta public keys (JWKS)
        jwks_client = PyJWKClient(config["oktaCredential"]["jwksURL"])
        signing_key = jwks_client.get_signing_key_from_jwt(token)

        # Decode and verify the token
        decoded_token = jwt.decode(
            token,
            signing_key.key,  # Use the fetched public key to verify
            algorithms=["RS256"],
            audience=config["oktaCredential"]["clientId"],  # Verify the 'aud' claim (audience)
            issuer=config["oktaCredential"]["issuer"]  # Verify the 'iss' claim (issuer)
        )
        return decoded_token  # Return decoded token payload if valid
    except Exception as e:
        print(f"Token verification failed: {e}")
        return None  # Return None if verification fails

# Token verification middleware to protect routes
def token_required(f):
    def wrap(*args, **kwargs):
        token = None
        # Extract token from Authorization header
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split()[1]  # Expecting Bearer token

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        # Verify the token
        decoded_token = verify_token(token)
        if not decoded_token:
            return jsonify({'message': 'Token is invalid!'}), 401
        request.user = {
            'sub': decoded_token.get('sub'),  # User ID
            'email': decoded_token.get('email'),  # User email
            'name': decoded_token.get('name') ,
            'nickname': decoded_token.get('nickname') # User name
        }


        # Token is valid, proceed to the route logic
        return f(*args, **kwargs)

    return wrap
