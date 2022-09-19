fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.filter(profile => 
        profile.completed === false).map( profile => {
        return {
          UserID: `${profile.userId}`,
          Title: profile.title,
        };
      });
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });