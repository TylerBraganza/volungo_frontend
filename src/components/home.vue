<script setup>
import { useProjectCategoryStore } from '@/stores/projectCategory'
import { computed } from 'vue'

const store = useProjectCategoryStore()

const projectCategoryList = computed(() =>
  Object.values(store.projectCategory)
)

const selectItem = (item) => {
  store.updateSelectedProjectCategoryItem(item)
}

</script>


<style>
.hover-card:hover .hover-text {
  color: blue; /* or any color you want */
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

.centered-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 48px;
  height: 48px;
  margin-left: 20px;
}

.footer-links a {
    font-size: 120%;
    font-family: 'Courier New', Courier, monospace;
    /* text-decoration: none; */
    color: black;
}
</style>

<template>
    <v-row id="home">
        <v-col cols="12" >
            <v-img src="/images/joel-muniz-A4Ax1ApccfA-unsplash.jpg" gradient="to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.7)">
                <v-row justify="center">
                    <v-card class="text-center pa-6" style="font-family:'Courier New', Courier, monospace; color: white; text-decoration: none; font-size: 300%; margin-top: 100px; background-color: rgba(255, 255, 255, 0.4); border: 2px solid black;">
                        <h1 style="font-size: 300%;">volungo</h1>
                        <h4>Making volunteering accessible to everyone.</h4>
                        <h4>Become a volunteer today.</h4>
                    </v-card>
                    <v-card class="text-center pa-6" style="font-family:'Courier New', Courier, monospace; color: black; text-decoration: none; font-size: 150%; margin-top: 20px; background-color: rgba(255, 255, 255, 1); border: 3px solid blue;">
                        <h1>Which type of volunteering are you looking for?</h1>
                        <v-row class="text-center pa-6 ">
                            <v-col cols="12" md="6">
                                <router-link to="/shortListings" style="text-decoration: none;" class="card-link">
                                    <v-card class="text-center pa-6 hover-card" style="font-family:'Courier New', Courier, monospace; color: black; text-decoration: none; font-size: 80%; background-color: rgba(255, 255, 255, 1); height: 200px; border: 3px solid orange;">
                                        <h1 class="hover-text">Short Term Volunteering</h1>
                                        <!-- <h4>Find exciting short-term volunteering—from a few hours in a day to light weekly roles. Flexible, impactful, and perfect for busy changemakers.</h4> -->
                                        <h2>1 day - 2 weeks</h2>
                                        <h3>short hours each day + local only</h3>
                                    </v-card>
                                </router-link>   
                            </v-col>
                            <v-col cols="12" md="6">
                                <router-link to="/longListings" style="text-decoration: none;" class="card-link">
                                    <v-card class="text-center pa-6 hover-card" style="font-family:'Courier New', Courier, monospace; color: black; text-decoration: none; font-size: 80%; background-color: rgba(255, 255, 255, 1); height: 200px; border: 3px solid orange;">
                                        <h1 class="hover-text">Long Term Volunteering</h1>
                                        <!-- <h4>Find exciting long-term volunteering—from weeks to months, even abroad. Deeply immersive, impactful, and perfect for changemakers seeking lasting contribution.</h4> -->
                                         <h2>> 2 weeks</h2>
                                         <h3>long hours + local or international</h3>
                                    </v-card> 
                                </router-link>   
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
            </v-img>
        </v-col>
    </v-row>
    <v-row style="background-color: #222;">
        <v-container class="text-center">
            <h2 style="color: white; font-family: 'Courier New', Courier, monospace; font-size: 300%;">Where would you like to volunteer?</h2>
            <v-slide-group
            show-arrows
            class="pa-4"
            height="300px">
            <template #prev>
                <v-icon color="white">mdi-chevron-left</v-icon>
            </template>
            <template #next>
                <v-icon color="white">mdi-chevron-right</v-icon>
            </template>

              <v-slide-group-item
              v-for="(item, index) in projectCategoryList"
              :key="index"
              :value="index"> 
                <router-link :to="item.link">
                    <v-card
                    class="mx-2 hover-card"
                    width="329"
                    @click="selectItem(item)"
                    elevation="2"
                    style="border: 2px solid blue;">
                
                        <v-img
                        :src="item.image"
                        height="300"
                        cover
                        gradient="to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)"
                        class="d-flex flex-column justify-end">
                            <div
                                style="
                                position: absolute;
                                bottom: 0; /* or use top: 50%; transform: translateY(-50%) for center */
                                left: 0;
                                width: 100%;
                                padding: 16px;
                                box-sizing: border-box;">
                                <v-card class="text-center ma-4" elevation="4" color="rgba(0,0,0,0.7)">
                                    <v-card-title class="text-wrap text-center" style="color: white; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 170%;">
                                        {{ item.name }}
                                    </v-card-title>
                                </v-card>
                        </div>
                        </v-img>
                    </v-card>
                </router-link>
              </v-slide-group-item>
            </v-slide-group>
            <v-card-actions class="column-flex justify-center">
              <v-btn to="/projectCategory" style="background-color: white; color: black; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 130%;">Explore All Projects</v-btn>
            </v-card-actions>
          </v-container>
    </v-row>
    <v-footer style="height: 200px;" padless>       
        <v-row align="center" justify="space-between">
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                <div class="mb-2">
                    <span style="font-size: 400%; font-family: 'Courier New', Courier, monospace; color: blue;">volungo</span>
                </div>
                <div class="d-flex justify-center">
                    <v-btn icon href="" target="_blank" class="centered-icon-btn"><v-icon style="color: black;">mdi-facebook</v-icon></v-btn>
                    <v-btn icon href="" target="_blank" class="centered-icon-btn"><v-icon style="color: black;">mdi-twitter</v-icon></v-btn>
                    <v-btn icon href="" target="_blank" class="centered-icon-btn"><v-icon style="color: black;">mdi-instagram</v-icon></v-btn>
                    <v-btn icon href="" target="_blank" class="centered-icon-btn"><v-icon style="color: black;">mdi-youtube</v-icon></v-btn>
                    <v-btn icon href="https://www.linkedin.com/" target="_blank" class="centered-icon-btn"><v-icon style="color: black;">mdi-linkedin</v-icon></v-btn>
                </div>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                <v-card-title style="font-size: 180%; font-family: 'Courier New', Courier, monospace;"><b><u>QUICK LINKS</u></b></v-card-title>
                <div class="footer-links d-flex flex-column align-center" style="font-size: 80%;">
                    <a href="#home">Home</a>
                    <router-link to="/projectCategory">Browse Projects</router-link>
                    <router-link to="#">How It Works</router-link>
                    <router-link to="/volSignUp">Become A Volunteer</router-link>
                </div>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                <v-card-title style="font-size: 180%; font-family: 'Courier New', Courier, monospace;"><b><u>RESOURCES</u></b></v-card-title>
                <div class="footer-links d-flex flex-column align-center" style="font-size: 80%;">
                    <router-link to="/aboutUs">About Us</router-link>
                    <router-link to="/contact">Contact</router-link>
                    <router-link to="/faq">Volunteer FAQ</router-link>
                    <router-link to="#">Privacy Policy</router-link>
                </div>
            </v-col>
        </v-row>
    </v-footer>
</template>