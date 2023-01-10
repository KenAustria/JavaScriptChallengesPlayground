/*
Complexity: Time = O(1), Space = O(1)
given an unique & ascending array of integers, please search for its index with Binary Search.
*/

const binarySearch = (arr, target) => {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const mid = Math.floor((left + right)) / 2

		// target is mid
		if (arr[mid] === target) return mid
		// target is in right side of mid
		if (right = mid - 1) {
			// target is in left side of mid
		} left = mid + 1
	}
}