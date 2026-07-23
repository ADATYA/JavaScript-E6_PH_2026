### What is JavaScript? (Class-01)
.Compiled
.Interpreted
.Just in time compile

### Math neede for programming in java script.. (Class-02)

1. Number[+,-,/,*,&]
2. Fraction: 0.5,25.78
3. Even, Odd: 15, 437
4. Reminder: after dividing a numver
5. Basic Math Operation: add, deduct,multipy,divide
6. Parcentage: %
7. Sum: 
8. Average: 12,23,45
9. Max/Min: 45,21,87
10. Series: 0-10
11. Calculation: Area of Triangle -1/2 * base * hight
12. Share Profit 3
13. Palmutation, Combination
14.

----
BODMAS এর অর্থ:

...B = Brackets ()
...O = Orders (Power)
...D = Division (/)
...M = Multiplication (*)
...A = Addition (+)
...S = Subtraction (-)
----
#### ex 01 : 5 × 2 = 10
Ans : 10 + 10 = 20 ✅

#### ex02:console.log(10 + 5 * 2);
----
*** 10 < 5
*** 
*** 10 >= 5
*** 
*** 10 <= 5
*** 
*** 10 == 10
*** 
*** 10 === 10
*** 
*** 10 != 5

----
Logical Operator:

&&

||

!
---
Increment and Decrement:
let x = 5;

x++;

console.log(x);
---
Even and Odd:
if(number % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}
---
Math Object (JavaScript Built-in):

Math.round()
Math.floor()
Math.ceil()
Math.random()
Math.max()
Math.min()
Math.sqrt()
Math.abs()
Math.pow()

---

### Openion of ChatGPT

Mentor's Learning Order (আমি হলে এভাবেই শেখাতাম)

JavaScript শুরু করার জন্য আমি এই ক্রমে এগোতে বলব:

Basic Math + BODMAS
Variables (let, const)
Data Types
Operators (Arithmetic, Comparison, Logical)
if, else, switch
Loops (for, while)
Functions
Arrays
Objects
DOM & Events
ES6 Features
Async JavaScript

💡
---
### Java Script Datatypes Comparison:

| Data Type | Category      | Example           |
| --------- | ------------- | ----------------- |
| String    | Primitive     | `"Hello"`         |
| Number    | Primitive     | `25`              |
| Boolean   | Primitive     | `true`            |
| Undefined | Primitive     | `let x;`          |
| Null      | Primitive     | `null`            |
| BigInt    | Primitive     | `123n`            |
| Symbol    | Primitive     | `Symbol()`        |
| Object    | Non-Primitive | `{ name: "Adi" }` |

1. Premetive Datatype : Primitive Data Type হলো এমন Data যা Single Value Store করে।
এগুলো Immutable (Value নিজে পরিবর্তিত হয় না; পরিবর্তন করতে চাইলে নতুন Value Assign করতে হয়)।
---
Primitive Data Type ৭টি.
.String
.Number
.Boolean
.Undefined
.Null
.BigInt
.Symbol

১টি Non-Primitive 
.Reference Category
---
//String..
let name = "Adi"; 
console.log(typeof name); // Check type and output

//Number
let age = 24;
let price = 250.50;
console.log(typeof age);

//Boolean
let isStudent = true;
let isLogin = false;

//Undefined
let user;
console.log(typeof user);  //output : undefined

//Null 
let phone = null;
console.log(typeof phone); // check the type of value. // Output : object

//BigInt
let big = 123456789012345678901234567890n;
console.log(typeof big);  /opt:bigint

//Symbol
let id = Symbol("id");
console.log(typeof id); //opt:symbol

2. Non-Primitive (Reference) Data Type
এখানে সবচেয়ে গুরুত্বপূর্ণ হলো Object।

const person = {
    name: "Adi",
    age: 24,
    country: "Bangladesh"
};
console.log(typeof person); // opt: object

a. Array: Array-ও আসলে JavaScript-এ একটি বিশেষ ধরনের Object।

const fruits = ["Apple", "Banana", "Mango"];
console.log(typeof fruits); //opt: object

b. Function: Function-ও Object-এর একটি বিশেষ রূপ।

function hello() {
    console.log("Hello");
}
console.log(typeof hello); // opt:function

### Complete JavaScript Keywords List:

await
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
let
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
async