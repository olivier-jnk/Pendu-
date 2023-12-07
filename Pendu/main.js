// Si le bouton play est cliqué : appeller la function commencerPartie();
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
  return motAsplit;
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
  verifierCorrespondance();


}

// Fonction pour vérifier la correspondance entre la lettre entrée par l'utilisateur et les lettres du motAsplit
function verifierCorrespondance() {
  
    // Definit la lettre entrée (choisit par l'utilisateur)
    lettreEntreeMS = prompt('Entrez une lettre !')
    // Convertit la lettre entrée en minuscule (correspondance avec le tableau.)
    lettreEntree = lettreEntreeMS.toLowerCase();

    // Boucle à travers le tableau qui permet la verification lettre par lettre. chq ittération (1 tour de boucle) = +1. Tant que i est strictement inferieur a la taille du tableau
    // (nombre de lettres) continuer la boucle.
    for (let i = 0; i < motAsplit.length; i++) {
        // Vérifier si la lettre d'entrée correspond à une lettre dans le tableau
        if (lettreEntree === motAsplit[i]) {
            console.log(`La lettre ${lettreEntree} correspond à une lettre dans le tableau.`);
            return true; // Correspondance trouvée, vous pouvez retourner true ou effectuer d'autres actions
        }
    }

    // Si aucune correspondance n'est trouvée
    console.log(`La lettre ${lettreEntree} ne correspond à aucune lettre dans le tableau.`);
    return false;
}

// Généré par chat gpt. test pour conversion de chaque lettre du mot (motAsplit) en li + ajout de id. (class = possible ?)
// La classe définira si la lettre serait visible ou non + caché par un trait.
 // Liste de mots
 var motss = ["chat", "chien", "oiseau", "poisson"];

 // Choix d'un mot au hasard
 var motChoisi = motss[Math.floor(Math.random() * motss.length)];

 // Sélection de l'ul où les balises li seront ajoutées
 var maListe = document.getElementById('maListe');

 // Parcours de chaque lettre du mot et création d'une balise li
 for (var i = 0; i < motChoisi.length; i++) {
     var lettre = motChoisi[i];

     // Création d'une balise li
     var li = document.createElement('li');

     // Ajout du texte de la lettre à la balise li
     li.textContent = lettre;

     // Ajout des identifiants aux balises li
     li.id = lettre;
     li.id = 'test';
     li.id = 'caché';     
     li.setAttribute('data-hidden', 'true'); // Deuxième identifiant (hidden)
     li.setAttribute('data-lettre', lettre);  // Troisième identifiant

     // Ajout de la balise li à l'ul
     maListe.appendChild(li);
 }


// Problème a régler : motAsplit dans derniere function 'is not defined', definir motAsplit à l'ext de sa fonction sans impact négatif sur le code.

