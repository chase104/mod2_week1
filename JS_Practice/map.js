


const people = [
    {
        name: 'Alice',
        age: 25,
        savings: 1500,
        occupation: 'Software Developer',
        favoriteDinosaur: 'T-Rex',  // Here's our funny/interesting property
    },
    {
        name: 'Bob',
        age: 30,
        savings: 2500,
        occupation: 'Architect',
        favoriteDinosaur: 'Stegosaurus',
    },
    {
        name: 'Charlie',
        age: 28,
        savings: 1000,
        occupation: 'Barista',
        favoriteDinosaur: 'Triceratops',
    },
    {
        name: 'Dana',
        age: 35,
        savings: 6000,
        occupation: 'Pilot',
        favoriteDinosaur: 'Pterodactyl',
    }
];

// ['T-Rex', 'Stegosaurus', 'Triceratops', 'Pterodactyl']
let newArray = people.map((person) => {
    if (person.age > 29) {
        return `<p class="special">Your age is ${person.age}</p>`
    } else {
        return `<p>Your age is ${person.age}</p>`

    }
})

console.log(newArray);