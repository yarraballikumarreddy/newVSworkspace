
const express = require('express');
const app = express();
const courses =[{id:1,name:'course1'},{id:2,name:'course2'},{id:3,name:'course3'}];




app.get('/', (req ,res)=>{
    res.send('helloworld');
}); 
app.get('/api',(req,res)=>{
    res.send([1,2,3,3,4])
});
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`listening on {port} 3000`));
app.get('/api/course/:id',(req,res)=>
{
   const course = courses.find(c => c.id ===parseInt( req.params.id))
if(!course) res.status(404).send('erroe id not found')

res.send(course);

   //    res.send(req.query)
});
app.get('/api/course',(req,res)=>
{
    res.send(courses);
});
























































































































