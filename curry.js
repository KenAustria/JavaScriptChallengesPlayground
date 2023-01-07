// implement a curry() function, which accepts a function and return a curried one.

const curry = fn => {
	// curried collects arguments as an array
	return function curried(...args) {
		// if curried args passed equals the number of args that fn expects
		// then spread args elements to pass into fn
		if (args.length >= fn.length) return fn(...args)
		// otherwise, return curried to collect the next arguments passed
		return (...args2) => curried(...args, args2)
	}
}