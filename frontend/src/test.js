const a = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const b = await a.json();
console.log(b);

export {};
