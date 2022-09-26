fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((total, profile) => {
        if (profile.completed) {
            total[profile.userId] === undefined ? (total[profile.userId] = 1) : (total[profile.userId] += 1);
        }
        return total;
    }, [])
  console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });