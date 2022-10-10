function greet(a = 'Hello', b = "world") {
    console.log(`${a}, ${b}!`);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!