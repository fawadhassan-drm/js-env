// const tinderUser = {}
// tinderUser.name = "Fawad"
// tinderUser.email = "fawad@google.com"
// tinderUser.job = "Web Developer"

// // console.log(tinderUser);

// const obj = {
//     email: "fawad@gmail.com",
//     fullname: {
//         username: {
//             firstName: "Fawad",
//             lastName: "Hassan"
//         }
//     }
// }

// // console.log(obj.email);
// // console.log(obj.fullname.username.firstName.includes('h'));


// const obj1 = {a: 1, b:2}
// const obj2 = {c: 3, d:4}

// // const obj3 = {obj1, obj2}
// // const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);


const obj = [
    {
        name: "Fawad",
        email: "fawad@google.com"
    },
    {
        name: "Hassan",
        email: "fawad@google.com"
    },
    {
        name: "Javeria",
        email: "fawad@google.com"
    }
]

// console.log(obj);
// console.log(obj[1].name);

// console.log(Object.keys(obj)[1]);

const object = {
    name: "Fawad",
    email: "fawad@google.com",
    age: 25
}

console.log(object);
console.log(Object.keys(object));
console.log(Object.values(object));