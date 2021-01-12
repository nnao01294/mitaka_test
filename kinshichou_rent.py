import csv
import pandas as pd
import json

df = pd.read_csv('kinshichou.csv',header = None,encoding = 'utf-8')
df2 = df.loc[:,[12,37]]

count = 0
total = 0
station = [207,4905,6432,4604,4906,4659,1932,4602,4603,6407,4907,4605,4660]
zeros = [0] * len(station)
countT = dict(zip(station,zeros))
totalT = dict(zip(station,zeros))

for i in df2.index.values:
    for x in station:
        if(df2.iloc[i,0]==x):
            totalT[x] = totalT[x] + df2.iloc[i,1]
            countT[x] = countT[x] + 1

for x in station:
    try:
        ave = totalT[x]/countT[x]
    except ZeroDivisionError:
        ave = 0
    print(x)
    print(ave)
