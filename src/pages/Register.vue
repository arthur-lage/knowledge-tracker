<script setup>
import { getCurrentUser, handleRegister } from "@/services/AuthService";
import { ref } from "vue";
import { useRouter } from "vue-router";


const user = getCurrentUser()
const router = useRouter();

if (user) {
  router.push("/dashboard")
}

const name = ref("");
const email = ref("");
const password = ref("");

 function submitForm() {
  const res =  handleRegister(name.value, email.value, password.value);

  if (res) {
    localStorage.setItem("currentUser", JSON.stringify(res));
    router.push("/dashboard");
  } else {    
    alert("invalid credentials");
  }
  
}
</script>

<template>
  <div class="container">
    <div class="register-container">
      <h1>REGISTER</h1>

      <form @submit.prevent="submitForm">
        <div class="inputField">
          <label for="name">Name</label>
          <input id="name" type="text" v-model="name" placeholder="Your name" />
        </div>
        <div class="inputField">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" placeholder="email@mail.com" />
        </div>
        <div class="inputField">
          <label for="password">Password</label>
          <input id="password" type="password" min="8" v-model="password" placeholder="Password" />
        </div>
        <button type="submit">Register</button>
      </form>

      <router-link class="link" to="/login">I already have an account</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--light-blue);
}

.register-container {
  background-color: var(--off-white-bg);
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  border-radius: 6px;
  padding: 40px;
}

h1 {
  margin-bottom: 25px;
  font-family: var(--font-special);
  font-size: 48px;
  color: #333;
}

form {
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-family: var(--font-text);
}

.inputField {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  font-size: 16px;
  padding: 4px;
  transition: 0.2s ease;
  border: 1px solid #222;
  border-radius: 2px;
  font-family: var(--font-text);
}

input:focus {
  transform: translateY(-5px);
}

input:hover {
  transform: translateY(-5px);
}

button {
  font-family: var(--font-text);
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: center;
  color: #fffbf0;
  background: #3950a3;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s ease;
  border: none;
}

button:hover {
  filter: brightness(1.25);
  transform: scale(1.05);
}

.link {
  margin-top: 25px;
  color: #222;
}
</style>
