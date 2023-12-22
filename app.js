const form =  document.getElementById('form');
const input = document.getElementById('input');
const msg =  document.getElementById('msg')
const post = document.getElementById('post');

form.addEventListener('submit',(e)=>{
e.preventDefault()
console.log('btn clicked');
validation()
})

const validation = ()=>{
  if(input.value === ""){
    msg.innerHTML = "fill the task"
  
  }else{
    msg.innerHTML = ""
  }
  addData()
}

const data = {};

const addData=()=>{
  data["text"] = input.value;
  input.value = ""
  console.log(data);
  postData()
}

const postData = () =>{
  post.innerHTML += `<div><p>${data.text}</p> <button onclick="done(this)">done</button></div>`
}

const done = (e) =>{
  const postElement = e.parentElement; // Get the parent element (the post container)
  postElement.classList.add("completed");         // Add a class to visually indicate completion
  e.remove(); 
}