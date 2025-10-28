<template>
  <v-container>
    <v-tabs v-model="tab" grow>
      <v-tab value="profile">Profile</v-tab>
      <v-tab value="statistics">Statistics</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="profile">
        <ProfileTab />
      </v-window-item>
      <v-window-item value="statistics">
        <StatisticsTab />
      </v-window-item>
    </v-window>
  </v-container>
</template>
  
<script setup>
import { ref } from 'vue';
import ProfileTab from './profileTabs/ProfileTab.vue';
import StatisticsTab from './profileTabs/Statistics.vue';
  
const tab = ref('profile')
</script>
  