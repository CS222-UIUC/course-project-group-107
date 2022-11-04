import pandas as pd
import mysql.connector
from mysql.connector import Error


#this function connects to sql databse and throws and error if it does not work
def mysql_connector():
    try:
        connection = mysql.connector.connect(host='127.0.0.1',
                                            user='root',
                                            password='cs222', connection_timeout=180)

        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("Connected to MySQL database... MySQL Server version on ", db_Info)

            cursor = connection.cursor()
        # global connection timeout arguments
            global_connect_timeout = 'SET GLOBAL connect_timeout=180'
            global_wait_timeout = 'SET GLOBAL connect_timeout=180'
            global_interactive_timeout = 'SET GLOBAL connect_timeout=180'

            cursor.execute(global_connect_timeout)
            cursor.execute(global_wait_timeout)
            cursor.execute(global_interactive_timeout)
            print(connection)
            connection.commit()
            return connection

    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
    # closing database connection.
    ###
        if connection.is_connected():
            cursor.close()
            connection.close()
            return ("MySQL connection is closed")

def csv_to_db():
    #reads data from csv files
    data = pd.read_csv("testdata.csv") #pulling data from dummy, can easily expand with more data
    df = pd.DataFrame(data)
    print(df)
    #makes the connection to sql db
    connection = mysql.connector.connect(host='127.0.0.1',
                                        user='root',
                                        password='cs222', database = 'data', connection_timeout=180)
    #uses connection and cursor to interact with the database
    cursor = connection.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS arcdatacsv (
            netid nvarchar(50),
            date nvarchar(50),        
            arccap int
        )
    ''')  #creates the table to insert into 
    for row in df.itertuples(): #loops through each row of the csv file and inserts it into 
        toinsert = '''INSERT INTO arcdatacsv (netid, date, arccap) VALUES ('{}', '{}'
        , '{}')'''.format(row.netid, row.date, row.arccap)
        cursor.execute(toinsert)     #executes sql statement
    connection.commit()
csv_to_db()