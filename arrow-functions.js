const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow Function - Explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow Function - implicit return

const newGreetingImplicit = (name) => `Hi, ${name}`

// Lexical Binding 

const functionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

functionalCharacter.messageWithTraditionalFunction('With reat power comes great responsability.')
functionalCharacter.messageWithArrowFunction('Beware of Dr. Octopus')