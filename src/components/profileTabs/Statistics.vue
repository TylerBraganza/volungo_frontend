<script setup>
import { ref } from 'vue'
import AchievementsDialog from './AchievementsDialog.vue'

const dialog = ref(false)
const hoursVolunteered = 128
const projectsCompleted = 14

function handleCardClick(label) {
  if (label === 'Badges Earned') {
    dialog.value = true
  }
}

const stats = [
  { label: 'Total Hours Volunteered', value: hoursVolunteered, icon: 'mdi-clock-outline' },
  { label: 'Events Participated', value: projectsCompleted, icon: 'mdi-calendar-check' },
  { label: 'Organizations Helped', value: 6, icon: 'mdi-handshake-outline' },
  { label: 'Badges Earned', value: 9, icon: 'mdi-star-circle-outline' },
  { label: 'Impact Score', value: '87%', icon: 'mdi-chart-line' },
  { label: 'Upcoming Events', value: 3, icon: 'mdi-calendar-month-outline' },
]
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="stat in stats"
        :key="stat.label"
      >
        <v-card
          class="pa-4"
          elevation="2"
          @click="handleCardClick(stat.label)"
          style="cursor: pointer"
        >
          <v-icon size="36" color="primary" class="mb-2">{{ stat.icon }}</v-icon>
          <div class="text-h6 font-weight-medium">{{ stat.label }}</div>
          <div class="text-h4 font-weight-bold">{{ stat.value }}</div>
        </v-card>
      </v-col>
    </v-row>

    <AchievementsDialog
      v-model="dialog"
      :hoursVolunteered="hoursVolunteered"
      :projectsCompleted="projectsCompleted"
    />
  </v-container>
</template>