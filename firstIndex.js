/*
Complexity: Time = O(1), Space = O(1)
given an unique & ascending array of integers with possible duplicates,
please search for its index with Binary Search.
*/

const firstIndex = (arr, target) => {
	// initialize variables
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		// used as a search key
		let mid = Math.floor(left + (right - left) / 2);

		if (arr[mid] >= target) {
			// target is in right side of mid
			right = mid - 1
		} else {
			// target is in left side of mid
			left = mid + 1
		}
	}

	// first el was target or not found
	return arr[left] === target ? left : -1;
}