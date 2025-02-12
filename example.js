let list = [
    {text: 'milk', cost: 4, need: true},
    {text: 'eggs', cost: 10, need: true}, 
    {text: 'bacon', cost: 15, need: true},
    {text: 'sausage', cost: 20, need: false}, 
    {text: 'bread', cost: 12, need: true},
    {text: 'butter', cost: 18, need: false}
]; 

//let numbers = [1, 3, 5, 9, 23, 55, 97];

/* const list = [
    'bacon',
    'milk',
    'bread',
    'eggs',
    'butter',
    'bacon'
] */

let elementList = list
                    .filter((item) => item.need && item.cost < 15)
                    .map(({text, cost}) => `<li>${text} $${cost}</li>`);


document.getElementById('list').innerHTML = elementList.join('');
 


