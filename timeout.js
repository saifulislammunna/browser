function doSomething(){
    console.log('I am coding JavaScript');
}

console.log('First: ami sobar age');
console.log('second: I am the second person');
/* setTimeout(doSomething, 5000); */
setTimeout(function(){
    console.log('I am using VS Code');
},5000);
/* arrow function r maddho meo likhte paro */
setTimeout( () => {
    console.log('Exploring MDN articles');
}, 4000);
console.log('Third: ami 3 number baccha');
console.log('Fourth: ami ek hali purno korsi');