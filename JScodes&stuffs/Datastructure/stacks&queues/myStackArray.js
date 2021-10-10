// Stack DataStructure using array
let array = [];
class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek(){
    return this.top;
  }
  push(value){
      array.push(value);
      if(this.length === 0){
        this.top = value;
        this.bottom = value;
      }
      this.top = value;
      this.bottom = array[0] ;
      this.length++ ;
      return this;
  }
  pop(){
    if(!this.top){
      return null
    }
    array.pop();
    this.top = array[array.length-1] ;
    this.length-- ;
    return this;
  }
}

const myStack = new Stack();

console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
console.log(myStack.pop());

console.log(array)
