// creating array operations using class
class myArray {
	constructor() {
		this.length =0;
		this.data = {};
	}
	get(index){
		return this.data[index];
	}
	push(item){
		this.data[this.length] = item;
		this.length++ ;
		return this.length;
	}
	pop(){
		const lastItem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length-- ;
		return lastItem;
	}
	delete(index){
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}
	shiftItems(index) {
		for(let i=index; i<this.length-1; i++) 
		{
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		this.length-- ;
	}
	insertItem(insertIndex,insertItem){
		this.shiftRightItems(insertIndex);
		this.data[insertIndex] = insertItem;
	}
	shiftRightItems(insertIndex){
		this.length++;
		for (let i = this.length-1 ; i > insertIndex; i--) {
		 this.data[i] = this.data[i-1];
		}
	}
}
const newArray = new myArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.insertItem(1,'my');
newArray.insertItem(2,'him');
console.log(newArray);
