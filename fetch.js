console.log(111111111111);
console.log(2222222222);
setTimeout(() => console.log('aaaaaaaaa'), 5000 );
 fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => console.log(json))
console.log(333333333333);
console.log(44444444444);
for(let i = 0; i < 40000; i++){
    console.log(i);
}