/*Exercice 1:

function myLength(word){
    word = prompt('Saisir un mot :')
    let total = 0;
    for(i in word){
        total++; 
    } console.log(total)
    alert('La longueur du mot est de ' + total)
}*/

/*Exercice 1 Bis:
Écrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.
function justeprix(){
    let random = Math.round(Math.random() * 3);
    let user;
    do {
        user = parseInt(prompt('Saisissez un nombre entre 0 et 3 :'));
        if (user === random) {
            alert('Vous avez trouvé le nombre !');
        }
    } while (user != random)
}
justeprix()*/

/*Exercice 2 Bis:
Écrire un algorithme qui demande un nombre compris entre 10 et 20,jusqu’à ce que la réponse convienne.En cas de réponse 
supérieure à 20,on fera apparaître un message: «Plus petit!», et inversement,«Plus grand!» si le nombre est inférieur à 10.
function justeprix(min, max) {
    min = 10;
    max = 20;
    let random = (Math.round((max-min)*Math.random())+min);
    console.log(random);
    let user;
    do {
        user = parseInt(prompt("Saisissez un nombre entre 10 et 20 :"));
        if (user > random) {
            alert("Plus petit !");
        } else if (user < random) {
            alert("Plus grand !");
        } else if (user === random) {
            alert('Vous avez trouvé le nombre !');
        }
    } while (user != random)
}
justeprix()*/

/*Exercice 3:
Écrire un algorithme qui demande un nombre de départ,et qui ensuite affiche les dix nombres suivants. Par exemple, si 
l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.

function add(number){
    number = parseInt(prompt('Entrez un nombre'));
    let i = 0;
    while( i <= 10){
        console.log(number);
    }
}
add()*/

/*Exercice 4:
Réécrire l'algorithme précédent, en utilisant cette fois l'instruction Pour.
function add(number){
    number = parseInt(prompt('Entrez un nombre'));
    for(let i = 0; i <= 10; i++){
        console.log(number + i);
    }
}
add()*/

/*Exercice 5: 
Ecrire un algorithme qui demande un nombre de départ,et qui ensuite écrit la table de multiplication 
de ce nombre, présentée comme suit(cas où l'utilisateur entre le nombre 7):
Table de 7:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21...7 x 10 = 70 

function multiplier(number){
    number = parseInt(prompt('Entrez un nombre'));
    for(let i = 0; i <= 10; i++){
        console.log(number + ' x ' + i + ' = ', number * i);
    }
}
multiplier()*/

/*Exercice 6:   
Écrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre.
Par exemple, si l’on entre 5,le programme doit calculer: 1 + 2 + 3 + 4 + 5 = 15 NB: on souhaite afficher uniquement le 
résultat,pas la décomposition du calcul.

function additionner(number) {
    number = parseInt(prompt('Entrez un nombre'));
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
        console.log(sum);    
    } alert('Le résultat sera ' + sum + ' .')
}
additionner()*/

/*Exercice 7:
Écrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle .
NB:la factorielled e 8, notée8!,vaut 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8

function factorielle(number) {
    number = parseInt(prompt('Entrez un nombre'));
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;
        console.log(sum);    
    } alert('Le résultat sera ' + sum + ' .')
}
factorielle()*/

/*Exercice 8:
Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres:
Entrez le nombre numéro 1: 12 
Entrez le nombre numéro 2: 14
etc.
Entrez le nombre numéro 20: 6
Le plus grand de ces nombres est: 14
Modifiez ensuite l’algorithme pour que le programme affiche de surcroît en quelle position avait été saisie ce nombre: C’était le nombre numéro 2

function valeurmax(number) {
    let array = [];
    for (let i = 0; i < 20; i++) {
        number = parseInt(prompt('Saisissez 20 nombres :'));
        array.push(number);
        console.log(array)
    } 
    let valmax = Math.max(...array);
    console.log(valmax)
    let positionnement = array.indexOf(valmax)
    alert('Le nombre le plus grand était ' + valmax + '. et c\'était le ' + positionnement + ' nombre entré.')
}
valeurmax();*/

/*Exercice 9:
Réécrire l’algorithme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur souhaite saisir de nombres.
La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro.

function valeurmax2(number) {
    let array = [];
    do{
        number = parseInt(prompt('Saisissez des nombres :'));
        array.push(number);
        console.log(array)
    } while (number != 0)

    let valmax = Math.max(...array);
    console.log(valmax)
    let positionnement = array.indexOf(valmax)
    alert('Le nombre le plus grand était ' + valmax + '. et c\'était le ' + positionnement + ' nombre entré.')
}
valeurmax2();*/

/*Exercice 10: 
A la naissance de Marie, son grand-père Nestor, lui ouvre un compte bancaire. Ensuite, à chaque anniversaire, le grand-père de Marie verse sur
son compte 100e, auxquels il ajoute le double de l’âge de Marie. Par exemple, lorsqu’elle a deux ans, il lui verse 104e. Écrire un algorithme
qui permette de déterminer quelle somme aura Marie lors de son n-ième anniversaire.

//fonction qui détermine la valeur que Marie aura lors de son anniversaire:

function marie(age){
    age = parseInt(prompt('Quel est l\'âge de Marie?'));
    let result = 100 + (2 * age);
    console.log(result);
    alert('À ' + age + ' ans, Marie recevra ' + result + '€')
}
marie()


//fonction qui détermine la valeur du compte de Marie lors de son n-ième anniversaire.:
function marie(age){
    age = parseInt(prompt('Quel est l\'âge de Marie?'));
    let sum = 0;
    for( let i = 1; i <= age; i++){
        sum = sum + 100 + (2 * i);
    }
    console.log(sum);
    alert('À ' + age + ' ans, Marie recevra ' + sum + '€')
}
marie()*/

