// Stack

let laptop = "Window"

let mac = laptop
mac = "IMac"

console.log(mac);
console.log(laptop);

// Heap

let user1 = {
    name: "Fawad",
    email: "fawad@google.com"
}

let user2 = user1

user2.email = "hassangoogle.com"

console.log(user1);
console.log(user2);

console.log(user1.email);
console.log(user2.email);