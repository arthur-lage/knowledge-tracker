<script setup>
import { getCurrentUser } from "@/services/AuthService";
import { useRouter } from "vue-router";

const router = useRouter();

const user = getCurrentUser();
if (!user) {
  router.push("/login");
}
</script>

<template>
  <h1>Dashboard</h1>
  <h2>Hello, {{ user.name }}!</h2>
</template>

<style scoped></style>
