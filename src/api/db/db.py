import mysql.connector 
import json


class SmartInsuranceDatabase:
    def __init__(self):
        self.mydb=mysql.connector.connect(
        host="buxdbalgmzpodtuy7er4-mysql.services.clever-cloud.com", 
        user="uikojejlkuq1vlas", 
        password="cMA3SJW5eE69gAieSHuh",
        database="buxdbalgmzpodtuy7er4")

        self.cur=self.mydb.cursor()


    def get_all_serviceprovider(self):
        self.cur.callproc('GetAllServiceProviders')
        data = {'serviceProviderDetails':[]}

        for result in self.cur.stored_results():
            rows = result.fetchall()  # Fetch all rows
        for row in rows:
            result={"provider_id":row[0], 'name':row[1], 'provider_type':row[2], 'region_id':row[3], 'status':row[4], 'no_of_claims':row[5]}
            data['serviceProviderDetails'].append(result)
        self.cur.close()
        self.mydb.close()
        return(data)


    def get_all_claims(self, id):
        self.cur.callproc('GetAllClaims', [id])
        data={'claimDetails':[]}

        for result in self.cur.stored_results():
            rows = result.fetchall()  # Fetch all rows
        for row in rows:
            result={'service_provider':id, "claim_id":row[0], 'ai_check':row[1], 'status':row[2], 'service_name':row[3]}
            data['claimDetails'].append(result)
        self.cur.close()
        self.mydb.close()
        return(data)

    def get_medical_condition_count(self,provider_id):
        self.cur.callproc('GetMedicalConditionCount', [provider_id])
        data={'claimDetails':[]}
        l=[]
        for result in self.cur.stored_results():
            rows = result.fetchall()  # Fetch all rows
        for row in rows:
            l.append(row)
        data=dict(l)
        return(data)
        self.cur.close()
        self.mydb.close()

    #database data updates

    # def insertinto_claim_services

        


if __name__=='__main__':
    obj=SmartInsuranceDatabase()
    result=obj.get_medical_condition_count(5001)
    print(result)
