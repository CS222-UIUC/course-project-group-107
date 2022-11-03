import pandas as pd
import mysql.connector
from mysql.connector import Error

def isvalidpass(netid, password):
    connection = mysql.connector.connect(host='127.0.0.1',
                                        user='root',
                                        password='cs222', database = 'data', connection_timeout=180)
    #uses connection and cursor to interact with the database
    cursor = connection.cursor()
    sql_stmt = "SELECT * FROM login WHERE NetID = '{}'".format(netid) #finds row with that password
    #print(sql_stmt)
    cursor.execute(sql_stmt)
    s = cursor.fetchall() #executes and gets the row
    print(cursor.rowcount)
    print (s)
    if (cursor.rowcount == 0): #if rowcount is 0 means no username exists
        return "Invalid Username"   
    print(s[0][1])
    
    if s[0][1] != password:  #chekcs to see if password is correct
        return "Invalid Password"
    else:  #means that everything is ok
        return "Proceed"

def newuser(netid, password):
    connection = mysql.connector.connect(host='127.0.0.1',
                                        user='root',
                                        password='cs222', database = 'data', connection_timeout=180)
    #uses connection and cursor to interact with the database
    cursor = connection.cursor()
    find_user_stmt = "SELECT * FROM login WHERE NetID = '{}'".format(netid)
    cursor.execute(find_user_stmt)
    cursor.fetchall()
    if(cursor.rowcount != 0):
        return "Username Already Exists"
    insert_stmt = "INSERT INTO login (NetID, Password) VALUES ('{}', '{}')".format(netid, password)
    cursor.execute(insert_stmt)
    connection.commit()
    return "Successful New User"