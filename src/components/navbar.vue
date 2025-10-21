<script setup>

    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))
    let isNGO = false
    let isAdmin = true


</script>

<template>
    <v-app-bar color="white">
        <router-link to="/" style="color: blue; text-decoration: none; margin-left: 20px; margin-right: 30px;"><v-app-bar-title style="font-size: 190%; font-family:'Courier New', Courier, monospace;">volungo</v-app-bar-title></router-link>
        <v-btn to="/projects">Projects</v-btn>
        <v-btn to="/pastVolunteer" v-if="isLoggedIn && !isNGO">Past Volunteers</v-btn>
        <v-btn to="/listings" v-if="isLoggedIn && isNGO">Your Listings</v-btn>
        <v-btn to="/aboutUs">About</v-btn>
        <v-btn v-if="!isLoggedIn" to="/contact">Contact</v-btn>
        <v-spacer/>
        <v-btn to="/volLogin" v-if="!isLoggedIn" style="background-color: orange; border-radius: 5px; margin-right: 10px;">Volunteer Login</v-btn>
        <v-btn to="/ngoLogin" v-if="!isLoggedIn" style="background-color: orange; border-radius: 5px;">NGO Login</v-btn>
        <v-btn v-if="isLoggedIn" style="border: 3px solid orange; margin-right: 10px;" to="/contact">Contact</v-btn>
        <v-btn v-if="isLoggedIn && !isNGO" style="background-color: orange;" to="/apply">Apply</v-btn>
        <v-btn v-if="isLoggedIn && isNGO" style="background-color: orange;" to="">List Project</v-btn>
        <v-btn icon v-if="isLoggedIn" to="/profile"><v-icon>mdi-account</v-icon></v-btn>
    </v-app-bar>
</template>

 