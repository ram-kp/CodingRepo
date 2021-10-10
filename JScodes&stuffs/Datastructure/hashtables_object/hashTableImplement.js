// implementing a hash table

class HashTable {
	constructor(size){
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for(let i=0; i<key.length ; i++){
			hash = (hash + key.charCodeAt(i) * i) % this.data.length ;
		}
		return hash;
	}

	set(key,value){
		let address = this._hash(key);
		if(!this.data[address]){
			this.data[address] = [];
		}
		this.data[address].push([key,value]);
		return this.data;
	} // 0(1)

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		console.log(currentBucket);
		if(currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if(currentBucket[i][0] === key){
					return currentBucket[i][1];
				}
			}
		} // 0(1)
		return undefined;
	}

	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if(this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
}


const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes',100000));
console.log(myHashTable.set('apples',345));
console.log(myHashTable.set('mangoes',));
console.log(myHashTable)
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys());

