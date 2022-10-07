import io
import sys
import datapull
import sqlconnection
def test_print():
    s = datapull.getdata()
    assert s == ['netid', 'date', 'arccap']
def test_sql_conn():
    s = sqlconnection.mysql_connector()
    assert s == "MySQL connection is closed"