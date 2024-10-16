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
    - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
    - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
    - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*/

/* EXEMPLE 4 :
- Affichez les 10 premières valeurs de la table de multiplication choisie par l'utilisateur
  1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
    "Je voudrais afficher les 10 premières valeurs de la table de multiplication par"
  2. Affichez le résultat avec :
    - un titre : "Voici les 10 premières valeurs de la table de multiplication par …"
    - pour chaque valeur, le calcul et le résultat (par exemple : 1 * 7 = 7)
  3. Tentez d'afficher la valeur de i après être sorti de la boucle…
    - que se passe-t-il si vous avez déclaré i avec let ?
    - que se passe-t-il si vous déclarez i avec var ?
*/


let table= parseInt(prompt(" Je voudrais afficher les 10 premières valeurs de la table de multiplication par..."));
console.log(`Voici les 10 premières valeurs de la table de multiplication par ${table}`);

for (var i= 1; i <= 10; i++){
    resultat = i * table;
    console.log(`(${i} * ${table}) = ${resultat}`);
}
console.log(i);


//- que se passe-t-il si vous avez déclaré i avec let ?

// il ne reconnait pas i. i= undefinded

//- que se passe-t-il si vous déclarez i avec var ?

// i = 11. Il reconnait i





/* TEST ≠ bon

const table= parseInt(prompt(" Entrez une table de multiplication..."));
if (table){
    if (table>0){
        let i = 1;
        for (i<=10; i++){
           // console.log(i);

            console.log(`${i} * ${table} = ${i*table}`)
        }
        //console.log(i) peut nicht  car  let i = 1; = dans for
        // si on sort  let i = 1; de la boucle alors on peut mettre console log après
    } else{   // nombre <=0
        console.log("Entrez un nombre positif");
    }
} else{
    console.log("entrez un nombre");
}

*/
