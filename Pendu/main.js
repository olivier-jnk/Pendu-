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

// const elementsWithEClass = document.getElementsByClassName(motAsplit[i]);

// Fonction pour vérifier la correspondance entre la lettre entrée par l'utilisateur et les lettres du motAsplit
function verifierCorrespondance() {
  valeur1 = 0
  console.log(valeur1)
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
      console.log(valeur1)

      var element = document.getElementById(motAsplit[i]);
      element.id = 'visible'

      
    }
    
  }

  if (valeur1 > 0){
    valeur1 = 0;
    console.log(valeur1)
    console.log("c'est bon !")
  }else {
    console.log(`La lettre ${lettreEntree} ne correspond à aucune lettre dans le tableau.`);
    vies = vies - 1; 

  }
  
}

 // Sélection de l'ul où les balises li seront ajoutées
 let maListe = document.getElementById('maListe');

 // Parcours de chaque lettre du mot et création d'une balise li
 for (let i = 0; i < motAsplit.length; i++) {
     let lettre = motAsplit[i];

     // Création d'une balise li
     let li = document.createElement('li');

     // Ajout du texte de la lettre à la balise li
     li.textContent = lettre;

     // Ajout des identifiants aux balises li
     
    // li.id = 'hidden ' + lettre;     
    li.id = lettre; // li.classList.add(lettre)
     
     // Ajout de la balise li à l'ul
     maListe.appendChild(li);
 }

//  mettre les accents sur les mots ? sans que ca impacte le script. quand meme plus cool avec les accents, sinon ca porte a confusion.
// mettre que des mots peu courants inclure a la fin une description du mot, voir de ses origines...
// Score du joueur.
// Mettre systeme d'indice ?
// tout implemeter dans function commencerPartie.
// Dans partie boucle while(vies > 0 et arraywin < motchoisi.lenght);
