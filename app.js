const form = document.getElementById("form");
const input = document.getElementById("input");
const input_disc = document.getElementById("input-disc");
const msg = document.getElementById("msg");
const post = document.getElementById("post");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("btn clicked");
  validation();
});

const validation = () => {
  if (input.value === "" || input_disc.value === "") {
    msg.innerHTML = "fill the task";
  } else {
    msg.innerHTML = "";
  }
  addData();
};

let data = [];

const addData = () => {
  data.push({
    tilte: input.value,
    disc: input_disc.value,
  }),

  console.log(data,"add data");
  localStorage.setItem("data",JSON.stringify(data))
  postData();
};

const postData = () => {
  
  data.map((value,id) => {
    return (post.innerHTML += `<div id=${id}>
       <p>${value.tilte}</p>
    <p>${value.disc}</p>
      <div>
        <button onclick="deletePost(this)">Delete</button>
        <button onclick="editPost(this)">Edit</button>
      </div>
    </div>`);
  });
  resetForm();
};

const resetForm = () =>{
  input.value = "";
  input_disc.value = "";
}


const editPost = (e) => {
  let selectTask = e.parentElement.parentElement;
  input.value = selectTask.children[0].innerHTML;
  input_disc.value =selectTask.children[1].innerHTML;
  e.parentElement.parentElement.remove();
  deletePost(e);
};


const deletePost = (e) => {
  e.parentElement.parentElement.remove();
  data.splice( e.parentElement.parentElement.id,1)
  localStorage.setItem("data",JSON.stringify(data))
  console.log(data,"delete");
};

(()=>{
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data,"local store data");
  postData()
})()