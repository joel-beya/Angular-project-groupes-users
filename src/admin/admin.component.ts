import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
//Classe adminn avec un id et un mot de passe
//Intialiser les valeurs de id et mdp
export class AdminComponent implements OnInit {
  id: string = "admin";
  mdp: string = "admin";

  //Recevoir en entrée le nombre d'utilisateurs
  nbUsers: string = "";
  nbGroupes: string = "";

  //Choisir en entrée une configuration LASTMIN ou LASTMAX
  config: string ="";

  constructor() { }

  ngOnInit() {
  }

  //Méthode pour vérifier si l'admin est connecté
  //Si oui, on affiche la page admin
  //Sinon, on affiche un message d'erreur
  connecter() {
    if (this.id == "admin" && this.mdp == "admin") {
      console.log("Connecté");
    }
    else {
      console.log("Erreur");
    }
  }
  //recuperer le nombre d'utilisateurs
  getNbUsers() {
    return this.nbUsers;
  }
  //modifier le nombre d'utilisateurs
  setNbUsers(nbUsers: string) {
    this.nbUsers = nbUsers;
  }
  //recuperer le nombre de groupes
  getNbGroupes() {
    return this.nbGroupes;
  }
  //modifier le nombre de groupes
  setNbGroupes(nbGroupes: string) {
    this.nbGroupes = nbGroupes;
  }
  //recuperer la configuration
  getConfig() {
    return this.config;
  }
  //modifier la configuration
  setConfig(config: string) {
    this.config = config;
  }
  //Affiche le nombre d'utilisateurs, de groupes et la configuration depuis le fichier admin.component.html
  onSubmit() {
    console.log("Nombre d'utilisateurs: " + this.nbUsers);
    console.log("Nombre de groupes: " + this.nbGroupes);
    console.log("Configuration: " + this.config);
  }
  //Fonction pour créer une liste de groupe d'utilisateurs en fonction du nombre d'utilisateurs, du nombre de groupes et de la configuration
  creerGroupes() {
  }
  //Créer un composant utilisateur
  //id_utilisateur: string;
  //Mot de passe: string;

}
