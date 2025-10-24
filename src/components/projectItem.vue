<script setup>

import { useProjectStore } from '../stores/projects'
import { ref, computed } from 'vue'
const projectStore = useProjectStore()
const projectItem = projectStore.selectedProjectItem

const showSuccessDialog = ref(false)

let isNGO = true

const hasApplied = computed(() => {
    const existingApplication = JSON.parse(localStorage.getItem("application")) || []
    return existingApplication.some(app => app.projectItem?.id === projectItem.id)
  })
  
  function apply() {
  const existingApplication = JSON.parse(localStorage.getItem("application")) || []

  const currentApplication = {
    projectItem: projectItem,
    user: JSON.parse(localStorage.getItem("signUpData"))
  }

  existingApplication.push(currentApplication)

  try {
    localStorage.setItem("application", JSON.stringify(existingApplication))
    showSuccessDialog.value = true // ✅ trigger the dialog
  } catch (err) {
    console.error('Application process failed', err)
  }
}


  

</script>

<style>
.v-card{
    border: 2px solid black;
}
</style>

<template>
    <v-dialog v-model="showSuccessDialog" width="400">
      <v-card>
        <v-card-title class="text-h6 d-flex align-center" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
          <v-icon color="green" class="me-2">mdi-check-circle</v-icon>
          Application Successful
        </v-card-title>
        <v-card-text style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
          You have successfully applied for this project.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="#2BB673" @click="showSuccessDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-container v-if="projectItem">
      <v-card-actions style="margin-bottom: 30px;">
        <v-btn to="/projects" style="background-color: #2BB673;"><v-icon icon="mdi-arrow-left"/> Back to Projects</v-btn>
      </v-card-actions>
      <v-row>
        <v-col md="6">
          <v-card class="pa-0" style="border: 2px solid #007CF0;" height="500">
            <v-img :src="projectItem.image" height="500" width="600px" cover></v-img>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card class="pa-6 rounded-lg" justify="center">
            <v-card-title style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 180%;">
              <b>{{ projectItem.name }}</b>
            </v-card-title>
            <v-card-text style="font-family: 'Courier New', Courier, monospace; font-size: 102%;">
              {{ projectItem.longDescription }}
            </v-card-text>
            <v-chip style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 101%; margin-left: 13px;">
              <b>Volunteers: {{ projectItem.capacity }}</b>
            </v-chip>
            <v-card-text style="font-family: 'Courier New', Courier, monospace; font-size: 102%;" class="d-flex flex-column">
              <b>Organization: {{ projectItem.organization }}</b>

              Category: {{ projectItem.category }}
            </v-card-text>
            <v-card-actions>
              <v-btn variant="elevated" disabled v-if="isNGO"></v-btn>
              <v-btn color="grey" variant="elevated" disabled v-else-if="hasApplied">Applied</v-btn>
              <v-btn color="#2BB673" variant="elevated" @click="apply" v-else>Apply</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  
    <v-container v-else>
      <v-alert type="info" color="#2BB673">
        No project selected or still loading.
      </v-alert>
    </v-container>
  </template>