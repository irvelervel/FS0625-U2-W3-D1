// "class" è un costrutto introdotto da ES6 circa 10 anni fa
// permette di utilizzare una sintassi ormai più consolidata per creare le funzioni costruttore

// rifacciamo la funzione costruttore FullPerson sotto forma di classe:

class FullPerson {
  constructor(
    _firstName,
    _lastName,
    _age,
    _skills,
    _language,
    _region,
    _phone,
    _email,
  ) {
    // nelle graffe del constructor inizializziamo tutte le proprietà i cui valori
    // dipendono dai parametri (perchè è solo qui che posso accedere ai parametri)
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.skills = _skills
    this.language = _language
    this.region = _region
    this.phone = _phone
    this.email = _email
  }

  // qui dentro potreste mettere delle proprietà della istanza i cui valori
  // -non- dipendono dai parametri
  // questi metodi e proprietà NON VANNO inizializzati con "this"
  showName = function () {
    return `Io mi chiamo ${this.firstName} ${this.lastName}`
    // "this", se utilizzato dentro un oggetto, è un riferimento all'oggetto stesso
  }

  numberOfLivers = 1
  numberOfBrains = 1
  numberOfLegs = 2
}

const nuovaPerson1 = new FullPerson(
  'Mario',
  'Rossi',
  30,
  [],
  ['italian', 'german'],
  'VA',
  '21312312',
  'mario@gmail.com',
)

console.log('MARIO', nuovaPerson1)
