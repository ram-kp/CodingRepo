// movePlayer(100, 'left')
//     .then(() => movePlayer(400, 'left'))
//     .then(() => movePlayer(10, 'right'))
//     .then(() => movePlayer(330, 'left'))

// async function playerStart() {
//     const forstMove = await movePlayer(100, 'left');
//     await movePlayer(400, 'left');
//     await movePlayer(10, 'right');
//     await movePlayer((330, 'left'));
// }

// Both of the above are nothing but syntactical sugar

//Using typical promise
fetch('data.json')
    .then(resp => resp.json())
    .then(resp2 => console.log)
    .catch('oops');

//Using Async await
async function fetchUsers() {   // looks like we are using synchronous codes
    try{
        const resp = await fetch('users.json'); // await is placed infront of every promise that is to return something incase of resolved or reject
        const data = await resp.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

const getData = async function(){
    try{
        const [users, posts, albums] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users);
        console.log('posts',posts);
        console.log('album', albums);
    }
    catch(err){
        console.log('oops', err);
    }
}
// Free api to practice
// SWAPI star wars api
// json place holder
