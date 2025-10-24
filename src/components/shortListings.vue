<script setup>
import { useProjectStore } from '../stores/projects'
import { useRouter } from "vue-router";

const router = useRouter()
const projectStore = useProjectStore()
const project = projectStore.projects

function view(project) {
  projectStore.updateSelectedProjectItem(project)
  router.push('/projectItem')
}

// ✅ Define and expose normalizeDuration for template use
const normalizeDuration = (duration) => {
  if (!duration || typeof duration !== 'string') return 0

  const lower = duration.toLowerCase().trim()
  const value = parseFloat(lower) || 0

  if (lower.includes('hour')) return value / 24
  if (lower.includes('day')) return value
  if (lower.includes('week')) return value * 7
  if (lower.includes('month')) return value * 30

  return 0
}
</script>

<template>
    <v-container>
        <h1 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" class="text-center pa-4">Short Term Volunteering Opportunities</h1>
        <v-row>
            <template v-for="item in project" :key="item.id">
            <v-col
            v-if="item && item.duration && normalizeDuration(item.duration) < 14"
            md="6"
            >
                <v-card
                color="white"
                elevation
                class="d-flex flex-column justify-space-between"
                style="height: 500px; overflow: hidden; width: 39vw; font-family: 'Courier New', Courier, monospace;"
                >
                    <v-img
                    :src="item.image"
                    height="250"
                    cover
                    style="border: 2px solid blue;"
                    ></v-img>
                    <v-row>
                        <v-col md="9">
                            <v-card-title class="auto-scale-title pa-1"><b>{{ item.name }}</b></v-card-title>
                        </v-col>
                        <v-col md="3">
                            <v-card-subtitle class="pa-4"><b>{{ item.date }}</b></v-card-subtitle>
                        </v-col>
                    </v-row>  
                    <v-card-text style="height: 100px; overflow: hidden;" class="pa-2">{{ item.description }}</v-card-text>
                    <v-card-subtitle>by: {{ item.organization }}</v-card-subtitle>
                    <v-card-subtitle>duration: {{ item.duration }}</v-card-subtitle>
                    <v-card-actions class="d-flex justify-space-between align-center ma-2 pa-2" style="font-family: 'Courier New', Courier, monospace;">
                        <v-btn @click="view(item)" style="background-color: #2BB673;">View</v-btn>
                        <v-chip class="ma-2 pa-2">Volunteers: {{ item.capacity }}</v-chip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </template>
      </v-row>
    </v-container>
  </template>