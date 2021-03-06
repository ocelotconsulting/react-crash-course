/* eslint-disable no-unused-vars */
const longRunning = () => new Promise(resolve => setTimeout(() => {
  resolve('promise results')
}), 500)

// Async/Await method
const asyncFunction = async () => {
  const results = await longRunning()
  // Do something with results
  return {
    results
  }
}

// Promise method
const promiseFunction = () => {
  longRunning()
    .then(results => {
      // Do something with results
      return {
        results
      }
    })
}
