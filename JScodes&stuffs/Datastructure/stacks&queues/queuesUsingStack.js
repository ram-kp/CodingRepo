// implement queues using stack(array)

class queueUsingStack {
	constructor() {
		this.first = [];
		this.last = [];
	}
	peek(){
		if (this.last.length > 0) {
			return this.last[0];
		}
		return this.first[this.first.length-1];
	}

	enqueue(value){
		const length = this.first.length;
		for (var i = 0; i < length; i++) {
			this.last.push(this.first.pop())
		}
		this.last.push(value);
		return this;
	}

	dequeue(){
		const length = this.last.length;
		for (var i = 0; i < length; i++) {
			this.first.push(this.last.pop())
		}
		this.first.pop()
		return this;
	}
}
const myDataStructure = new queueUsingStack();
console.log(myDataStructure.peek());
myDataStructure.enqueue('sambhav')
myDataStructure.enqueue('anamika')
console.log(myDataStructure.enqueue('rohan'))
console.log(myDataStructure.dequeue());
console.log(myDataStructure.peek())

// console.log(myDataStructure)