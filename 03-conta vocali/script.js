/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.




function returnVocal (word) {
    const arrayVocal = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        const currentItem = word [i];
        if (arrayVocal.includes(currentItem.toLowerCase())) {
            count++;
        }
    }
    return count;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(returnVocal(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)