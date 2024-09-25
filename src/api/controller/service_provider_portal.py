from flask import Flask, Blueprint, request, jsonify
import json

from db.db import SmartInsuranceDatabase

service_provider_portal_api_bp= Blueprint("serviceProviderPortalAPI",__name__)

#commented for now
# with open(r"Smart-Insurance\src\prediction\model.pkl", 'rb') as f:
#     model = pickle.load(f)


@service_provider_portal_api_bp.route('/submit-claim', methods=['POST'])
def submit_claim():
    try:
        # Get the JSON data from the request
        data = request.get_json()
        data = json.loads(data)
        # Log the received data for debugging
        print('Received data:', data)

        InscClaimAmtReimbursed = data.get('InscClaimAmtReimbursed') 
        DeductibleAmtPaid = data.get('DeductibleAmtPaid')
        RenalDiseaseIndicator = data.get('RenalDiseaseIndicator')
        NoOfMonths_PartACov = data.get('NoOfMonths_PartACov')
        NoOfMonths_PartBCov = data.get('NoOfMonths_PartBCov')
        ChronicCond_Alzheimer = data.get('ChronicCond_Alzheimer')
        ChronicCond_Heartfailure = data.get('ChronicCond_Heartfailure')
        ChronicCond_KidneyDisease = data.get('ChronicCond_KidneyDisease')
        ChronicCond_Cancer = data.get('ChronicCond_Cancer')
        ChronicCond_ObstrPulmonary = data.get('ChronicCond_ObstrPulmonary')
        ChronicCond_Depression = data.get('ChronicCond_Depression')
        ChronicCond_Diabetes = data.get('ChronicCond_Diabetes')
        ChronicCond_IschemicHeart = data.get('ChronicCond_IschemicHeart')
        ChronicCond_Osteoporasis = data.get('ChronicCond_Osteoporasis')
        ChronicCond_rheumatoidarthritis = data.get('ChronicCond_rheumatoidarthritis')
        ChronicCond_stroke = data.get('ChronicCond_stroke')
        IPAnnualReimbursementAmt = data.get('IPAnnualReimbursementAmt')
        IPAnnualDeductibleAmt = data.get('IPAnnualDeductibleAmt')
        OPAnnualReimbursementAmt = data.get('OPAnnualReimbursementAmt')
        OPAnnualDeductibleAmt = data.get('OPAnnualDeductibleAmt')
        Gender_2 = data.get('Gender_2')
        Race_2 = data.get('Race_2')
        Race_3 = data.get('Race_3')
        Race_5 = data.get('Race_5')

        print(InscClaimAmtReimbursed)
        # Simulate processing and respond
        # response = {
        #     'status': 'success',
        #     'message': 'Claim submitted successfully',
        #     'data': data  # Optionally return the received data
        # }
        # return jsonify(response), 201  # HTTP 201 Created

        #---prediction-part

        columns = ['InscClaimAmtReimbursed', 'DeductibleAmtPaid', 'RenalDiseaseIndicator',
        'NoOfMonths_PartACov', 'NoOfMonths_PartBCov', 'ChronicCond_Alzheimer',
        'ChronicCond_Heartfailure', 'ChronicCond_KidneyDisease', 'ChronicCond_Cancer',
        'ChronicCond_ObstrPulmonary', 'ChronicCond_Depression', 'ChronicCond_Diabetes',
        'ChronicCond_IschemicHeart', 'ChronicCond_Osteoporasis',
        'ChronicCond_rheumatoidarthritis', 'ChronicCond_stroke',
        'IPAnnualReimbursementAmt', 'IPAnnualDeductibleAmt',
        'OPAnnualReimbursementAmt', 'OPAnnualDeductibleAmt', 'Gender_2',
        'Race_2', 'Race_3', 'Race_5']

        #input data
        input_data=[InscClaimAmtReimbursed, DeductibleAmtPaid, RenalDiseaseIndicator, NoOfMonths_PartACov, NoOfMonths_PartBCov, ChronicCond_Alzheimer, ChronicCond_Heartfailure, ChronicCond_KidneyDisease, ChronicCond_Cancer, ChronicCond_ObstrPulmonary, ChronicCond_Depression, ChronicCond_Diabetes, ChronicCond_IschemicHeart, ChronicCond_Osteoporasis, ChronicCond_rheumatoidarthritis, ChronicCond_stroke, IPAnnualReimbursementAmt, IPAnnualDeductibleAmt, OPAnnualReimbursementAmt, OPAnnualDeductibleAmt, Gender_2, Race_2, Race_3, Race_5]

        input_data_df = pd.DataFrame([input_data], columns=columns)
        pred_lable=model.predict(input_data_df)

        pred="Legitimate" if pred_lable==1 else "Fraudulent"

        # print(f"{'Legitimate' if pred == 1 else 'Fraudulent'}")
        print(pred)

    except Exception as e:
        print('Error:', e)
        return jsonify({'status': 'error', 'message': str(e)}), 400  # HTTP 400 Bad Request


