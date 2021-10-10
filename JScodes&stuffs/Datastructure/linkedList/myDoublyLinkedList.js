// doubly linked liat
class DoublyLinkedList {
	constructor(value){
		this.head = {
			value: value,
			next: null,
			prev: null
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(value){
		const newNode = {
			value : value,
			next : null,
			prev: null
		}
    newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++ ;
		return this;
	}

	prepend(item){
		const newNode = {
			value: item,
			next: null,
			prev: null
		}
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++ ;
	}

	insert(value,index) {
		// check params 
		if (index >= this.length-1) {
			this.append(value);
		}
		else if (index === 0){
			this.prepend(value);
		}
		else {
			const newNode = {
				value : value,
				next : null,
				prev : null
			};
		 	const leader = this.traverseToIndex(index-1);
		 	const follower = leader.next;
		 	leader.next = newNode;
			newNode.prev = leader;
		 	newNode.next = follower;
			follower.prev = newNode;
		 	this.length++ ;
			return this;
		}
	}
	reverse(){
		if (!this.head) {return this}
		let currentNode = this.tail;
		this.head = this.tail;
		let ctr = this.length-1;
		while (ctr > 0) {
			currentNode.next = currentNode.prev;
			currentNode = currentNode.next;
			ctr-- ;
		}
		this.tail = currentNode;
		this.tail.prev = null;
		return this;
	}

	traverseToIndex(index){
		// check params
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++ ;
		}
		return currentNode;
	}

	printList() {
		const list= [];
		let currentNode = this.head;
		while (currentNode !== null) {
			list.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return list;
	}
}


const myLinkedList = new DoublyLinkedList(2);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
// myLinkedList.insert(7,5)
// myLinkedList.insert(0,0)
// myLinkedList.insert(3,2)
myLinkedList.reverse();
console.log(myLinkedList);
console.log(myLinkedList.printList());
