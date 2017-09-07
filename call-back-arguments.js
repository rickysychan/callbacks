// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (name, index){
    if (name === "Waldo") {
      found(name, index);   // execute callback
    }
  })
}

function actionWhenFound(name, index) {
  console.log("Found Waldo at index "+ index + "!");
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);