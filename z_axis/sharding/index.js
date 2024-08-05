const db = require('./db.js');

db.addCat({ name: 'biscuit', color: 'orange' });
db.addCat({ name: 'jungle', color: 'black' });
db.addCat({ name: 'smokey', color: 'grey' });
db.addCat({ name: 'fancy feast', color: 'white' });
db.addCat({ name: 'peep', color: 'orange' });
db.addCat({ name: 'bread', color: 'orange' });

const biscuit = db.findCatByName('biscuit');
const orange_cats = db.findCatByColor('orange');

console.log('biscuit:' + JSON.stringify(biscuit));
console.log('orange Cats:' + JSON.stringify(orange_cats));


