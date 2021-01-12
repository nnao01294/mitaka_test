import csv

with open('rent_converted.tsv',encoding = 'utf-8') as f:
    reader = csv.reader(f,delimiter='\t')
    next(reader)
    for row in reader:
        prefecture = ['13']
        ward = ['204']
        station = ['242','4987','4986']
        roomtype = ['10','20','25','30']

        if (row[9] in prefecture)and (row[10] in ward) and(row[12] in station) and (row[34] in roomtype):
            print(row)
            with open('mitaka.csv', 'a', encoding='utf-8_sig') as csvFile:
                writer = csv.writer(csvFile)
                writer.writerow(row)
                csvFile.close()
