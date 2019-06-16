console.log("hello");

//obejcts
//items that has properties
//Key : Value

const newUser = {
    userName: "Arya",
    age: 32,
    friends: [],
    hasAccess: false,
    pet: [{
            type: 'cat',
            age: 2
        },
        {
            type: "turtle",
            age: 100
        }
    ], //Array of objects

    sayHello: function() {
        console.log("hello");
    }

};

const petProperty = "pet"; //need this for the bracket notation

newUser.sayHello(); //accessing property of an object one method

console.log(newUser[petProperty]); //proper way to call this, bracket notation to access a property of an object

console.log(typeof newUser);

newUser.hasAccess = true;

// Make an object hyfclass19
//One of bool, string, func, array, number


const hyfClasses = [{
        name: "class19",
        doesExist: true,
        studentNumber: 15,
        studentNames: ["name1", "name2", "name3"],

        saySomething: function() {
            console.log("something");

        },
    },

    {
        name: "class22",
        doesExist: true,
        studentNumber: 15,
        studentNames: ["name1", "name2", "name3"],

        // saySomething: function() {
        //     console.log("something");          //old model
        // },

        saySomething: () => {
            console.log("something");
        }
    }
];

console.log(hyfClasses[0].saySomething())

// hyfClasses.forEach(() =>

//write a function

const addTwoNumbers = (a, b) => {
    return a + b;
};

const myNumber = addTwoNumbers(5, 2);
console.log(myNumber);

const myString = "astring";

console.log(myString.charAt(1));

//palindrome

const isPalindrome = (str) => {

    const lenght = str.lenght;
    let palindromeFlag = true;
    for (let i = 0; i < lenght; i++) {
        if (str.charAt(i) !== strcharAt(str.lenght - 1 - i)) {
            palindromeFlag = false;
        }
    }
    return palindromeFlag;
};

const result = isPalindrome("tacocat");

console.log(result);