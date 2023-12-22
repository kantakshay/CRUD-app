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
  post.innerHTML += `<div>
  <p>${data.text}</p>
  <div>
    <button onclick="deletePost(this)">Delete</button>
    <button onclick="editPost(this)">Edit</button>
  </div>
</div>`
}

const deletePost = (e) =>{
  e.parentElement.parentElement.remove();
}

const editPost = (e) =>{
input.value = e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove();
}