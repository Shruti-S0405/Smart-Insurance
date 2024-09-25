import mysql.connector 
import json


class SmartInsuranceDatabase:
    def __init__(self):
        self.mydb=mysql.connector.connect(
        host="13.202.73.204", 
        user="root", 
        password="dbpass",
        database="db",
        port=33669)

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
        self.cur.callproc('GetAllClaimss', [id])
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
        self.cur.close()
        self.mydb.close()
        return(data)

    #database data updates

    def insertinto_claim_services(self, claim_id, services_lst):
        try:
            for service in services_lst:
                self.cur.callproc('InsertIntoClaimServices', [claim_id, service])
            
            # Commit the transaction if everything goes fine
            self.mydb.commit()
            
        except Exception as e:
            # Rollback in case of any error
            self.mydb.rollback()
            print(f"Error: {e}")
        
        finally:
            # Always close the cursor and connection, even if an error occurs
            self.cur.close()
            self.mydb.close()
            return {"status":"success"}

    def insertinto_claims(self, provider_id, ai_check, status='pending'):
        try:
            self.cur.callproc('InsertIntoClaims', [provider_id, ai_check, status])
            # Commit the transaction if necessary (depends on your procedure)
            self.mydb.commit() 
            # claim_id = None
            # result = self.cur.fetchone()
            # if result:
            #     claim_id = result[0]  # Assuming your procedure returns the claim_id

            for result in self.cur.stored_results():
                rows = result.fetchall()  # Fetch all rows
            for row in rows:
                result={"claim_id":row[0]}
            claim_id=result["claim_id"]
            
            # Commit the transaction if no errors occurred
            self.mydb.commit()

            return claim_id

        except Exception as e:
            # handle rollback
            self.mydb.rollback()
            print(f"An error occurred: {e}")

        finally:
            self.cur.close()
            self.mydb.close()

    def update_claim_status(self, claim_id, status):
        try:
            self.cur.callproc('UpdateClaimStatus', [claim_id, status])
            # Commit the transaction if necessary (depends on your procedure)
            self.mydb.commit() 
        except Exception as e:
            # handle rollback
            self.mydb.rollback()
            print(f"An error occurred: {e}")
        finally:
            self.cur.close()
            self.mydb.close()
        


if __name__=='__main__':
    obj=SmartInsuranceDatabase()
    result=obj.get_all_claims(5001)
    print(result)
