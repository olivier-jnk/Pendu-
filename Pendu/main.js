// Si le bouton play est cliqué : appeller la function commencerPartie();
document.getElementById('play').addEventListener('click', () => {
  commencerPartie();
});

let partie = "off"
let vies = 7

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
motAsplit = motChoix();





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
          var element = document.getElementById(motAsplit[i]);

          // Modification de l'ID
          element.id = 'visible'; 
          // avec cette méthode de id = lettre puis si discovers id= 'visible' ca marche partiellement. MAIS
          // Quand invisibilité, le before aussi... + quand lettre decouverte, que une qui apparait (sur les deux qu'il peut y avoir dans le mot.)
          // Trouver autre chose
          // pour la multiple coorrespondance revoir la boucle for de verification ci-dessus.

          console.log(`La lettre ${lettreEntree} correspond à une lettre dans le tableau.`);
          return true; // Correspondance trouvée, vous pouvez retourner true ou effectuer d'autres actions
        }
    }

    // Si aucune correspondance n'est trouvée
    console.log(`La lettre ${lettreEntree} ne correspond à aucune lettre dans le tableau.`);
    return false;
}

 // Sélection de l'ul où les balises li seront ajoutées
 var maListe = document.getElementById('maListe');

 // Parcours de chaque lettre du mot et création d'une balise li
 for (var i = 0; i < motAsplit.length; i++) {
     var lettre = motAsplit[i];

     // Création d'une balise li
     var li = document.createElement('li');

     // Ajout du texte de la lettre à la balise li
     li.textContent = lettre;

     // Ajout des identifiants aux balises li
     
    // li.id = 'hidden ' + lettre;     
    li.id = lettre;
     
     // Ajout de la balise li à l'ul
     maListe.appendChild(li);
 }
