let age = 12;

if (age >= 12) {
    console.log("YES");
}
else {
    console.log("NO");
}

// array can have mixed datatype
const myarray = ['a', 'b', 'c', true, 12, { name: 'anuj' }, function hello() { console.log("hello World") }];

console.log(myarray);
console.log(myarray.length);

myarray[6]='kiwi';
console.log(myarray);

const num=[1,2,4,5,6,7,5,4,3];

// Give first index of the number, if element not present then it returns -1
console.log(num.indexOf(5));

// Tells that the number is present or not
console.log(num.includes(8));

// pushes new element to the array and return the new length
console.log(num.push('Aman'));

// unshift pushes element at the front at the front of the array
num.unshift('Arsh');

// pops the element from the back
num.pop();

// pops the element at the front of the array
num.shift()

// sort the array
num.sort()

// it is used to slice small part of array
const newarray=num.slice(2,4)
// Its like vector where second one is not included
// means (2,3)

num.forEach(element => {
    console.log(element);
});

for(element of num){
    console.log(element);
}

var details={
    Name:Aman,
    Age:70,
    Work:"Software Engineer"
}

for(key in details){
    console.log(`The ${key} is ${detals[key]}`);
}