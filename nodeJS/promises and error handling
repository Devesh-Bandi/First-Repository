// Creating a simple function that returns a promise
function simulateAsyncOperation(success) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      if (success) {
        resolve("Operation succeeded!");
      } else {
        reject(new Error("Operation failed!"));
      }
    }, 1000);
  });
}

// Using promises and chaining
simulateAsyncOperation(true)
  .then((result) => {
    console.log(result); // Output: Operation succeeded!
    return "Additional data";
  })
  .then((additionalData) => {
    console.log("Chained operation with:", additionalData);
    return simulateAsyncOperation(true);
  })
  .catch((error) => {
    console.error("Error:", error.message); // Output: Operation failed!
    return "Fallback data";
  })
  .finally(() => {
    console.log(
      "Finally block: This will be executed regardless of success or failure."
    );
  });

// Using async/await
async function asyncOperationWrapper() {
  try {
    const result = await simulateAsyncOperation(true);
    console.log(result); // Output: Operation succeeded!

    const additionalData = "Additional data";
    console.log("Async operation with:", additionalData);

    const chainedResult = await simulateAsyncOperation(true);
    console.log("Chained async operation result:", chainedResult);
  } catch (error) {
    console.error("Error:", error.message); // Output: Operation failed!
  } finally {
    console.log(
      "Finally block: This will be executed regardless of success or failure."
    );
  }
}

// Calling the async function
asyncOperationWrapper();
