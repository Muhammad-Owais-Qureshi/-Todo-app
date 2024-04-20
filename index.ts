#! /usr/bin/env node
import inquirer from "inquirer";
let myTodo : string [] = [];

let continueTodo : boolean = true;

let mainfun = async ()  => {
    while(continueTodo){
       

  let todoAnswer = await inquirer.prompt([
    {
        name:'todoOpption',
        type:'list',
        message:'Select opption',
        choices:['Add todo','Delete item','update item','view items','Exit']
    },
 ]);
 if(todoAnswer.todoOpption === 'Add todo' ){
    await addTodo()
 }
 else if (todoAnswer.todoOpption === 'Delete item'){
    await Delete()
  }
else if(todoAnswer.todoOpption ==="update item" ){
  await updateTask()
}
else if(todoAnswer.todoOpption === 'view items'){
   await viewTodo()
 }
 else if(todoAnswer.todoOpption === 'Exit'){
    continueTodo = false
 }
 }
}
let addTodo = async () => {
    let addtodo = await inquirer.prompt([
     {
         name:'Add',
         type:"input",
         message:'Enter your items'
     }
    ])
     myTodo.push(addtodo.Add)
    console.log(`\n${myTodo}: Succsefully add todo item `)
   }
   let viewTodo = async ()=>{
     console.log(`\n your Todo-list: \n`)
     myTodo.forEach((todo , index) =>{
       console.log(`${index + 1}:${todo}`)
     })
   }
   let Delete = async()=>{
    await viewTodo()
    let deleteTodo = await inquirer.prompt([
        {
            name:"index",
            type:'number',
            message:'Enter your "Index no:" to delete item '
        }
    ])
    let deleteTask = myTodo.splice(deleteTodo.index -1 ,1)
    console.log(`\n ${deleteTask}: Sucessfully delete `)
   }
 let updateTask = async ()=>{
  await  viewTodo()
  let updateTodo = await inquirer.prompt([
    {
        name:'task',
        type:'number',
        message:'Enter your item "Index no:" to update item'
    },
    {
        name:'newTask',
        type:'input',
        message:"Enter your new task"
    }
  ])
  myTodo[updateTodo.task -1] = updateTodo.newTask
  console.log(`\n Task :${updateTodo.task -1} \n updated task succesfully: ${updateTodo.newTask}`)
 }
 mainfun()



