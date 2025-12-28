<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const { user } = useAuthStore();
const router = useRouter()

function handleCTAClick () {
  if (user) {
    router.push("/dashboard")
  } else {
    router.push("/login")
  }
}
</script>

<template>
  <div class="container">
    <header>
      <div class="logo">
        <router-link class="logo" to="/">Knowledge Tracker</router-link>
      </div>
      <nav>
        <div v-if="user">
          <router-link class="dashboard-link" to="/dashboard">Dashboard</router-link>
        </div>
        <div v-else class="login-options">
          <router-link class="register-link" to="/register">Register</router-link>
          <router-link class="login-link" to="/login">Login</router-link>
        </div>
      </nav>
    </header>
    <main>
      <section class="text">
        <p>Track your progress in courses, articles, videos and notes.</p>
        <button @click="handleCTAClick">I want to track my progress</button>
      </section>
      <section class="image">
        <img src="../assets/landing-page-image.svg" alt="An illustration of a person tracking their progress with an application">
      </section>
    </main>
    <footer>
      <p>Arthur Lage &copy; 2025</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background: var(--off-white-bg);
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  box-shadow: 0 2px 4px 2px #3333332b;
}

.logo {
  font-size: 28px;
  font-family: "Rubik Gemstones";
  color: var(--dark-blue);
  text-decoration: none;
}

nav {
    display: flex;
    align-items: center;
    gap: 20px;
}

.dashboard-link {
    color: var(--off-white-bg);
    background: var(--dark-blue);
    font-family: var(--font-text);
    font-size: 16px;
    border-radius: 4px;
    text-decoration: none;
    border-radius: 4px;
    padding: 10px;
    background: var(--dark-blue);
}

.login-options {
  display: flex;
  align-items: center;
  gap: 20px;
}

.register-link  {
  display: flex;
    color: var(--off-white-bg);
    background: #FEB05D;
    font-family: var(--font-text);
    font-weight: 700;
    font-size: 20px;
    border-radius: 4px;
    text-decoration: none;
    border: 4px solid #FEB05D;
    border-radius: 4px;
    padding: 8px 20px;
    transition: .2s ease;
}

.register-link:hover {
  filter: brightness(1.2);
  transform: scale(1.05 );
}

.login-link  {
    color: var(--dark-blue);
    background: var(--off-white-bg);
    font-family: var(--font-text);
    font-size: 20px;
    border-radius: 4px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 4px;
    border: 4px solid #FEB05D;
    padding: 8px 20px;
transition: .2s ease;
  }

  .login-link:hover {
    color:  var(--off-white-bg);
    background: #feb05d;
  }
  
main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 160px;

}

main .text {
  display: flex;
  flex-direction: column;
  gap: 25px
}

main .text button {
  color: var(--off-white-bg);
    /* background: var(--dark-blue); */
    background: #FEB05D;
    font-family: var(--font-text);
    font-size: 20px;
    border-radius: 4px;
    text-decoration: none;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    border: 0;
    width: 300px;
    transition: .1s ease;
}

main .text button:hover {
  filter: brightness(1.25);
}

main p {
  font-size: 26px;
  width: 500px;
  color: #222;
  font-family: var(--font-text);
  font-weight: 500;
}

main img {
  width: 480px;
}

footer {
    text-align: center;
    font-family: var(--font-text);
    color: #333;
    font-weight: 500;
    min-height: 30px;
    font-size: 16px;
}
</style>
