<script setup>

import { ref } from 'vue'

const application = ref([])

try {
  const stored = JSON.parse(localStorage.getItem("application"))
  application.value = Array.isArray(stored) ? stored : []
} catch (err) {
  console.error("Failed to parse application data:", err)
  application.value = []
}

</script>

<template>
    <v-container>
        <v-row v-if="application.length">
            <v-col v-for="item in application" :key="item" cols="12" md="12">
                <v-row>
                    <v-card class="d-flex" style="margin-bottom: 20px; border: 2px solid blue;" width="1500px" height="400px">
                        <v-col md="8">
                            <v-img :src="item.projectItem.image" height="400px" width="750px" class="pa-0 ma-0" style="border: 3px solid black;" cover></v-img>
                        </v-col>
                        <v-col md="4">
                            <v-card-title style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 290%;" class="pa-1">{{ item.projectItem.name }}</v-card-title>
                            <v-card-subtitle style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 130%; color: orange;" class="pa-2">by: {{ item.projectItem.organization }}</v-card-subtitle>
                            <v-card-subtitle style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 120%;" class="pa-2">project date: {{ item.projectItem.date }}</v-card-subtitle>
                            <div class="d-flex align-center" style="margin-top: 160px;">
                                <v-icon icon="mdi-check" color="green" class="me-0"/>
                                <v-card-subtitle style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 95%;">You have successfully applied for this project</v-card-subtitle>
                            </div>
                        </v-col>
                    </v-card>
                </v-row>
            </v-col>       
        </v-row>
        <v-row v-else>
            <v-col cols="12" class="text-center" style="margin-top: 50px;">
                <v-icon icon="mdi-emoticon-sad-outline" color="grey" size="40" class="mb-2" />
                <div style="font-size: 120%; font-family: Cambria, serif; margin-bottom: 10px;">
                    You haven’t volunteered yet.
                </div>
                <v-btn color="orange" to="/projects" class="ma-2">
                    Volunteer Now
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>