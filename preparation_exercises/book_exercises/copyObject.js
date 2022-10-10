let spaceship = {
    color: 'jet black',
    engine: 'plutonium',
    weapon: 'anti-matter cannon',
    };

function copyObj(object, keys) {
    let newCopy = {};
    
    if (keys) {
        keys.forEach(function(key) {
            newCopy[key] = object[key];
        })
        return newCopy;
        } else {
            return Object.assign(newCopy, object)
            }
        }
        let newBlackShip = copyObj(spaceship, ['color']);
        console.log(newBlackShip);
        
        let secondBlackShip = copyObj(spaceship);
        console.log(secondBlackShip);