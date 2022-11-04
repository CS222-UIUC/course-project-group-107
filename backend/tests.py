import io
import sys
import datapull
import sqlconnection
import pandas as pd
import mysql.connector
import logincheck

from mysql.connector import Error

def test_print():
    s = datapull.getdata()
    assert s == ['netid', 'date', 'arccap']
def test_sql_conn():
    s = sqlconnection.mysql_connector()
    assert s == "MySQL connection is closed"

def test_data_insert():
    s = sqlconnection.csv_to_db()
    #testing to see if the table is created and data is inserted
    #use cursor and connection to select first row
    sql_stmt = "SELECT * FROM data.arcdatacsv LIMIT 1"
    connection = mysql.connector.connect(host='127.0.0.1',
                                        user='root',
                                        password='cs222', database = 'data', connection_timeout=180)
    #uses connection and cursor to interact with the database
    cursor = connection.cursor()

    cursor.execute(sql_stmt)
    firstrow = cursor.fetchall() #executes query and fetches the data 
    print(firstrow)
    assert firstrow == [('ktrikha2', '2022-03-22', 575)]  #asserts data has been created and pulled into the db 

def test_new_user(): #this test case will only work once, need to change parameters
    s = logincheck.newuser('testuser','testpass')  #tested for both user name existing and for 
    assert s == "Successful New User"    

def test_password_check():
    s = logincheck.isvalidpass('ktrikha2','hi')
    print(s)
    assert s == "Proceed"

