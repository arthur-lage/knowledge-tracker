<script setup>
import { handleLogin } from "@/services/AuthService";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

function submitForm() {
  const res = handleLogin(email.value, password.value);

  if (res) {
    router.push("/dashboard");
    localStorage.setItem("currentUser", JSON.stringify(res));
    return;
  }

  alert("invalid credentials");
}
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h1>LOGIN</h1>

      <form @submit.prevent="submitForm">
        <div class="inputField">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" placeholder="email@mail.com" />
        </div>
        <div class="inputField">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            min="8"
            v-model="password"
            placeholder="Password (8 characters minimum)"
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <router-link class="link" to="/register">I need to create an account</router-link>
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
  background: #8FABD4;
}

.login-container {
    background-color: #fffbf0;
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
  font-family: "Rubik Gemstones";
  font-size: 48px;
  color: #333;
}

form {
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-family: "Inter", sans-serif;
}

.inputField {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
    font-size: 16px;
    padding: 4px;
    transition: .2s ease;
    border: 1px solid #222;
    border-radius: 2px;
  font-family: "Inter", sans-serif;
}

input:focus {
    transform: translateY(-5px);

}

input:hover {
    transform: translateY(-5px);
}

button {
    font-family: "Inter", sans-serif;
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
    transition: .2s ease;
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
