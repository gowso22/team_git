const sendButton = document.querySelector(".send-btn");
const chatting = document.querySelector(".chatting");
console.log(sendButton);

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userName = document.getElementById("user-name").value;
  const message = document.getElementById("message").value;
  sendMessage(userName, message);
});

function sendMessage(username, msg) {
  const chat = document.createElement("li");
  chat.innerHTML = `<b>${username}:</b> ${msg}`;
  chatting.appendChild(chat);
}
