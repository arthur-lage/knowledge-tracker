<script setup>
import { getCurrentUser, logOut } from "@/services/AuthService";
import { useRouter } from "vue-router";

const router = useRouter();

const user = getCurrentUser();
if (!user) {
  router.push("/login");
}

const handleLogout = () => {
  logOut()
  router.push("/login")
}
</script>

<template>
  <h1>Dashboard</h1>
  <h2>Hello, {{ user.name }}!</h2>
  <button @click="handleLogout">Logout</button>
</template>

<style scoped></style>
