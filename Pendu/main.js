document.addEventListener('DOMContentLoaded', function() {

  debutDePartie ();
});

// Si le bouton play est cliqué : appeller la function commencerPartie();
document.getElementById('play').addEventListener('click', () => {
  verifierCorrespondance ();
  if (points === motAsplit.length){
    winGame ();
  }else if (vies < 1){

    window.location.href = "loose.html";

  }

});

// Fonction pour la victoire du joueur.
function winGame () {

  console.log('gagné !')
  // window.location.href = "win.html";
  // window.alert('votre score est de ' +score) 

  showScore ();
  // Fonction rejouer apres affichage du score.
    
  // force le alert, ca marche, mais pas ce que je souhaite.

}

function showScore () {

  let playerScore = document.getElementById('playerScore')

  playerScore.innerHTML = 'Votre score est de ' + score;
  // Fonctionne mais pas si a pour but de s'effectuer sur le win.html. A voir pourquoi.
  // de toute facon, surement retirer la redirection de page, lorsque win et/ou defaite. Tout se passe sur la meme page.

}

function debutDePartie () {

  motPop ();
}

let partie = "off"
let vies = 7
var points = 0; // var *3
var score = vies * 7;
var className = 0;

// Provioire (utile pour les tests)

// function winGame () {
//   // renvoie juste vers l'ecran game mais declenche pas vraiment la fonction win...
//   // Creer une fonction win et loose. qui seront activé si et sinon...
//   window.location.href = "win.html";
//   window.alert('votre score est de ' +score)
// }

function looseGame () {
  window.location.href = "loose.html";
} 
// 



// Definir une liste de mots pour le pendu
let mots = [ 
  "ephemere", "quintessence", "luminiscence", "ubiquite", "syzygie", "effervescent", "ethere", "selenite", "alacrite", "vernissage", 
  "kaleidoscope", "melliflue", "equivoque", "palimpseste", "onomatopee", "ubuesque", "capricieux", "insouciance", "eclatant", "nacre", 
  "flibustier", "effluve", "opalescent", "sibyllin", "quasar", "serenite", "symbiose", "volupte", "iridescence", "intrication", 
  "vagabond", "zenith", "incandescent", "chiaroscuro", "labyrinthe", "petillement", "rhizome", "oxymore", "eclipsant", 
  "pyrrhique", "infini", "ecliptique", "nebuleuse", "volubile", "lithosphere", "plenitude", "effluves", "ephemeride", 
  "atemporel", "pavonner"
];

function choisirMotAleatoire(mots) {
  if (!mots || mots.length === 0) {
      return "Aucun mot disponible";
  }

  // peut etre revoir le random, y a moyen qu'il soit pas fou.
  const indexAleatoire = Math.floor(Math.random() * mots.length);
  const motAleatoire = mots[indexAleatoire];
  return motAleatoire;
  
};

function motChoix() {
  let motChoisi = choisirMotAleatoire(mots);
  let motAsplit = motChoisi.split('')
  return motAsplit;
}
motAsplit = motChoix();
console.log(motAsplit)
// Peut etre pas la meilleure maniere de modifier la portée de motAsplit
// (motAsplit est la version finale du mot sélectionné (soigneusement choisi au hasard, puis eclaté dans un tableau.))
// Moyen peut etre de regrouper les deux fonction précédentes ?

function commencerPartie () {
  console.log("salut")
  // motPop ();
  // motPop ();
  // verifierCorrespondance();

  // if(vies < 1){
  //   alert('PERDU !');
  //   return false;
  // }
}

// const elementsWithEClass = document.getElementsByClassName(motAsplit[i]);

