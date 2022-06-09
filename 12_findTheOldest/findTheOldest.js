const findTheOldest = function(people) {
    const d = new Date();

    // initial value
    let oldest = people[0]
    let oldestAge 
    if ('yearOfDeath' in oldest) {
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth   
    } else {
        oldestAge = d.getFullYear() - oldest.yearOfBirth   
    }
    
    // check the OLDEST
    for (let person in people) {
        let personAge
        if ('yearOfDeath' in people[person]) {
            personAge = people[person]["yearOfDeath"] - people[person]["yearOfBirth"]
        } else {
            personAge = d.getFullYear() - people[person]["yearOfBirth"]
        }
        
        if(personAge > oldestAge) {
            oldest = people[person]
            oldestAge = personAge
        }
    }

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
