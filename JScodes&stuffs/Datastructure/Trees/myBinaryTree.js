// Creating Binary Search Tree
class Node{
	constructor(value){
		this.left = null;
		this.right = null;
		this.value = value;
	}
}
class BinarySearchTree{
	constructor(){
		this.root = null;
	}
	insert(value){
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
		}
		else {
			let currentNode = this.root;
			while (true) {
				if(value < currentNode.value){
					// Left
					if(!currentNode.left){
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				}
				else {
					// right
					if(!currentNode.right){
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	lookUp(value){
		if (!this.root) {
			return false
		}
		let currentNode = this.root;
		while (currentNode) {
			if(value < currentNode.value){
				currentNode = currentNode.left;
			}
			else if(value > currentNode.value) {
				currentNode = currentNode.right;
			}
			else if(value === currentNode.value){
				return currentNode;
			}
		}
		return false;
	}
	remove(value){	
		if (!this.root) {
			return false
		}
		let parentNode;
		let currentNode = this.root;
		while (currentNode) {
			if(value < currentNode.value){
				parentNode = currentNode;
				currentNode = currentNode.left;
			}
			else if(value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			}
			else if(value === currentNode.value){
				// no right node after remove node
				if(!currentNode.right) {
					if(currentNode.value < parentNode.value){
						parentNode.left = currentNode.left;
					} else if (currentNode.value > parentNode.value) {
						parentNode.right = currentNode.left;
					}
				}
				// no left node after remove node
				else if (!currentNode.left) {
					if (currentNode.value < parentNode.value) {
						parentNode.left = currentNode.right;
					} else if (currentNode.value > parentNode.value) {
						parentNode.right = currentNode.right;
					}
				}
				// both left node and right node of remove node exist
				else if (currentNode.left && currentNode.right) {
					currentNode.right.left = currentNode.left;
					if (parentNode.value < currentNode.value) {
						parentNode.right = currentNode.right;
					} else {
						parentNode.left = currentNode.right;
					}
				} 
				// none of the either nodes of remove node exist
				else {
					if (parentNode.value < currentNode.value) {
						parentNode.right = null;
					} else {
						parentNode.left = null;
					}
				}
			}
		}
		return false;
	}
	breadthFirstSearch(searchItem){
		let currentNode = this.root;
		let list = [];
		let queue = [];
		queue.push(currentNode);

		while (queue.length > 0) {
			currentNode = queue.shift();
			console.log(currentNode.value);
			if(currentNode.value === searchItem){
				return 'item found!'
			}
			list.push(currentNode.value);
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
		return list;
	}
	breadthFirstSearchRec(queue, list){
		if (!queue.length) {
			return list;
		}
		let currentNode = queue.shift();
		list.push(currentNode.value);
		if (currentNode.left) {
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}
		return this.breadthFirstSearchRec(queue, list);
	}
	DFSInorder(){
		return traverseInOrder(this.root, [])
	}
	DFSPostorder(){
		return traversePostOrder(this.root, [])
	}
	DFSPreorder(){
		return traversePreOrder(this.root, [])
	}
}
// This DFSs are a kinda stacks which gets run when stacks fills up
function traverseInOrder(node, list){
	if (node.left) {
		traverseInOrder(node.left, list);
	}
	list.push(node);
	if (node.right) {
		traverseInOrder(node.right, list);
	}
	return list;
}
function traversePreOrder(node, list){
	list.push(node.value);
	if(node.left){
		traversePreOrder(node.left, list);
	}
	if(node.right){
		traversePreOrder(node.right, list);
	}
	return list;
}
function traversePostOrder(node, list){
	if(node.left){
		traversePostOrder(node.left, list);
	}
	if(node.right){
		traversePostOrder(node.right, list);
	}
	list.push(node.value);
	return list;
}

const tree = new BinarySearchTree();
//         9
//	   4       20
//   1   6   15  170
// DFS types 
// Inorder = [1, 4, 6, 9, 15, 20, 170] - It is in order
// Preorder = [9, 4, 1, 6, 20, 15, 170] - good for recreating tree
// Postorder = [1, 6, 4, 15, 170, 20, 9] - childen come before parent
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookUp(2));
// console.log(tree.breadthFirstSearch(15))
// const List = tree.breadthFirstSearchRec([tree.root], []);
// console.log(List)
console.log('post order ', tree.DFSPostorder());
console.log('pre order ', tree.DFSPreorder());
console.log('In order ', tree.DFSInorder());

// Breadth First search - Shortest path
// ex- products related to last purchase, who are closest connections

// Depth First Search - Check to see if exists
// ex- to search deeply for something, Kind of maze solvind
// ex- back tracking 
// ex- does the path exist?





