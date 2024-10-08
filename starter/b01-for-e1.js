/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : initialisez un compteur pour définir OÙ COMMENCER
    - condition : écrivez une condition sur le compteur pour spécifier QUAND ARRÊTER
    - étape : incrémentez le compteur pour définir COMMENT AVANCER dans la boucle
*/

/*

EXEMPLE 1 :
- Affichez les nombres de 1 à 10
  - 1°) sans utiliser de boucle : écrivez toutes les instructions à la main, une par une
  - 2°) en utilisant la boucle FOR
- Écrivez la table d'évolution des variables
*/

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);



for (let i = 1; i<=10; i++){
    console.log(i);
}



// 1°) sans boucle : Écrivez ici toutes les instructions à la main, une par une

// 2°) avec boucle FOR : Écrivez ici le code de la boucle FOR

// N.B. TABLE D'ÉVOLUTION DES VARIABLES :
//   nbre      nbre < =10           console.log(nbre)        nbre++
// nbre = 1,   1 < 5 true,           affiche 1,          nbre passe à 1+1 = 2
// nbre = 2,   2 < 5 true,           affiche 2,          nbre passe à 2+1 = 3
// ...
// nbre = 10,  10 <= 10 true,        affiche 10,         nbre passe à 10+1 = 11
// nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !






















/* TEST ( va faire planter le navigateur

let i = 42; // initialisation variable

while( i >= 1){ // ne s'arrête pas car sera true     = condition. i plus petit ou egal condition sera vérifié là
    console.log("i");   // affiche la mise à jour
    i -- ;   // mise à jour de la variable
}


 */

/*.         do while

do {
    console.log(i);
    i--;
}while (false)


*/
/*


 /*         BOUCLE FOR
for (let i = 0; i<10; i++){
    console.log(i);
}

// peut faire ça car i = juste à l'interieur de ce for (bloc)

for (let i = 0; i<10; i++){
    console.log(i);
}
*/
/*
for (let i = 9; i>=0; i--) {
    console.log(i);
}
*/
/*
for (let i = 20;i > 0; i-=2){
    console.log(i);
}
*/


/*. table multiplication
for (let i = 1;i <= 10; i++){
    for (let j = i;j <= i*10 >; j+=i){
        console.log(j);
    }
}
  */


/*      saisir autant de fois jusque on a valeur qu'on veut
pourrait convertir vers for

let lettre = "";
while (lettre !== "X") {
    lettre = prompt("Tapez une lettre ou X pour sortir : ");
}
*/


/*.             voir PHOTO 08.10.24
for (let lettre= ""; lettre !== "X";){
    lettre = prompt("Tapez une lettre ou X pour sortir : ");
}


    let j = 0
for (; j<10;){
    j++;
}


tableau

const scoreJohn =
    score
    for (let i = 0)

    */
/*
for (let i = 0; i < 10; i++){

}

 */