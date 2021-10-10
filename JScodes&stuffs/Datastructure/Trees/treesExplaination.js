// abstract syntax tree
// in trees nodes are created by linked list(a type of tree with one single path/linear)
// a node can only point a child unidirectional
// there are lots of trees data structure(specific trees for specific use)
// use visual go for greater insight

// binary search tree
//				101
//			  /     \
//          99		 105
//        /   \      /  \
//		70    101  104  110

// Each parent can have 0,1 or 2 children
// But each child only has one parent
// each node represent certain state
// big O - 0(log n) / lookup,insert and delete /
// hold relationship b/w parent and child unlike hashtables
// when we go right branch - value increases
// when we go left branch - value decreases
// balanced vs unbalanced - unbalanced one takes somewhat linear time and doesnt take 0(log n) which is pretty much inefficient
// avl tree and red black tree makes sure that the bst is balanced
// BST pros - better than 0(n); ordered; Flexible size;
// BST cons - No 0(1) operations
