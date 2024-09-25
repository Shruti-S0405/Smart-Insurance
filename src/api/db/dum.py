import mysql.connector 

mydb=mysql.connector.connect(
        host="13.202.73.204", 
        user="root", 
        password="dbpass",
        database="db",
        port=33669)

cur=mydb.cursor()