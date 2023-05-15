/*Robots have an intelligence level, a model number, and they can solve problems. 
Humanoids have all the same characteristics and behaviors that a robot has, but they can also walk and talk.
walkable, talkable
*/
const humanTraits = {
  walk() {
    console.log(`I'm walking`);
  },
  talk() {
    console.log(`I'm talking`);
  }
};

function humanCreator(name, age) {
  let human = {
    name: name,
    age: age,
  };
  Object.assign(human, humanTraits);
  return human;
}

function robotCreator(intelligenceLevel, model, type) {
  let creature = {
    intelligenceLevel: intelligenceLevel,
    model: model,
    solveProblem: function() {
      console.log(`Solving`);
    }
  };
  if (type === 'Humanoid') {
    Object.assign(creature, humanTraits);
  }
  return creature;
}

let robot1 = robotCreator(100, 55, 'Robot');
let humanoid1 = robotCreator(50, 80, 'Humanoid');
let human1 = humanCreator('Noah', 32);
console.log(human1);
human1.walk();
