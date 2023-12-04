// Si le bouton play est cliqué : mettre la partie en on et activer la function commentcer partie
document.getElementById('play').addEventListener('click', () => {
  commencerPartie();
});

let partie = "off"
let vies = 7



function choisirMotAleatoire(mots) {
  if (!mots || mots.length === 0) {
      return "Aucun mot disponible";
  }

  const indexAleatoire = Math.floor(Math.random() * mots.length);
  const motAleatoire = mots[indexAleatoire];
  return motAleatoire;
  
};

function motChoix() {
  let motChoisi = choisirMotAleatoire(mots);
  let motAsplit = motChoisi.split('')
  
  console.log("Mot choisi aléatoirement :", motAsplit);
}


// Definir une liste de mots pour le pendu
let mots = [ 
  "éphémère", "quintessence", "luminiscence", "ubiquité", "syzygie",
  "effervescent", "éthéré", "sélénite", "alacrité", "vernissage",
  "kaleidoscope", "melliflue", "équivoque", "palimpseste", "onomatopée",
  "ubuesque", "capricieux", "insouciance", "éclatant", "nacré",
  "flibustier", "effluve", "opalescent", "sibyllin", "quasar",
  "sérénité", "symbiose", "volupté", "iridescence", "intrication",
  "vagabond", "zenith", "incandescent", "chiaroscuro", "labyrinthe",
  "pétillement", "rhizome", "oxymore", "éclipsant", "pyrrhique",
  "infini", "écliptique", "nébuleuse", "volubile", "lithosphère",
  "plénitude", "effluves", "éphéméride", "atemporel", "pavonner"
];


function commencerPartie () {

  motChoix();

}

