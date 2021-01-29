from flask import Flask, render_template, request
import json
#on importe les fonctions du fichier data.
from data import openfile, openfile3, openfile4, openfile5, openfile6



app = Flask(__name__)
# app fait appel au gestionnaire qui utilise flask (équivalant de my db); méthode comme le init dans les classes

#connection à la page d'accueil et ouverture du fichier data
@app.route('/')
def page():
    donnees = openfile('C:/Users/utilisateur/Google Drive/STEPHANE/Brief/Covid19-Dashboard_Céline/projet/data.csv')
    donnees3 = openfile3('C:/Users/utilisateur/Google Drive/STEPHANE/Brief/Covid19-Dashboard_Céline/projet/data.csv')
    donnees4 = openfile4('C:/Users/utilisateur/Google Drive/STEPHANE/Brief/Covid19-Dashboard_Céline/projet/data.csv')
    donnees5 = openfile5('C:/Users/utilisateur/Google Drive/STEPHANE/Brief/Covid19-Dashboard_Céline/projet/data.csv')
    donnees6 = openfile6('C:/Users/utilisateur/Google Drive/STEPHANE/Brief/Covid19-Dashboard_Céline/projet/data.csv')
    return render_template('page.html', donnees=donnees, donnees3=donnees3, donnees4=donnees4, donnees5=donnees5, donnees6=donnees6)
    #on bascule les variables donnees à gauche (variable python) vers les donnees à droite (variable htlm)


if __name__ == "__main__" :
    app.run(debug=True)