// 1.	Create a variable name and assign it a string value representing your name.
 
MyName = "M. Hamza Arshad";



// 2.	Declare a variable age and assign it a number value representing your age.

Age = 22;



// 3.	Create a variable isStudent and assign it a boolean value indicating whether you are a student or not.


isStudent = true;
console.log(isStudent);// outuput is "true"



// 4.	Declare a variable myArray and assign it an array containing three different data types (e.g., string, number, boolean).

var myArray=["M. Hamza Arshad", 22, true];



// 5.	Check the type of null using the typeof operator.

check = null;
console.log(typeof(check));// outuput is "object"



// 6.	Create a variable myObject and assign it an object with properties representing your name, age, and student status.


var myObject = {name: "hamza", age: 22 , student: true } 
console.log(myObject);//output is { name: 'hamza', age: 22, student: true }


// 7.	Declare a variable x without assigning any value and log its value to the console. What do you see?

// sol : 1
x ;
console.log(x);// Showing error (Output is undefined)
                        // Sol : 2
                        x = undefined;
                        console.log(x);// outuput is "undefined"
//--------------------------



// 8.	Check the type of a variable that has not been declared using the typeof operator.     

x;
console.log(typeof(x));// Showing error (Output is undefined)



// 9.	Create two variables, num1 and num2, and assign them number values. Add them together and store the result in a variable sum.


num1 = 2;
num2 = 5;
sum = num1 + num2;
console.log(sum)// output is 7


// 10.	Declare a constant variable PI and assign it the value of 3.14. Can you reassign a value to this constant? Why or why not?


const varPI = 3.14;
console.log(varPI);// output is 3.14
varpI = 22;
console.log(varPI);//showing error bcz constant cannot be vary

// 11.	Declare a variable message and assign it a string value. Later, update the variable with a new string value.


message = "We are in Convo!";
console.log(message);// output is (We are in Convo!)
message = "Updated : We are in convo!";
console.log(message);// output is (Updated: We are in Convo!)



// 12.	Create a variable fullName by concatenating two separate variables containing your first and last names.


First_Name = "Hamza";
Last_Name = "Arshad"
FullName = First_Name + " "+ Last_Name;
console.log(FullName);//output is (Hamza Arshad)



// 13.	Create a variable isStudent and assign it a boolean value. Use the typeof operator to check the type of the variable.


isStudent = true;
console.log(typeof(isStudent));



// 14.	Create a variable result and assign it the value of the square root of a negative number using the Math.sqrt() function. Check if result is NaN.


result = Math.sqrt();
console.log(result);//output is NaN



// 15.	  Declare a variable myFunction and assign it a function value. Use the typeof operator to check the type of the variable.

    var myFunction = function xyz(){

    }
    console.log(typeof(myFunction));

    