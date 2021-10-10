//  Implementing queue
class node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}
class queue{
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek(){
		return this.first;
	}
	enqueue(value){
		const newNode = new node(value);
		if (this.length == 0) {
			this.first = newNode;
			this.last = this.first;
		} else {
			this.last.next = newNode;
			this.last = newNode;			
		}
		this.length++;
	}
	dequeue(){
		if (!this.first) {
			return null;
		}
		if (this.length == 1) {
			this.last = null;
		}
		const holdingPointer = this.first;
		this.first = this.first.next;
		this.length--;
	}
}

const myQueue = new queue();

myQueue.enqueue('Mr.A');
myQueue.enqueue('Mr.B');
console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
// console.log(myQueue.peek());
// myQueue.enqueue('Mr. B');
// myQueue.enqueue('Mr. C');

