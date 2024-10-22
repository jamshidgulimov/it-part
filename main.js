let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let ul = document.getElementById('ul')
let err = document.getElementById('err')
let form = document.getElementById('form')
let edit = document.getElementById('edit')
let inp2 = document.getElementById('inp2')
let btn2 = document.getElementById('btn2')
let pen = document.getElementById('pen')


btn.addEventListener('click', (e)=>{
  e.preventDefault()
  let val = inp.value
 localStorage.setItem('list', JSON.stringify([{name: val, age: 15}]))
  console.log(val);

})

let data = JSON.parse(localStorage.getItem('list')) 

console.log(typeof data);





let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [{name: 'Ali', time: '12:13:15'}]

if(todos) showTodo()


  let editId


  pen.addEventListener('click', ()=>{
    edit.classList.remove('hidden')
  })

  function editTodo(id){
   editId = id
   console.log(editId);
   
  }

  function delTodo(id){

    const filTodo = todos.filter((item, i)=>{
     return i !== id
    })
     todos = filTodo
     showTodo()
  }


function showTodo(){

  localStorage.setItem('list', JSON.stringify(todos))

  ul.innerHTML = ''

  todos.forEach((item, i)=>{
    console.log(i);
    
    ul.innerHTML += `<li>
    <span>${item.name}</span> 
      <div class="icn"> 
          <span>15:16:17</span>
          <span onclick=(editTodo(${i}))><i class="fa-solid fa-pen"></i></span>
          <span onclick=(delTodo(${i}))<i class="fa-solid fa-trash"></i></span>
      </div>     
      </li>`

  })
}


btn.addEventListener('click', (e)=>{
  e.preventDefault()
  const val = inp.value.trim()
   
  form.reset()
  if(val.length){

    todos.push({name: val, time: '15:15:15'})

    console.log(todos);

     showTodo()
    
    }else{
    err.textContent = 'Error...'

    setTimeout(()=>{
      err.textContent = ''

    }, 2500)
  }
})




 






















