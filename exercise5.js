fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const unncompleted = json.reduce((total, profile) => {
        profile.completed ? total : total.push({userId: profile.userId, title: profile.title})
        return total;
    }, [])
  console.log(unncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });