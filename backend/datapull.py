import csv
def getdata():
    with open('testdata.csv') as csvfile:
        csvReader = csv.reader(csvfile, delimiter=',')
        for row in csvReader:
            print(row)
getdata()
