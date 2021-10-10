//Stacks

//google
//udemy
//youtube

//Arrays
//Linked Lists
// => both arrays and linked list is somewhat equally well, but should know whats your priority. Array uses --> Cache Locality(sequential)
// LL --> too much dynamic memory and thats good.

// Queues

// Matt -- Joy -- Samir -- Pavel
//Arrays
//Linked List
// => simple answer -- USE LINKED LIST 
// arrays have indexes associated with them. To remove the first element we must look upon shifting the array ,0(n) operation
// 0(1) with Linked List

// How Javascript Works

//PROGRAM --> 1. allocate memory 2. parse and excute
// javascript engine(chrome-V8 engine) --> changes javascript code into machine excutable instruction for the browser.
// engine parts --> 1.memory heap--> memory is allocated   2.call stack--> where code is read and executed(where are u in program)

// memory heap
// const a = 2 , limited amount of memory(memory leaks-- unused memory-- too much global variables are bad & fills the memory heap)

// call stack
/*
console.log('1')
console.log('2')
console.log('')
*/
// js engine puts first console.log in the call stack and execute it --> then removes it from the stack 
// then it puts second cosole.log in the call stack and executes it --> again removes and puts 3rd console.log


//example 
const one = () => {
	const two () => {
		console.log('4');
	}
	two();
}

// console.log('4')  --- executes and remove
// two()			--- runs and remove
// one()			--- runs and remove
// Call stack

// JAVASCRIPT IS A SINGLE THREADED LANGUAGE THAT IS NON_BLOCKING

// Single Threaded => One call stack only (first in last out)
// others language may have multiple call stacks -- no need to wait around for stuffs
// running in single threaded env. is simple , no dealing of complicated scenerios like DEADLOCKS

// Stack overflow
//  function foo() {
// 	foo()
// }













