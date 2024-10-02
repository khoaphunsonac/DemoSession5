interface Person {
    name: string;
    age: number;
    gender: string;
}

const person: Person = {
    name: "John",
    age: 25,
    gender: "male",
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

console.log(getProperty(person, "name")); // "John"
console.log(getProperty(person, "age")); // 25
console.log(getProperty(person, "gender")); // "male"
