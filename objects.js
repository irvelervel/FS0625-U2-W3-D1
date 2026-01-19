// in JS, a differenza di tanti altri linguaggi (come Java, C#), è possibile creare oggetti
// "al volo" sfruttando la NOTAZIONE LETTERALE:

const dog1 = {
  name: 'Predonio',
  age: 6,
  owner: 'Stefano',
  breed: 'German shepard',
  skills: ['play', 'guard'],
  bark: function () {
    // metodo
    return 'BAU, io mi chiamo ' + this.name
  },
}

dog1.age // 6
dog1['name'] // 'Predonio'
dog1.bark() // 'BAU, io mi chiamo Predonio'

const dog2 = {
  name: 'Paperino',
  age: 3,
  owner: 'Giuseppe',
  breed: 'Pomeranian',
  skill: ['play'],
  bark: function () {
    // metodo
    return 'BAU, io mi chiamo ' + this.name
  },
}

const dog3 = {
  name: 'Giovanni',
  age: 3,
  breed: 'Bassotto',
  skills: ['play'],
  bark: function () {
    // metodo
    return 'BAU, io mi chiamo ' + this.name
  },
}

// questi 3 cani non sono identici per caratteristiche e proprietà
// perchè non sono stati generati "in serie" (come avverrebbe se avessi avuto una classe, una "fabbrica")

// ...però JS è un linguaggio "ibrido": vi permette di creare gli oggetti "al volo", con la
// notazione letterale ma vi permette anche di generarli in SERIE -> tramite le FUNZIONE COSTRUTTORE
// una "funzione costruttore" è una funzione che vi permette di generare "in serie" tanti oggetti
// dello stesso tipo, un po' come se fosse una "FABBRICA"

// andiamo a parlarne in constructor.js
