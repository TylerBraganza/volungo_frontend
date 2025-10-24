<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import AccessibilityDialog from './components/AccessibilityDialog.vue'
</script>

<template>
  <v-app>
    <NavBar/>
    <Sidebar />
    <v-main>
      <RouterView />
    </v-main>
    <AccessibilityDialog />
  </v-app>
</template>

<style scoped></style>