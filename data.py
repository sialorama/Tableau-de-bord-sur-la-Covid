import pandas as pd
import json
from sklearn.preprocessing import LabelEncoder
from collections import Counter
import numpy

#affichage de toutes les données au total et par jour et convertit au format json
def openfile(filename):
    dataset= pd.read_csv(filename, sep = ";", na_filter=False)
    #on met un filtre pour ne retenir que les variables hosp, rea, dc et rad au total
    dataset2 = dataset[dataset['sexe'].isin([0])] 
    # on somme en regroupant les jours
    d = dataset2.groupby("jour").sum()
    #conversion au format json
    data = d.to_json()
    return(data)

#affichage de la moyenne des variables hosp, rea, rad et dc par sexe et convertir au format json
def openfile3(filename):
    dataset= pd.read_csv(filename, sep = ";", na_filter=False)
    d3 = dataset.groupby("sexe").mean()
    data3 = d3.to_json()
    return(data3)

#Affichage des variables hosp, rad, rea et dc pour le département du finistere
def openfile4(filename):
    dataset= pd.read_csv(filename, sep = ";", na_filter=False)
    dep1 = dataset.loc[dataset.dep.isin(['29']), ['dep', 'jour','hosp','rea', 'rad', 'dc']]
    dep2 = dep1.groupby("dep").sum()
    data4 = dep2.to_json()
    return(data4)


def openfile5(filename):
    dataset= pd.read_csv(filename, sep = ";", na_filter=False)
    dataset2 = dataset[dataset['sexe'].isin([0])]
    dataset3 = dataset2.groupby("dep").sum()
    data5 = dataset3.to_json()
    return(data5)

def openfile6(filename):
    dataset= pd.read_csv(filename, sep = ";", na_filter=False)
    a = dataset.groupby("sexe").sum()
    dataset2 = (a['rea']/a['hosp'])*100 

    data6 = dataset2.to_json()
    return(data6)




#permet de lire le fichier json 
#datajson = json.loads(data)
#encodage
#print(json.dumps(datajson))





 