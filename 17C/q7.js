async function fetchData(){
    const [todo, post] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((reponse)=>reponse.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(function (response){
           return response.json();
        })

    ])

    console.log({todo,post})
}

fetchData();

// output
// {
//     todo: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },        
//     post: {
//       userId: 1,
//       id: 1,
//       title: 'sunt aut facere repellat provident occaecati excepturi optio reprehender
//   it',
//       body: 'quia et suscipit\n' +
//         'suscipit recusandae consequuntur expedita et cum\n' +
//         'nostrum rerum est autem sunt rem eveniet architecto'
//     }
//   }
