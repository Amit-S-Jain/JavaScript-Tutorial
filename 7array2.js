let Items=['pen','pencil','mouse','keyboard','laptop','Writing Pad','Notebook','Mobile'];
console.log(Items);

/*This is an array in JavaScript
The syntax of array in JavaScript is as follows:
let array_name["Array Items"];
*/

//To add a new item in an array 

console.log("Adding a new Item into the array:");
//If we know the index of last element, we can directly add the new element after the last element by providing index value one greater than last index value.
Items[8]='Bike';
console.log(Items);
//If we don't know the index of last element:
Items.push("Wallete");
console.log(Items);

Items.push("Bag","Bottle","Shoes","Socks");
console.log(Items);


//Replacing an Item with another Item:

Items[5]="Mask";
console.log(Items);

//Number of Items in the Array:

console.log(Items.length);

/*Array Concatenation
For this we will need another array and Then we will concatenate these two arrays.*/

let ItemsRemainig=['Tiffine','Watch','Sanitizer'];
console.log(ItemsRemainig.concat(Items));

/*
Here the concat() function is used to cancatenation of two arrays. 
The first array Items will come first and then another array Items will be added.
also we can store there concatenation result to another third array as follows:
*/

let concated = [];
concated=Items.concat(ItemsRemainig);

console.log(concated);

/* pop() method in an array:
the pop() method wil return the last element of the array the then it will remove this last element from the array.
*/

console.log(concated.pop());
console.log(concated);


/*Reverse method.
The reverse method is used to change the position of the elements in array.
*/

console.log(Items.reverse());

/* Shift method:
Shift method returns the first element of an array an remove it from the array.
*/

console.log(concated.shift());
console.log(concated);

/*Unshift Method
The Unshift Method is used to add the new elements to the begining of an array.
*/

console.log(concated.unshift("Helmet"));

/*Slice method
Slice method is used to get the particular part of an array. It will return the new array with the sliced part.
Slice method needs two parameters. Starting point of sliciing and ending point of slicing.
the Slice method doesn't contain the last elemnt. It contains the starting element of the slicing paramenter.
*/

console.log(concated.slice(5,10));

//Sonting an array
console.log(Items.sort());

console.log("");
/*toString method
The toString method will convert the list Items into string.
*/

console.log(concated.toString());

/*The Join method will convert the array to String with the parameter provided to join method will come inside the array Items.
*/

console.log(concated.join(" "+"......"+" "));