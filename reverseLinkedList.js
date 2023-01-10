/*
Complexity: Time = O(n), Space = O(1)
reverse a linked list
*/

const reverseLinkedList = list => {
	// initialize variables
	let node = list,
		prev = null

	while (node !== null) {
		//  array destructuring to efficiently store temporary variables
		[node.next, node, prev] = [prev, node.next, node]
	}
	return prev
}