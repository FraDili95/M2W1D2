/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA: Javascript inanzitutto, a differenza di altri come il c, è un linguaggio debolmente tipizzato. Ciò comporta una certa libertà 
nella assegnazione del contenuto di una variabile senza doverne specificare a priori il tipo nella dichiarazione. Non solo, la stessa variabile può ospitare 
nel tempo tipi di dati differenti, per cui se dapprima memorizzava un numero, poi potrà ospitare una stringa, poi un immagine ecc. Questo significa flessibilità
ma anche meno sicurezza del codice scritto. I tipi di dato possibili in javascript sono 6: Number(comprende sia interi che decimali, oltre ad avere valori speciali
come 'Infinity = risultato della / 0', e 'NaN = not a number'), String(array di caratteri), undefined(variabile senza assegnazione), Null(variabile a cui è 
stato assegnato valore "vuoto"), Bigint(Interi che accettano una dimensione maggiore), Symbol(dato Boolean che può assumere solo True o folse). Inoltre infine
esistono delle strutture di dati in js che rappresentano come un'organizzazione degli stessi per svolgere funzioni specifiche. Esse sono :
1--> gli oggetti
2-->gli array
3-->le funzioni
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA: Gli oggetti sono un tipo di dati organizzati con una struttura utile nella conservazione e ricerca degli stessi: sono organizzati 
sotto forma di coppie chiave-valore che rappresentano le caratteriche di un dato oggetto. Mettiamo caso di dover creare un database contenente le razze dei cani.
Un oggetto tipo potrà essere organizzato come:
let dog{
breed: "German shepperd",
height_withers_cm : "60/65"
weight_kg: "30/40"
colour: "black and silver"
...
}
Un oggetto del genere mi permetterà di creare ad esempio un filtro di ricerca, una selezione degli stessi, ecc.
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let x = 12; let y = 20;
let somma = x + y;
console.log (somma);  */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
let x = 12; */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
let name = "Francesco"; */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA:
x -= 4;
 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA:
let name1 = "john";
let name2 = "John";
console.log ("name1 != da name2?", name1 == name2);
console.log ("Verifica dato bolean con name 2 minuscolo:", name1 == name2.toLowerCase());
console.log("Verifica che il valore di name2 non è cambiato:", name2);
*/
