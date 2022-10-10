function greetings(array, object) {
  let objectArray = Object.values(object);
  
  console.log(`Hello, ${array.join(" ")}! Nice to have a ${objectArray[0]} ${objectArray[1]} around.`)
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// logs Hello, John Q Doe! Nice to have a Master Plumber around.