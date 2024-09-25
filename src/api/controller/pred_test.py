import pickle
import pandas as pd

with open(r"Smart-Insurance\src\prediction\model.pkl", 'rb') as f:
    model = pickle.load(f)

columns = ['InscClaimAmtReimbursed', 'DeductibleAmtPaid', 'RenalDiseaseIndicator',
        'NoOfMonths_PartACov', 'NoOfMonths_PartBCov', 'ChronicCond_Alzheimer',
        'ChronicCond_Heartfailure', 'ChronicCond_KidneyDisease', 'ChronicCond_Cancer',
        'ChronicCond_ObstrPulmonary', 'ChronicCond_Depression', 'ChronicCond_Diabetes',
        'ChronicCond_IschemicHeart', 'ChronicCond_Osteoporasis',
        'ChronicCond_rheumatoidarthritis', 'ChronicCond_stroke',
        'IPAnnualReimbursementAmt', 'IPAnnualDeductibleAmt',
        'OPAnnualReimbursementAmt', 'OPAnnualDeductibleAmt', 'Gender_2',
        'Race_2', 'Race_3', 'Race_5']

# Create a DataFrame with the input data
input_data_df = pd.DataFrame([[27230, 1238.0, 0, 468, 468, 70, 61, 59, 77, 0, 0, 0, 0, 0, 74, 75, 117160, 9612, 95200, 25210, 23, 6, 0, 0]], 
                            columns=columns)
pred_lable=model.predict(input_data_df)
pred="Legitimate" if pred_lable==1 else "Fraudulent"
# print(f"{'Legitimate' if pred == 1 else 'Fraudulent'}")
print(pred)

