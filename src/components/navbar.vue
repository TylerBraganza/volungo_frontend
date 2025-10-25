<script setup>

    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))
    let isNGO = true
    let isAdmin = true


</script>

<template>
    <v-app-bar app color="white" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
        <router-link to="/" style="color: #007CF0; text-decoration: none; margin-left: 20px; margin-right: 30px;"><v-app-bar-title style="font-size: 190%; font-family:'Courier New', Courier, monospace;">volungo</v-app-bar-title></router-link>
        <v-btn style="margin-right: 10px;" to="/contact" v-if="!isLoggedIn">Contact Us</v-btn>
        <v-spacer/>
        <v-btn style="background-color: #007CF0; margin-right: 15px;" v-if="!isLoggedIn" to="/login">Login</v-btn>
        <v-btn style="background-color: #007CF0; margin-right: 15px;" v-if="!isLoggedIn" to="/signUp">SignUp</v-btn>
        <v-btn style="margin-right: 10px;" to="/contact" v-if="isLoggedIn">Contact Us</v-btn>
        <v-btn style="border: 2px solid #007CF0; margin-right: 10px;" v-if="isLoggedIn">Logout</v-btn>
    </v-app-bar>
</template>

 