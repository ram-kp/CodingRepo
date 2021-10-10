const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener('click', e => {    //we can have more than one event listeners
    console.log("grandparent 1");
})
parent.addEventListener('click', e => {    //we can have more than one event listeners
    console.log("parent 1");
})
child.addEventListener('click', e => {    //we can have more than one event listeners
    console.log("child 1");
})
document.addEventListener('click', e => {    //we can have more than one event listeners
    console.log("document 1");
})