// Fonction pour vérifier la correspondance entre la lettre entrée par l'utilisateur et les lettres du motAsplit
function verifierCorrespondance() {
  valeur1 = 0
  // let valeur = lavaleur ();

  lettreEntreeMS = prompt('Entrez une lettre !')
  lettreEntree = lettreEntreeMS.toLowerCase();

  for (let i = 0; i < motAsplit.length; i++) {
    if (lettreEntree === motAsplit[i]) {
      // const elementsWithEClass = document.getElementsByClassName(motAsplit[i]);

      // boucle for ici normalement
      
      console.log(`La lettre ${lettreEntree} correspond à une lettre dans le tableau.`);
      // return true;
      // const valeur = valeur + 1

      // let element = document.getElementsByClassName(motAsplit[i]);
      // element.remove()
      // element.add('visible')
      
      valeur1 = valeur1 + 1;
      // console.log(valeur1)
      points = points + 1;

      let element = document.getElementById(motAsplit[i]);
      element.id = 'visible'
    }
    
  }

  if (valeur1 > 0){
    valeur1 = 0;
    console.log(points)
  }else {
    console.log(`La lettre ${lettreEntree} ne correspond à aucune lettre dans le tableau.`);
    vies = vies - 1; 
    
    
    
    if (vies === 6) {
      className = "un";
    }
    else if (vies === 5) {
      className = "deux"   
    }
    else if (vies === 4) {
      className = "trois"   
    }
    else if (vies === 3) {
      className = "quatre"   
    }
    else if (vies === 2) {
      className = "cinq"   
    }
    else if (vies === 1) {
      className = "six"   
    }
    else if (vies === 0) {
      className = "sept"   
    }
    // la methode fonctionne MAIS ! si je continue avec cette methode je vais devoir creer 7 fonctions addClass, ca marchera tout de meme mais c'est tres répétitif et ca prend de la place
    // pour rien.
    // trouver une methode pour faire en sorte que le getelementbyclassname change automatiquement dans la fonction.
    // c'est bon et cela s'est fait tres simplement. ah quoique

    // Je pense aussi qu'il est egalement possible d'eviter de repeter tout le temps le if vies= 6,5,4,3,2,1,0. pareil je pense que ca va prendre trop de place alors qu'il y a tres 
    // surement moyen de trouver une autre méthode peut etre avec une boucle for in et une variable qui se modifie a chq activation du grand else (celui qui met -1 vie.)
    
    // if (vies === 6){
    //   function addClass (){
    //     let classadd = document.getElementsByClassName('un')
    //     classadd.classList.add('visible')
    //   }
    //   addClass ();
    // }
    
    addClass();

  }
  
}


function addClass() {
  let elements = document.getElementsByClassName(className);

  if (elements.length > 0) {
    elements[0].classList.add('visible');
  } else {
    console.error('Element with class "un" not found.');
  }
}
// ne peut pas acceder a la className (variable.)



function motPop () {
  // Sélection de l'ul où les balises li seront ajoutées
 let maListe = document.getElementById('maListe');

 // Parcours de chaque lettre du mot et création d'une balise li
 for (let i = 0; i < motAsplit.length; i++) {
    let lettre = motAsplit[i];

    // Création d'une balise li
    let li = document.createElement('li');

    li.textContent = lettre;
    li.id = lettre; // li.classList.add(lettre)
     
    // Ajout de la balise li à l'ul
    maListe.appendChild(li);
 }

  
}
 

//  mettre les accents sur les mots ? sans que ca impacte le script. quand meme plus cool avec les accents, sinon ca porte a confusion.
// mettre que des mots peu courants inclure a la fin une description du mot, voir de ses origines...
// Score du joueur.
// Mettre systeme d'indice ?
// tout implemeter dans function commencerPartie.
// Dans partie boucle while(vies > 0 et arraywin < motchoisi.lenght);
// Verif si la personne rentre une phrase ou des caracteres speciaux. tout sera mieux avec le clavier de lettre directement.
// Jsp comment ca se fait mais si je rentre une lettre qui est deja rentrée et valide, cela ne fait rien. pas -1 vie, par contre si double mauvaise lettre, ca retire quand meme la vie
// Sachant que je n'ai encore rien codé pour ca.

// Changer la win et loss
