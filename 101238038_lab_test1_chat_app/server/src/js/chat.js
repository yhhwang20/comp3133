"use strict"
const socket = io();

const chatlist = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const chatMessages = document.querySelector(".display-container");

const { room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });


sendButton.addEventListener("click", e => {
    e.preventDefault();
    const param = {
        message: chatInput.value,
        room: room
    }
    socket.emit("chatting", param)
})

socket.emit('joinRoom', { room });
//Get message
socket.on("chatting", (data) => {
    const { message, time, room } = data;
    const item = new liModel(message, time, room);
    item.makeLi()
    //Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
})

class liModel {
    constructor(message, time, room) {
        this.message = message;
        this.time = time;
        this.room = room;
        this.makeLi = () => {
            const li = document.createElement("li");
            const dom = `<span class="message">${this.message}</span>
        <span class="time">${this.time}</span>`;
            li.innerHTML = dom;
            chatlist.appendChild(li);
        };
    }
}

