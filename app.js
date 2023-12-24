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

const data = [];

const addData = () => {
  data.push({
    tilte: input.value,
    disc: input_disc.value,
  }),
    (input.value = "");
  input_disc.value = "";
  console.log(data);
  localStorage.setItem("data",JSON.stringify(data))
  postData();
};

const postData = () => {
  data.map((value) => {
    return (post.innerHTML += `<div>
       <p>${value.tilte}</p>
    <p>${value.disc}</p>
      <div>
        <button onclick="deletePost(this)">Delete</button>
        <button onclick="editPost(this)">Edit</button>
      </div>
    </div>`);
  });
};

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

const editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};


