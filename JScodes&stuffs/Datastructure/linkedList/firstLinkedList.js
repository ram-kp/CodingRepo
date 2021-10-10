// append | prepend | insert | remove | reverse | printAsAList

class LinkedList {
	constructor(value){
		this.head = {
			value: value,
			next: null,
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(item){
		const newNode = {
			value : item,
			next : null
		}
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++ ;
	}

	prepend(item){
		const newNode = {
			value: item,
			next: null
		}
		newNode.next = this.head;
		this.head = newNode;
		this.length++ ;
	}
	

	insert(value,index) {
		// check params 
		if (index >= this.length) {
			this.append(value);
			this.length++ ;
		}
		if (index == 0){
			this.prepend(value);
			this.length++ ;
		}
		const newNode = {
			value : value,
			next : null
		}
		const leader = this.traverseToIndex(index-1);
		const holdingPointer = leader.next;
		newNode.next = holdingPointer;
		leader.next = newNode;
		this.length++ ;
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
	remove(index){
		if (index == 0) {
			let temp = this.head;
			this.head = this.head.next;
			// delete temp;
		} else {
			let leader = this.traverseToIndex(index-1);
			if(index >= this.length-1){
				let unwanted = leader.next;
				leader.next = unwanted.next;
				this.tail = leader;
			}
			else{
				let unwanted = leader.next;
				leader.next = unwanted.next;
			}
		}
		this.length-- ;
	}
	reverse(){
		if (!this.head) {
			return this;
		}
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let prev = null;
		let next;
		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
	} 	                    nN
		// 1 <- 10 <- 54 -> 5
		                    p        
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


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(54,2);
console.log(myLinkedList.printList());
myLinkedList.remove(3);
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())
// console.log(myLinkedList)