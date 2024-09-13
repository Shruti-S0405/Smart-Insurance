import pyodbc
import json

with open(r"src\api\config.json")as json_conf:
     config=json.load(json_conf)

class ServiceProviderDatabase:
    def __init__(self):
        self.conn=pyodbc.connect(config["databaseConnection"]) #Establish connect with the database
        self.cursor=self.conn.cursor() #Create cursor

    def servie_providers(self,id): 
        self.cursor.execute("{call ServiceProviders(?)}",(id))
        rows=self.cursor.fetchall()
        content=[{'id':row.ID,'name':row.NAME, 'region_id': row.REGION_ID, 'region': row.REGION, 'year':row.year, 'status':row.STATUS,} for row in rows]
        data={"ServiceProvider":{"ServiceProviderID":id,"ServiceProviderDetails":content}}
        self.cursor.close()
        return data
