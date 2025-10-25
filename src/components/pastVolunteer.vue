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

// Dialog state
const selectedProject = ref(null)
const dialog = ref(false)

function openDetails(project) {
  selectedProject.value = project
  dialog.value = true
}
</script>

<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold text-center mb-8">Your Volunteer Projects</h2>

    <v-row v-if="application.length" dense>
      <v-col
        v-for="item in application"
        :key="item.projectItem.name"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="elevation-2 rounded-lg" @click="openDetails(item.projectItem)" style="cursor: pointer;">
          <v-img
            :src="item.projectItem.image"
            height="160"
            cover
            class="rounded-t-lg"
          ></v-img>

          <v-card-text class="pa-4">
            <div class="text-subtitle-1 font-weight-medium mb-1">
              {{ item.projectItem.name }}
            </div>
            <div class="text-caption text-grey-darken-1 mb-1">
              by {{ item.projectItem.organization }}
            </div>
            <div class="text-caption mb-2">
              Date: {{ item.projectItem.date }}
            </div>
            <v-chip color="green" text-color="white" size="small">
              ✅ Applied
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Empty State -->
    <v-row v-else justify="center">
      <v-col cols="12" md="6" class="text-center mt-10">
        <v-icon icon="mdi-emoticon-sad-outline" color="grey" size="40" class="mb-2" />
        <div class="text-subtitle-1 font-weight-medium mb-2">
          You haven’t volunteered yet.
        </div>
        <v-btn color="#2BB673" to="/projects" class="ma-2">
          Volunteer Now
        </v-btn>
      </v-col>
    </v-row>

    <!-- Details Dialog -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-img
          :src="selectedProject?.image"
          height="200"
          cover
        ></v-img>
        <v-card-title class="text-h6 font-weight-bold">
          {{ selectedProject?.name }}
        </v-card-title>
        <v-card-subtitle class="text-subtitle-2">
          by {{ selectedProject?.organization }}
        </v-card-subtitle>
        <v-card-text>
          <div class="text-caption mb-2">Date: {{ selectedProject?.date }}</div>
          <div class="text-body-2">
            {{ selectedProject?.description || 'No description available.' }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>