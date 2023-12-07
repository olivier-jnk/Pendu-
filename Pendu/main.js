// Si le bouton play est cliqué : appeller la function commencerPartie();
document.getElementById('play').addEventListener('click', () => {
  commencerPartie();
});

let partie = "off"
let vies = 7

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
// Peut etre pas la meilleure maniere de modifier la portée de motAsplit
// (motAsplit est la version finale du mot sélectionné (soigneusement choisi au hasard, puis eclaté dans un tableau.))
// Moyen peut etre de regrouper les deux fonction précédentes ?

function commencerPartie () {
  
  verifierCorrespondance();

  if(vies < 1){
    alert('PERDU !');
    return false;
  }
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
          
          lettreEntree.class = 'validé';
          // Modification de l'ID
          element.id = 'visible'; 
          // avec cette méthode de id = lettre puis si discovers id= 'visible' ca marche partiellement. MAIS
          // Quand invisibilité, le before aussi... + quand lettre decouverte, que une qui apparait (sur les deux qu'il peut y avoir dans le mot.)
          // Trouver autre chose
          // C'est bon pour la multiple correspondance (j'ai juste retiré le return true.)
          // Nouveau problemes des mots avec accents dans la variable 'mots'.

          console.log(`La lettre ${lettreEntree} correspond à une lettre dans le tableau.`);
        }
    }

    // Si aucune correspondance n'est trouvée
    console.log(`La lettre ${lettreEntree} ne correspond à aucune lettre dans le tableau.`);
    alert('Mauvaise lettre essayer encore')
    vies = vies - 1;
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

//  mettre les accents sur les mots ? sans que ca impacte le script. quand meme plus cool avec les accents, sinon ca porte a confusion.
// mettre que des mots peu courants inclure a la fin une description du mot, voir de ses origines...
// Score du joueur.
// Mettre systeme d'indice ?
// tout implemeter dans function commencerPartie.
// Dans partie boucle while(vies > 0)

//A MODIFIER
// Message lettre mauvaise meme si elle est correcte 
// Point dans le after
// Faire en sorte que meme dans 'inspecter' le mot soit caché.
// Nettoyer l'interface (garder l'essentiel et commencer un design plus épuré.)
// Mettre en place le systeme de 'vies'
//...
