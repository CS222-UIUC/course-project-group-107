import csv
def getdata():
    ###this script takes testdata csv file and currently returns the first row
    #giving us the categories for data to be organized later on
    with open('testdata.csv') as csvfile:
        csvReader = csv.reader(csvfile, delimiter=',')
        for row in csvReader:
            print(row)
            return row
#getdata()
