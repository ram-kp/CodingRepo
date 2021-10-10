// we search for the element by traversing linearly in list
// 0(n) - time complexity
// 0(1) - space complexity

// builtIn ways
// var beasts = ['Centaur', 'Godzilla', 'Medusa', 'Dahaka', 'poseidon', 'Freeza'];

/*let ans = beasts.indexOf('Medusa');
console.log(ans);

ans = beasts.findIndex((item) => {
	return item === 'Godzilla';
});
console.log(ans);

ans = beasts.find(item => item === 'Dahaka');
console.log(ans);

ans = beasts.includes('Dahaka');
console.log(ans);*/

// Scratch ways

function linearSearch(searchItem){
	let index;
	const beasts = ['Centaur', 'Godzilla', 'Medusa', 'Dahaka', 'poseidon', 'Freeza'];
	while (index < beasts.length) {
		if (beasts[index] === searchItem) {
			return index;
		}
	}
}

const answer = linearSearch('Medusa');
// console.log(answer);



