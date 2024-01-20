function winGame () {
  console.log('gagné !')
  popwin();
  showScore ();
}

function showScore () {
  let score = vies * 7;
  let playerScore = document.getElementById('playerScore')
  playerScore.innerHTML = 'Votre score est de ' + score;
}

let partie = "off"
let vies = 7

var points = 0; 
var className = 0;
let alphabet = [];

// Systeme de l'alphabet

for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}

function createAlphabet (motTheme) {
  let motAsplit = motTheme;
  let monAlphabet = document.getElementById('monAlphabet');
  console.log('Create alphabet (qui contient les win et losse est executé.)')

  for(i = 0; i < alphabet.length; i++){   
    let lettrea = alphabet[i];
    let idletter = (lettrea +'l')   
    let li = document.createElement('button');
    li.classList.add('lettrea');
    li.id = idletter // ?
    li.textContent = (lettrea)
    // A set proprement. + prendre en compte retrait de click si buttonLettre est plus actif.
    li.addEventListener ('click', function() {
      console.log('clicked')
      if (li.classList.contains('lettrea')){
        console.log('lettreActive')
        verifierCorrespondance (lettrea, motAsplit);
        console.log(vies + 'vies')
        let score = vies * 7;
        console.log(score + 'score')
        if (points === motAsplit.length){
          winGame ();
        }else if (vies < 1){ 
          alert('Le mot etait : ' + motAsplit.join(""))
          window.location.href = "partie.html";
        }
      }  

    }) 
    monAlphabet.appendChild(li);
  }
}



// Definir une liste de mots pour le pendu.

let motsTheme = {
  classique:["ephemere", "quintessence", "luminiscence", "ubiquite", "syzygie", "effervescent", "ethere", "selenite", "alacrite", "vernissage", 
  "kaleidoscope", "melliflue", "equivoque", "palimpseste", "onomatopee", "ubuesque", "capricieux", "insouciance", "eclatant", "nacre", 
  "flibustier", "effluve", "opalescent", "sibyllin", "quasar", "serenite", "symbiose", "volupte", "iridescence", "intrication", 
  "vagabond", "zenith", "incandescent", "chiaroscuro", "labyrinthe", "petillement", "rhizome", "oxymore", "eclipsant", 
  "pyrrhique", "infini", "ecliptique", "nebuleuse", "volubile", "lithosphere", "plenitude", "effluves", "ephemeride", 
  "atemporel", "pavonner"],
  espace: [
    "asteroide", "galaxie", "cosmique", "exoplanete", "zenithal", 
    "nebuleuse", "sideral", "pulsar", "astral", "orbite", 
    "constellation", "plasmasphere", "astronaute", "elliptique", "heliosphere", 
    "quasar", "interstellaire", "chromosphere", "magnetar", "astrosismologie", 
    "vortex", "parallaxe", "geocroiseur", "perihelie", "micropesanteur", 
    "telescope", "rayonnement", "graviton", "antimatiere", "spatiotemporel", 
    "supernova", "tachyon", "astronomie", "planetaire", "rayonner", 
    "ecliptique", "astrolabe", "meteorite", "celeste", "equateur", 
    "penombre", "astrosphere", "heliopause", "galactique", "etoile filante", 
    "pesanteur", "atmosphere", "astronaviguer", "systeme solaire", "eclipsique"
  ],
  nature: [
    "sylvestre", "cascade", "emeraude", "canopee", "ephemere",
    "cristallin", "riviere", "eclosion", "brume", "abyssal",
    "eclatant", "aurore", "equinoxe", "luminescent", "serenite",
    "zenith", "floral", "cascades", "silhouette", "mystique",
    "rocher", "verdoyant", "torrent", "celeste", "paletuvier",
    "bucolique", "ruisseau", "oasis", "montagnes", "etincelant",
    "frondaison", "eclectique", "iridescent", "torrentiel", "ondulant",
    "ethere", "crispant", "lacustre", "apaisant", "soleil",
    "ecorce", "faune", "givre", "sylve", "aquifere",
    "vent", "harmonie", "gazouillis", "torrentueux", "fougere"
  ],
  test: [
    "test"
  ]
  //Inclure description dans chaque mot.
};

// let leTheme = {
//   valeur: 0,
// };

let themeAHA = motsTheme.classique;

// let theme;

let themedeV = motsTheme.classique;

function lancement (leTheme){
  motChoisiSplit = leTheme;
  console.log("function lancement lancé")
  debutDePartie (motChoisiSplit);
  createAlphabet (motChoisiSplit);
}

function choixTheme(theme){
  console.log("function choixTheme lancé")
  let leTheme = motsTheme[theme]
  
  let motChoisi = choisirMotAleatoire(leTheme); 
  let motChoisiSplit = motChoisi.split('')

  console.log(motChoisiSplit + 'motChoisiSplit')
  lancement(motChoisiSplit) // Lancement de lancement avec envoie en parametre du mot du theme.
  // Envoyer en parametre theme à motChoix.
}

