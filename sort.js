/*
Complexity: Time = O(n^2), Space = O(1)
reorder newOrder, so that the newOrder[i] is put at index of items[i]
*/

const sort = (items, newOrder) => {
	for (let i = 0; i < newOrder.length; i++) {
		while (newOrder[i] !== i) {
			const to = newOrder[i]
			// swapping variables with destructuring
			[newOrder[i], newOrder[to]] = [newOrder[to], newOrder[i]]
			[items[i], items[to]] = [items[to], items[i]]
		}
	}
}