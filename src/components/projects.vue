<script setup>

import { useProjectStore } from '../stores/projects'
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { computed } from 'vue';

const router = useRouter()
const projectStore = useProjectStore()
// const project = computed(() => projectStore.projects)

function parseDuration(durationStr) {
  const lower = durationStr.toLowerCase()

  if (lower.includes('hour')) return 0.04 // ~1 hour = 1/24 day
  if (lower.includes('day')) return parseFloat(lower) || 1
  if (lower.includes('week')) return (parseFloat(lower) || 1) * 7
  if (lower.includes('month')) return (parseFloat(lower) || 1) * 30

  return Infinity // fallback for unknown formats
}

const durationBuckets = [
"<1 day",
"<1 week",
"<1 month",
">1 month"
]


const categories = computed(() => {
  const all = projectStore.projects.map(p => p.category)
  return [...new Set(all)]
})

const filteredProjects = computed(() => {
  return projectStore.projects.filter(item => {
    const matchesName = item.name?.toLowerCase().includes(search.value.toLowerCase())
    const matchesCategory = selectedCategory.value
      ? item.category === selectedCategory.value
      : true

    const projectDays = parseDuration(item.duration)

    const matchesDuration = selectedDuration.value
      ? (
          selectedDuration.value === "<1 day" && projectDays < 1 ||
          selectedDuration.value === "<1 week" && projectDays < 7 ||
          selectedDuration.value === "<1 month" && projectDays < 30 ||
          selectedDuration.value === ">1 month" && projectDays >= 30
        )
      : true

    return matchesName && matchesCategory && matchesDuration
  })
})

const search = ref('')
const selectedCategory = ref(null);
const selectedDuration = ref(null);


function view(project){
    projectStore.updateSelectedProjectItem(project) //keep track of
    router.push('/projectItem')
}
</script>

<style scoped>
.auto-scale-title {
  font-size: clamp(16px, 30vw, 28px);
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom-rounded{
  border-radius: 999px;
}

</style>


<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
        v-model="search"
        label="Search by name"
        prepend-inner-icon="mdi-magnify"
        variant="solo"
        class="custom-rounded"
        style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"
        clearable/>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
        v-model="selectedCategory"
        :items="categories"
        label="Filter by category"
        style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"
        clearable/>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
        v-model="selectedDuration"
        :items="durationBuckets"
        label="Filter by duration"
        style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"
        clearable/>
      </v-col>
    </v-row>
      <v-row>
        <v-col md="6" v-for="item in filteredProjects" :key="item.id">
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
              style="border: 2px solid #007CF0;"
            ></v-img>

            <v-row>
              <v-col md="9">
                <v-card-subtitle style="margin-top: 50px;" class="pa-0 ma-0">Category:{{ item.category }}</v-card-subtitle>
                <v-card-title class="auto-scale-title pa-0">
                  <b>{{ item.name }}</b>
                </v-card-title>
              </v-col>
              <v-col md="3">
                <v-card-subtitle class="pa-4">
                  <b>{{ item.date }}</b>
                </v-card-subtitle>
              </v-col>
            </v-row>
  
            <v-card-text style="height: 100px; overflow: hidden;" class="pa-0 ma-1">
              {{ item.description }}
            </v-card-text>
            <v-card-subtitle>by: {{ item.organization }}</v-card-subtitle>
            <v-card-subtitle>duration: {{ item.duration }}</v-card-subtitle>
  
            <v-card-actions class="d-flex justify-space-between align-center ma-2 pa-2" style="font-family: 'Courier New', Courier, monospace;">
              <v-btn @click="view(item)" style="background-color: #2BB673;">View</v-btn>
              <v-chip class="ma-2 pa-2">
                Volunteers:{{ item.capacity }}
              </v-chip>
            </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