// let valeurTheme = {}
// let theme = motsTheme.classique;

// function setValeurTheme(themeLeV){
//   theme = themeLeV;
//   return theme;
// }


// probleme est que valeurTheme.Theme ne dépasse pas la fonction choixTheme.

// console.log(valeurTheme.Theme + 'VT.T dans le vide.')

// let theme = motsTheme.test;

function debutDePartie (motTheme) {
  let motChoisiSplit = motTheme;
  const buttonsChoixS = document.getElementById('buttonsTheme')
  buttonsChoixS.remove();
  motPop (motChoisiSplit);
}

// let mots = [ 
//   "ephemere", "quintessence", "luminiscence", "ubiquite", "syzygie", "effervescent", "ethere", "selenite", "alacrite", "vernissage", 
//   "kaleidoscope", "melliflue", "equivoque", "palimpseste", "onomatopee", "ubuesque", "capricieux", "insouciance", "eclatant", "nacre", 
//   "flibustier", "effluve", "opalescent", "sibyllin", "quasar", "serenite", "symbiose", "volupte", "iridescence", "intrication", 
//   "vagabond", "zenith", "incandescent", "chiaroscuro", "labyrinthe", "petillement", "rhizome", "oxymore", "eclipsant", 
//   "pyrrhique", "infini", "ecliptique", "nebuleuse", "volubile", "lithosphere", "plenitude", "effluves", "ephemeride", 
//   "atemporel", "pavonner"
// ];



function choisirMotAleatoire(mots) {
  if (!mots || mots.length === 0) {
      return "Aucun mot disponible";
  }
  //Revoir random ?
  const indexAleatoire = Math.floor(Math.random() * mots.length);
  const motAleatoire = mots[indexAleatoire];
  return motAleatoire;
};

// function motChoix() {
//   console.log('MotChoix LANCE')
//   // console.log(valeurTheme.Theme + 'ValeurTheme.theme dans motChoix.')
//   let motChoisi = choisirMotAleatoire(themedeV);
//   let motAsplit = motChoisi.split('')
//   console.log(motAsplit + "LE MOT ASPLIT")
//   return motAsplit;
// }
// motAsplit = motChoix();
//motAsplit = motChoix() lance automatiquement la fonction.

// console.log(motAsplit)
// pas meilleure manière pour recuperer motAsplit. le passer en paramètres ?
// Moyen peut etre de regrouper les deux fonction précédentes ?

// Fonction pour vérifier la correspondance entre la lettre cliquée et les lettres du motAsplit
function verifierCorrespondance(valeurElementClique, motTheme) {
  valeur1 = 0
  let motAsplit = motTheme;
  for (let i = 0; i < motAsplit.length; i++) {
    if (valeurElementClique === motAsplit[i]) {    
      console.log(`La lettre ${valeurElementClique} correspond à une lettre dans le tableau.`);

      valeur1 = valeur1 + 1;
      points = points + 1;

      let element = document.getElementById(motAsplit[i]);
      element.id = 'visible'

      bonnelettre = document.getElementById(valeurElementClique + "l");
      
      bonnelettre.classList = [];
      bonnelettre.classList.add('vrai')     
    } 
  }

  if (valeur1 > 0){
    valeur1 = 0;
    console.log(points)
  }else {
    console.log(`La lettre ${valeurElementClique} ne correspond à aucune lettre dans le tableau.`);
    vies -= 1;
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

function motPop (motTheme) {
  let motAsplit = motTheme;
  // Sélection de l'ul où les balises li seront ajoutées
 let maListe = document.getElementById('maListe');

 // Parcours de chaque lettre du mot et création d'une balise li
 for (let i = 0; i < motAsplit.length; i++) {
    let lettre = motAsplit[i];
    let li = document.createElement('li');
    li.textContent = lettre;
    li.id = (lettre);
    li.classList.add("lettre");
    maListe.appendChild(li);
 }
}

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

//Mot qui s'affiche à la fin avec une description, voir des illustration... Si la personne perd mais si elle gagne aussi. 
// Au début afficher juste le mot. et la personne peut choisir de voir la description.

//Indications sur le score. + score cumulé, enchainement de partie ?

// choix de theme de mot au début du jeu.

//Modifier le design ? du pendu, la taille qu'il prend. et ajouter prévisualisation semi-transparente.

//
 
//  mettre les accents sur les mots ?

// aleatoire qui fait en sorte que si mot chosit deja pop il y a peu. choisit un autre mot.
// Cacher txt console et essayer de camouffler au mieux la reponse dans le inspecter ?