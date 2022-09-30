import io
import sys
import datapull
def test_one():

    assert 1 == 1

def test_print():
    datapull.getdata()
    assert 2 == 2

test_print()