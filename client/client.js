// import { io } from "socket.io-client";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const socket = io('http://localhost:3000')


const form = document.querySelector('form')
const button = document.querySelector('.submit-message')
const input = document.querySelector('#message-input')

const ul = document.querySelector('.messages-list')
const li = document.querySelector('li.message-list-item')

socket.on('connect', () => {
    console.log('user connected', socket.id)
})





form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = input.value
    if (message === "") return

    socket.emit('new-user', message)


    // socket.on('recieve-message', (message) => {
    console.log('first', message)
    const newListItem = document.createElement("li")
    newListItem.setAttribute('class', 'message-list-item')
    newListItem.textContent = message
    ul.appendChild(newListItem)
    input.value = ""
    // })
})