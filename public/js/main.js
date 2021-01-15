// ## Exo 1 
// Créez un objet avec vos valeurs : 'Nom', 'prenom', 'age', 'taille'
// Affichez d'abord tout l'objet via un console.log() et puis votre âge.
let personnage1 = {
    nom : 'Mendez',
    prenom : 'Zulma',
    age : 29,
    taille : '1.57cm',
    bonjour(){
        console.log(`bonjour j'ai ${this.age} ans`); 
    }
}
personnage1.bonjour();
console.log(personnage1);
// ## Exo 2 
// Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)
let personnage2 = {
    nom : 'dupont',
    prenom : 'marie',
    age : 20,
    taille : 1.60,
}
console.log(personnage2);

// ## Exo 3
// Remplir les propriétées du 3eme personnage
// Son nom doit valoir le nom du personnage1
// Son age doit valoir celui du personnage2
// Et sa taille doit être rempli avec la valeur que vous souhaitez
let personnage3 = {

};
personnage3.nom = personnage1.nom;
personnage3.age = personnage2.age;
personnage3.taille = '1.80cm'

console.log(personnage3);

// ## Exo 4
// Créer un personnage4 et donner lui la méthode [Saluer] qui dira "Coucou" avec le nom du personage2
// Lancer cette méthode
let personnage4 = {
    saluer(){
        console.log(`coucou ${personnage2.prenom}`);
    }
}
personnage4.saluer();
console.log(personnage4);
// ## Exo 5
// Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.
let personnage5 = {
    nom : 'Simi',
    prenom : 'Thamara',
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom}, ${this.prenom}`);
    }
}

personnage5.sePresenter()
console.log(personnage5);
// ## Exo 6
// Créer un objet avec un nom et une méthode
// La méthode de votre objet lance un prompt permetant de changer son age
// Une alert renvoi "[objet] a [age de l'objet] ans"
// let personne = {
//     nom : 'Marc',
//     changerAge(){
    // this.age = prompt('entre ton age')
    // console.log(`${this.nom} à ${this.age} ans`);
//     }
// }
// console.log(personne);
// personne.changerAge();

// ## Exo 7
// Créez 3 personnes avec leur nom et l'age, puis créez un voleur.
// Le voleur a juste une methode qui est 'usurpation' qui prend comme paramètre un des 3 personnages et il prend son nom et son age
let personne1 = {
    nom : 'Pierre',
    age : 30,
}

let personne2 = {
    nom : 'Guy',
    age : 34,
}

let personne3 = {
    nom : 'Patrick',
    age : 32,
}

let voleur = {
    usurpation(x){
        this.nom = x.nom
        this.age = x.age
    }
}

voleur.usurpation(perso2);
console.log(voleur);
// ## Exo 8
// Créer deux personnages du nom de François et Sergio
// Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.
let personne4 = {
    nom : 'francois',
    panier: ['lait'],
    derober(a){
        for (let i = 0; i < 2; i++) {
            let product = prompt(`Que voulez vous dérober ? \n ${sergio.panier}`)   
            this.panier.push(product);
            // a.panier.splice(sergio.panier.indexOf(product),1)
            a.panier = a.panier.filter( (el) => {
                return el != product
            })
        }
    }
}
personne4.derobe()
console.log(personne4);

let personne5 = {
    nom : 'Sergio',
    panier : ['huile', 'tomates', 'oeufs', 'pain', 'kiwi']
}

francois.derober(personne5);
console.log(personne4);
console.log(personne5);