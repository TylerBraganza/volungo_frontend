<script setup>

import { useProjectStore } from '../../stores/projects'
import { useRouter } from "vue-router";

const router = useRouter()
const projectStore = useProjectStore()
const project = projectStore.projects

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

</style>


<template>
    <v-container>
        <div class="text-center" style="margin-bottom: 20px;">
            <h1 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Environmental Conservation Projects</h1>
        </div>
        <v-row>
            <template v-for="item in project">
                <v-col md="6" v-if="item.category === 'Environmental Conservation'" >
                    <v-card
                    color="white"
                    elevation
                    class="d-flex flex-column justify-space-between"
                    style="height: 500px; overflow: hidden; width: 39vw; font-family: 'Courier New', Courier, monospace;">
                        <v-img
                        :src="item.image"
                        height="250"
                        cover
                        style="border: 2px solid blue;"></v-img>
                        <v-row>
                            <v-col md="9">
                                <v-card-subtitle style="margin-top: 50px;" class="pa-0 ma-0">Category:{{ item.category }}</v-card-subtitle>
                                <v-card-title class="auto-scale-title pa-0"><b>{{ item.name }}</b></v-card-title>
                            </v-col>
                            <v-col md="3">
                                <v-card-subtitle class="pa-4"><b>{{ item.date }}</b></v-card-subtitle>
                            </v-col>
                        </v-row>
                        <v-card-text style="height: 100px; overflow: hidden;" class="pa-0 ma-1">{{ item.description }}</v-card-text>
                        <v-card-subtitle>by: {{ item.organization }}</v-card-subtitle>
                        <v-card-subtitle>duration: {{ item.duration }}</v-card-subtitle>
                        <v-card-actions class="d-flex justify-space-between align-center ma-2 pa-2" style="font-family: 'Courier New', Courier, monospace;">
                            <v-btn @click="view(item)" style="background-color: orange;">View</v-btn>
                            <v-chip class="ma-2 pa-2">Volunteers:{{ item.capacity }}</v-chip>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </template>
        </v-row>
    </v-container>  
</template>
