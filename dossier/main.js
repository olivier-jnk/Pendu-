function winGame (motHasard) {
  let motAsplit = motHasard; 
  console.log('gagné !')
  popwin();
  showScore (motAsplit);
}

function showScore (motHasard) {
  let motAsplit = motHasard; 
  let score = vies * 7;
  let playerScore = document.getElementById('playerScore')
  playerScore.innerHTML = 'Votre score est de ' + score + " description du mot " + motAsplit.join("") + 
  " est : " + motsTheme.descriptions[motAsplit.join("")].description ;
}

let partie = "off"
let vies = 7

var points = 0; 
var className = 0;
let alphabet = [];


for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}

function createAlphabet (motTheme) {
  let motAsplit = motTheme;
  let monAlphabet = document.getElementById('monAlphabet');

  for(i = 0; i < alphabet.length; i++){   
    let lettrea = alphabet[i];
    let idletter = (lettrea +'l')   
    let li = document.createElement('button');
    li.classList.add('lettrea');
    li.id = idletter
    li.textContent = (lettrea)

    li.addEventListener ('click', function() {
      console.log('clicked')
      if (li.classList.contains('lettrea')){
        console.log('lettreActive')
        verifierCorrespondance (lettrea, motAsplit);
        console.log(vies + 'vies')
        let score = vies * 7;
        console.log(score + 'score')
        if (points === motAsplit.length){
          winGame (motAsplit);
        }else if (vies < 1){ 
          if(motsTheme.descriptions[motAsplit.join("")]){ // Si la description existe
            alert('PERDU ! \n Le mot etait : ' + motAsplit.join("")+ 
            " description : " + motsTheme.descriptions[motAsplit.join("")].description)
          }else{ // Si il n'y a pas de description au mot. 
            alert('PERDU ! \n Le mot etait : ' + motAsplit.join(""))
          };
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
  ],
  descriptions:{
    test: { mot: "test", description: "Ceci est la description de test" }, 
    sylvestre: {mot: "sylvestre", description: "Relatif, propre aux forêts, aux bois."},
    mystique: {mot: "mystique", description: "Relatif à des expériences spirituelles ou à des réalités supérieures."},
    paletuvier: {mot: "paltuvier", description: "Relatif à des expériences spirituelles ou à des réalités supérieures."},
    // Mettre la description de chaque mot. + lien vers des sources plus précises et détaillées sur le mot ?
    // Surement mieux de mettre ce systeme en place dès le tableau de mots, ca peut éviter de trop en rajouter.
  }
};

function lancement (leTheme){
  motChoisiSplit = leTheme;
  debutDePartie (motChoisiSplit);
  createAlphabet (motChoisiSplit);
}

function choixTheme(theme){
  let leTheme = motsTheme[theme]
  
  let motChoisi = choisirMotAleatoire(leTheme); 
  let motChoisiSplit = motChoisi.split('')
  // Ce serait beaucoup plus simple si leTheme et motChoisiSplit etait directement accessible de toutes les variables. choix theme = geante fonction
  // Qui englobe toutes les autres ?
  lancement(motChoisiSplit) // Lancement de lancement avec envoie en parametre du mot du theme.
}

function debutDePartie (motTheme) {
  let motChoisiSplit = motTheme;
  const buttonsChoixS = document.getElementById('buttonsTheme')
  buttonsChoixS.remove();
  motPop (motChoisiSplit);
}

function choisirMotAleatoire(mots) {
  if (!mots || mots.length === 0) {
      return "Aucun mot disponible";
  }
  //Revoir random ?
  const indexAleatoire = Math.floor(Math.random() * mots.length);
  const motAleatoire = mots[indexAleatoire];
  return motAleatoire;
};

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

// Fenetre modulable de win. 

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
// Au début afficher juste le mot. et la personne peut choisir de voir la description ?

//Indications sur le score. + score cumulé, enchainement de partie ?

//Modifier le design ? du pendu, la taille qu'il prend. et ajouter prévisualisation semi-transparente. + ameliorer Responsive. 

// Pb.quand la fenetre modulable est fermé avec la croix la partie précédente reprend.

// Mettre le choix de theme sur une autre page ou masquer le pendu au début mais ne pas laisser comme ca.

//
 
//  mettre les accents sur les mots ?

// aleatoire qui fait en sorte que si mot chosit deja pop il y a peu. choisit un autre mot.
// Cacher txt console et essayer de camouffler au mieux la reponse dans le inspecter ?