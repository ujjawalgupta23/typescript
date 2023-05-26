/**
 * If in an object, we mark any property with 'readonly',
 * after assigning a value to it, we cannot modify it
 */

type Info = {
    name: string,
    age: number,
    readonly gender: string
}

const person1: Info = {name: 'Ujjawal', age: 23, gender: 'M'}
console.log(person1);
person1.age = 24
// person1.gender = 'F' // This cannot be done
