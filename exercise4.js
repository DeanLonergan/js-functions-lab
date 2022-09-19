fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const numCompleted = json.reduce((total, profile) => {
        return total + profile.completed;
    }, 0)
   console.log(`completed todos =  ${numCompleted}`);
  })
  .catch(function(err) { 
    console.log(err);
  });