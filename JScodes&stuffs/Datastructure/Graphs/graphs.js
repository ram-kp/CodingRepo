// making a graph
//  3 ways - 
// 1. edge list - 
// const graph = [[0,2],[2,3],[2,1],[1,3]]
// 2. Adjacent List
// const graph = [[2],[2,3],[0,1,3],[1,2]]
// 3. Adjecent Matrix
/*const graph = [
	[0, 0, 1, 0],
	[0, 0, 1, 1],
	[1, 1, 0, 1],
	[0, 1, 1, 0]
]*/
// pros - relationships
// cons - scaling is hard(bit complicated)
// BlockChain uses these graphs , hash-tables, tries.