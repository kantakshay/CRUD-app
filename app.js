const form = document.getElementById("form");
const input = document.getElementById("input");
const input_disc = document.getElementById("input-disc");
const msg = document.getElementById("msg");
const post = document.getElementById("post");
const doneTaskdiv = document.getElementById("doneTask");
const displayPost = document.querySelector(".display-task-post")
const displayDoneTask = document.querySelector(".display-task-done")


form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

const validation = () => {
  if (input.value === "" || input_disc.value === "") {
    msg.innerHTML = "fill the task";
  } else {
    msg.innerHTML = "";
    addData();
  }
};
const checkLocalStorageData = () => {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  let taskDone = JSON.parse(localStorage.getItem("doneData")) || [];
  displayPost.style.display = data.length > 0 ? "block" : "none";
  displayDoneTask.style.display = taskDone.length > 0 ? "block" : "none";
};
let data = [];

const addData = () => {
  data.push({
    tilte: input.value,
    disc: input_disc.value,
  }),
    localStorage.setItem("data", JSON.stringify(data));
  postData();
};

const postData = () => {
  post.innerHTML = "";
  data.map((value, id) => {
    return (post.innerHTML += ` <div id=${id} class="post-task">
   
    <div draggable="true">
  
       <p class="para">${value.tilte}</p>
  

    <p class="para"> ${value.disc}</p>
    </div>
      <div>
        <button class="btn" onclick="editPost(this)">Edit</button>
        <button  class="btn" onclick="doneTask(this)">Done</button>
        <button class="delete-btn" onclick="deletePost(this)">Delete</button>
      </div>
    </div>
    </div>`);
  });
  resetForm();
  checkLocalStorageData()
};

const resetForm = () => {
  input.value = "";
  input_disc.value = "";
};
const deletePost = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  checkLocalStorageData()
};
const editPost = (e) => {
  let selectTask = e.parentElement.previousElementSibling;
  input.value = selectTask.children[0].innerHTML;
  input_disc.value = selectTask.children[1].innerHTML;
  e.parentElement.parentElement.remove();
  deletePost(e);
};



let taskDone = [];

const doneTask = (e) => {
  let taskDoneData = data.filter((arr) => {
    return arr === data[e.parentElement.parentElement.id];
  });
  taskDone.push(taskDoneData[0]);
  localStorage.setItem("doneData", JSON.stringify(taskDone));
  deletePost(e);
  addDoneTask();
  checkLocalStorageData()
};

const addDoneTask = () => {
  doneTaskdiv.innerHTML = "";
  taskDone.map((val, id) => {
    return (doneTaskdiv.innerHTML += `<div id=${id} class="done-task">
      <p class="para">${val.tilte}</p>
      <p class="para">${val.disc}</p>
      <div>
      <button  class="delete-btn" onclick="deleteDoneTask(this)">Delete</button>
      </div>
      </div>`);
  });
};
const deleteDoneTask = (e) => {
  e.parentElement.parentElement.remove();
  taskDone.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("doneData", JSON.stringify(taskDone));
  checkLocalStorageData()
};



(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  taskDone = JSON.parse(localStorage.getItem("doneData")) || [];
  postData();
  addDoneTask();
  checkLocalStorageData()
})();
