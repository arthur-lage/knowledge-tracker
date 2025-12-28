<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const { user, logout } = useAuthStore();

if (!user) {
  router.push("/login");
}

const handleLogout = () => {
  logout()
  router.push("/login")
}
</script>

<template>
  <h1>Dashboard</h1>
  <h2>Hello, {{ user.name }}!</h2>
  <button @click="handleLogout">Logout</button>
</template>

<style scoped></style>
