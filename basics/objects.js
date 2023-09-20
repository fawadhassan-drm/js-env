const user = {
    name: "Hassan",
    age: 25,
    email: "fawad@google.com",
    isLoggedIn: true,
    loggedInDays: ['Mon', 'Tue', 'Fri']
}

// console.log(user);
// console.log(user.name);
// console.log(user["age"]);

// user.email = "fawad@microsoft.com"
// console.log(user);

// Object.freeze(user)

// user.email = "email@change.com"
// console.log(user);

user.greeting = function () {
    console.log("Welcome User");
}

user.greetingTwo = function(){
    console.log(`Welcome ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());

console.log(user);