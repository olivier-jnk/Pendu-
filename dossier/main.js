// Remettre de l'ordre dans tout ce raffut. nettoyer commentaires et hiérarchie plus logique.
// Pendu en prévisualisation semi-transparente, pour visualiser le dessin du pendu.

// Des que la page charge lancer les deux fonctions.
document.addEventListener('DOMContentLoaded', function() {

  debutDePartie ();
  createAlphabet ();
});

// Fonction pour la victoire du joueur.
function winGame () {
  console.log('gagné !')
  popwin();
  // window.location.href = "win.html";
  // window.alert('votre score est de ' +score) 
  showScore ();
  // Fonction rejouer apres affichage du score.
}

function showScore () {
  let score = vies * 7;
  let playerScore = document.getElementById('playerScore')
  playerScore.innerHTML = 'Votre score est de ' + score;
  // le score est constamment de 49. Probleme dans le calcul du score qui se fait constamment avec le vies a 7
}

function debutDePartie () {
  motPop ();
}

let partie = "off"
let vies = 7

var points = 0; // var *3
var className = 0;
let alphabet = [];

// Systeme de l'alphabet

for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}

console.log(alphabet);

function createAlphabet () {
  let monAlphabet = document.getElementById('monAlphabet');

  for(i = 0; i < alphabet.length; i++){

    
    let lettrea = alphabet[i];
    let idletter = (lettrea +'l')
    

    let li = document.createElement('button');

    li.classList.add('lettrea');
    li.id = idletter // ?

    li.textContent = (lettrea)
     
    monAlphabet.appendChild(li);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var boutons = document.querySelectorAll('.lettrea');

  boutons.forEach(function(bouton) {
    bouton.addEventListener('click', function() {

      // monElementId = document.getElementById(idletter);
      // console.log(monElementId)


      valeurElementClique = bouton.textContent;

      if (bouton.classList.contains('lettrea')){
        verifierCorrespondance ();
        console.log(vies + 'vies')
        // let score = vies * 7;
        // console.log(score + 'score')

        if (points === motAsplit.length){
          winGame ();
        }else if (vies < 1){
      
          alert('Le mot etait :' + motAsplit)
          window.location.href = "partie.html";
        }
      }
      
    });
  });
});

// function looseGame () {
//   alert('le mot était: ' + motAsplit)
//   // window.location.href = "loose.html";
// } 
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
}

// Fonction pour vérifier la correspondance entre la lettre cliquée et les lettres du motAsplit
function verifierCorrespondance() {
  valeur1 = 0
  // let valeur = lavaleur ();

  // lettreEntreeMS = prompt('Entrez une lettre !')
  // lettreEntree = lettreEntreeMS.toLowerCase();

  for (let i = 0; i < motAsplit.length; i++) {
    if (valeurElementClique === motAsplit[i]) {
      // const elementsWithEClass = document.getElementsByClassName(motAsplit[i]);

      // boucle for ici normalement
      
      console.log(`La lettre ${valeurElementClique} correspond à une lettre dans le tableau.`);
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
      // bouton.className.add('vrai');

      bonnelettre = document.getElementById(valeurElementClique + "l");
      
      bonnelettre.classList = [];
      bonnelettre.classList.add('vrai')
      // monElementId.classList.add('vrai');
      
    } 
  }

  if (valeur1 > 0){
    valeur1 = 0;
    console.log(points)
  }else {
    console.log(`La lettre ${valeurElementClique} ne correspond à aucune lettre dans le tableau.`);
    vies = vies - 1; 
    badLetter = document.getElementById(valeurElementClique + 'l');  
    badLetter.classList = [];
    badLetter.classList.add('faux')
    
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
    li.id = (lettre);
    li.classList.add("lettre");

    maListe.appendChild(li);
 }
}
 
//  mettre les accents sur les mots ? sans que ca impacte le script. quand meme plus cool avec les accents, sinon ca porte a confusion.
// mettre que des mots peu courants inclure a la fin une description du mot, voir de ses origines...
// Score du joueur.
// Mettre systeme d'indice ?

// mettre des indications sur le score. est ce que c'est le score max... score cumulatifs avc l'enchainement des parties.

// Changer la win et loss

// aleatoire qui fait en sorte que si mot chosit deja pop il y a peu. choisit un autre mot.

// Definition du mot + annonciation de celui-ci si défaite.
// meilleur design !
// popup win. avec 'vous avez gagné' score + fautes + rejouer + description du mot.

// cacher le texte dans console. // faire en sorte que ce soit des barres simples sans le mot. et les lettres apparaissent si elles sont citées en fonction de leur assignement. ? faire au 
// ... moins en sorte qu'il n'apparaisse pas dans le html, meme si il restera visible dans le js (liste de mots.) peut etre pas s'attarder sur ca, cela va prendre bcp de temps.
// toute la partie design et responsive qui peut prendre pas mal de temps.
// Possibilité de choisir un thème de mots.

function popwin (){
  document.getElementById('myModal').style.display = 'block';
  document.body.style.overflow = 'hidden'; 
}

document.getElementsByClassName('close')[0].addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = 'none';
      document.body.style.overflow = 'auto';
  }
});
