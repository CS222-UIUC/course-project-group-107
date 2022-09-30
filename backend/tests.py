import io
import sys
import datapull

def test_print():
    s = datapull.getdata()
    assert s == ['netid', 'date', 'arccap']