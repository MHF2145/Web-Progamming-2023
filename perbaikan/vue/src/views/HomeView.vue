<script setup>
import {ref} from 'vue'
const email = ref('');
const password = ref('');
const id1 = ref('');
const email1 = ref('');
const id2 = ref('');
const email2 = ref('');
const users = ref([]);
const chats = ref([]);
const chat = ref('');

async function login(){
  try {
  const req = await fetch('http://localhost:3000/api/users/login', {
    method: "POST", 
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    }),
  })

  const data = await req.json()
  console.log(data)
  if(data && data.user){
    id1.value = data.user.id
    email1.value = data.user.email
    getUsers();
  }
} catch (err) {
  console.log(err)
}
}

async function getUsers(){
  const req = await fetch('http://localhost:3000/api/users', {
    method: "GET", 
    credentials: "include",
  })
  const json = await req.json();
  console.log(json);
  users.value = json.docs
}

async function getChats(){
  const req = await fetch('http://localhost:3000/api/chats', {
    method: "GET", 
    credentials: "include",
  })
  const json = await req.json();
  console.log(json);
  chats.value = json.docs
}

async function sendChat(){
  try {
  const req = await fetch('http://localhost:3000/api/chats', {
    method: "POST", 
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: id1.value,
      to: id2.value,
      message: chat.value
    }),
  })
  getChats();
  const data = await req.json()
  console.log(data)
} catch (err) {
  console.log(err)
}
}

</script>

<template>
  Email: {{ email }} <br>
  Password: {{  password }} <br>
  Email1: {{ email1 }} <br> 
  id1: {{  id1 }} <br>
  Email2: {{ email2 }} <br> 
  id2: {{  id2 }} <br>

  <div v-if="id1 =='' ">
    <h1>Login</h1><br>
    <input v-model="email" placeholder="email" /><br>
    <input v-model="password" placeholder="password" /><br>
    <button @click="login">Login</button>
  </div>
  <div v-else>
    <h1>Chat</h1>
    <li v-for="user in users">
      <a @click="id2=user.id; email2=user.email; getChats()"> {{ user.email }}</a>
    </li>
    <h1>Chat List</h1>
    <h2>Chat With {{ email2 }}</h2>
    <div v-for="chat in chats">
      <div v-if="chat.from.id == id1 && chat.to.id == id2">
        <div>{{ chat.from.email }} -> {{ chat.to.email }} : {{ chat.message }}</div>
      </div>
      <div v-if="chat.from.id == id2 && chat.to.id == id1">
        <div>{{ chat.from.email }} -> {{ chat.to.email }} : {{ chat.message }}</div>
      </div>
    </div>

    <br>
    <input v-model="chat">
    <button @click="sendChat()">Send</button>
  </div>

</template>