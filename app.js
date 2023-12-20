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
  post.innerHTML += `<p>${data.text}</p>`
}