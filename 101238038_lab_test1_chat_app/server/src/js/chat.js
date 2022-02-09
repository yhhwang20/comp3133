"use strict"
const socket = io();

const chatlist = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const chatMessages = document.querySelector(".display-container");

sendButton.addEventListener("click", e => {
    const param = {
        message: chatInput.value
    }
    socket.emit("chatting", param)
})

//Get message
socket.on("chatting", (data) => {
    const { message, time } = data;
    const item = new liModel(message, time);
    item.makeLi()
    //Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
})

class liModel {
    constructor(message, time) {
        this.message = message;
        this.time = time;
        this.makeLi = () => {
            const li = document.createElement("li");
            const dom = `<span class="message">${this.message}</span>
        <span class="time">${this.time}</span>`;
            li.innerHTML = dom;
            chatlist.appendChild(li);
        };
    }
}

