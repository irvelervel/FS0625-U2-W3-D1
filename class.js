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

// grazie a questa sintassi basata sul concetto di "classe" è possibile sfruttare l'ereditarietà
// in maniera "più semplice" che andando a manipolare a mano i prototipi

// devo creare la classe Developer
class Developer extends FullPerson {
  // la classe Developer sta "ereditando" tutte le caratteristiche di FullPerson
  // in più avrà delle caratteristiche "uniche" che lo rendono differente dal classico
  // essere umano

  // Developer è una SOTTO-CLASSE di FullPerson
  // FullPerson è la SUPER-CLASSE di Developer
  constructor(
    _firstName,
    _lastName,
    _age,
    _skills,
    _language,
    _region,
    _phone,
    _email,
    _role,
    _yoe,
    _programmingLanguages,
  ) {
    // questi sono tutti i parametri che rendono Gianni un essere umano e poi uno sviluppatore
    // ora dovrei associare tutti i parametri a determinate proprietà per le istanze
    // ...però molte di queste proprietà sono già state associate nella classe FullPerson
    // come faccio a "riciclare" il lavoro del constructor di FullPerson?
    // lo RE-INVOCO dalla classe Developer:
    super(
      _firstName,
      _lastName,
      _age,
      _skills,
      _language,
      _region,
      _phone,
      _email,
    )

    // ho invocato il costruttore della classe FullPerson e gli ho dato i primi 8 parametri
    this.role = _role
    this.yoe = _yoe
    this._programmingLanguages = _programmingLanguages
  }
}

const d1 = new Developer(
  'Gianni',
  'Property',
  28,
  ['singing'],
  ['italian', 'english'],
  'Abruzzo',
  '1232131',
  'gianniproperty@gmail.com',
  'Frontender',
  2,
  ['JS'],
)

console.log('GIANNI', d1)
