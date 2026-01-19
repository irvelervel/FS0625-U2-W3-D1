// in JS oltre alla capacità letterale di creare oggetti esiste anche un metodo più
// strutturato, che crea una "fabbrica" per una determinata tipologia di oggetti e vi permetterà
// di creare "in serie" quanti ne volete con il minimo sforzo

// per creare queste fabbriche sfrutteremo le "FUNZIONI COSTRUTTORE (costruttrici?)" di JS

const person1 = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  age: 19,
  skills: ['cooking'],
  region: 'FVG',
  phone: '3292949192939213',
  email: 'ste@ste.com',
  showName: function () {
    return `Io mi chiamo ${this.firstName} ${this.lastName}`
    // "this", se utilizzato dentro un oggetto, è un riferimento all'oggetto stesso
  },
}

person1.lastName // 'Casasola'
// etc. etc.

// bene, funziona. Se tuttavia avessi la necessità di creare tanti altri oggetti con
// le stesse proprietà, invece che copincollare il codice dell'oggetto e modificarne i valori
// potrei pensare di costruirmi una FABBRICA di persons, tramite la funzione costruttore:

// le funzioni costruttore vengono salvate in variabili che per tradizione seguono la
// nomenclatura "Pascal Case"

// Person sarà una FABBRICA di oggetti di tipo "persona".
// Gli oggetto che fuoriescono da una fabbrica vengono definite ISTANZE

const Person = function () {
  // questa sarà una FABBRICA per oggetti di tipo "person"
  // ora procedo a riempire questo "timbro", "blueprint", "factory" etc. con tutte
  // le proprietà che intendo far comparire negli oggetti che genererò

  // descrivo tutte le proprietà dell'oggetto con dei valori momentaneamente "vuoti"
  // this in questo caso punta all'ISTANZA della funzione costruttore che verrà generato
  this.firstName = ''
  this.lastName = ''
  this.age = 0
  this.skills = []
  this.language = []
  this.region = ''
  this.phone = ''
  this.email = ''
  this.showName = function () {
    return `Io mi chiamo ${this.firstName} ${this.lastName}`
    // "this", se utilizzato dentro un oggetto, è un riferimento all'oggetto stesso
  }
}

// CREAZIONE FABBRICA COMPLETATA
// come la "accendo" ora?
// invocando la funzione costruttore
const p1 = new Person() // un po' come new Date()
const p2 = new Person()
console.log('PRIMO PERSON, P1', p1)
console.log('SECONDO PERSON, P2', p2)

// questo approccio (con la creazione di proprietà "vuote") obbliga poi a riempire a mano
// i valori
p1.firstName = 'Stefano'
p1.lastName = 'Casasola'
console.log(p1.showName())
p1.age = 19
p1.email = 'ste@ste.com'

p2.firstName = 'Gianni'
p2.lastName = 'Morandi'
p2.age = 81
p2.email = 'gianni@morandi.com'

const p3 = new Person()
delete p3.language
p3.pippo = 'ddd'

// questa funzione costruttore crea i nostri oggetti di tipo "person" in serie,
// però li crea come dei "gusci vuoti": con tutte le proprietà necessarie ma con dei
// valori inizialmente "neutri"; questo ci obbliga poi a dover assegnare manualmente
// i valori desiderati ad ogni istanza.
// c'è un modo un po' più "furbo" per creare una funzione costrutture che già assegni
// dei valori?

const FullPerson = function (
  _firstName,
  _lastName,
  _age,
  _skills,
  _language,
  _region,
  _phone,
  _email,
) {
  // altra funzione costruttore, che assegnerà direttamente i valori
  this.firstName = _firstName
  this.lastName = _lastName
  this.age = _age
  this.skills = _skills
  this.language = _language
  this.region = _region
  this.phone = _phone
  this.email = _email
  this.showName = function () {
    return `Io mi chiamo ${this.firstName} ${this.lastName}`
    // "this", se utilizzato dentro un oggetto, è un riferimento all'oggetto stesso
  }
}

const fp1 = new FullPerson(
  'Paolo',
  'Bonolis',
  64,
  ['host'],
  ['italian'],
  'Lazio',
  '12312321',
  'paolo@bonolis.com',
)

const fp2 = new FullPerson(
  'Topo',
  'Gigio',
  80,
  ['fa ridere'],
  ['italian'],
  'Lazio',
  21321,
  'topo@gigio.com',
)

console.log('FP1', fp1)
console.log('FP2', fp2)

// la funzione costruttore c'è sempre stata in JS dall'alba dei tempi
// negli ultimi 10 anni, da quando è arrivato ES6, è arrivato un NUOVO MODO di creare
// una funzione costruttore: utilizzando la parola "class"

// andiamo ad esplorarle in class.js
