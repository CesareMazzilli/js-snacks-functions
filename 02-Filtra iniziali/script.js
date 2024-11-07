/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByInitial(array, letter) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let curItem = array [i];
        if (letter === curItem [0]) {
            result.push(curItem);
        }
    }
    return result;
}


// Invoca la funzione qui e stampa il risultato in console
const filterByInitial = filterByInitial(names, "A");
console.log(filterByInitial);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]