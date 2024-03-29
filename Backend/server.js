import express from 'express';
import 'dotenv/config';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

// app.get('/' , (req , res)=>{
//    res.send('hello from simple server :)' + port)
// });

app.get('/api/todos', (req, res)=>{
   const todos = [
      {
         "userId": 1,
         "id": 1,
         "title": "delectus aut autem",
         "completed": false
       },
       {
         "userId": 1,
         "id": 2,
         "title": "quis ut nam facilis et officia qui",
         "completed": false
       },
       {
         "userId": 1,
         "id": 3,
         "title": "fugiat veniam minus",
         "completed": false
       },
       {
         "userId": 1,
         "id": 4,
         "title": "et porro tempora",
         "completed": true
       },
       {
         "userId": 1,
         "id": 5,
         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
         "completed": false
       },
       {
         "userId": 1,
         "id": 6,
         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
         "completed": false
       },
       {
         "userId": 1,
         "id": 7,
         "title": "illo expedita consequatur quia in",
         "completed": false
       },
       {
         "userId": 1,
         "id": 8,
         "title": "quo adipisci enim quam ut ab",
         "completed": true
       },
       {
         "userId": 1,
         "id": 9,
         "title": "molestiae perspiciatis ipsa",
         "completed": false
       },
       {
         "userId": 1,
         "id": 10,
         "title": "illo est ratione doloremque quia maiores aut",
         "completed": true
       },
   ]
   res.status(200).send(todos)
})


app.listen(port , ()=> console.log('Server is up and running on port : ', port));
