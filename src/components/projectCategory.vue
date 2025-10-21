<script setup>

import { useProjectCategoryStore } from '../stores/projectCategory'
import { useRouter } from "vue-router";

const router = useRouter()
const projectCategoryStore = useProjectCategoryStore()
const projectCategory = projectCategoryStore.projectCategory

</script>

<style>
.hover-card:hover .hover-text {
color: rgb(231, 122, 68); /* or any color you want */
transition: color 0.3s ease;
}

.card-link {
    text-decoration: none;
}
  
.hover-card {
    transition: box-shadow 0.3s ease;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
  
.card-link:hover .hover-card {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .flex-row-reverse {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }
  

</style>

<template>
    <v-container>
      <v-row
        v-for="(item, index) in projectCategory":key="item.id" class="mb-6">
        <v-col cols="12">
          <router-link :to="item.link" class="card-link">
            <v-card class="hover-card" style="border: 2px solid black;">
              <v-row :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'" align="center">
                <v-col cols="12" md="6">
                  <v-img :src="item.image" height="250px" cover></v-img>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card-title class="hover-text" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 150%; font-weight: 900;"><u>{{ item.name }}</u></v-card-title>
                  <v-card-text class="hover-text" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 120%;">{{ item.description }}</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </template>