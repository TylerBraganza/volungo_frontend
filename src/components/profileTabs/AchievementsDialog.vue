<template>
    <v-dialog :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)" max-width="700">
      <v-card>
        <v-card-title class="text-h5 font-weight-bold" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Achievements</v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="achievement in achievements"
              :key="achievement.title"
            >
              <v-card height="150px" class="text-center justify-center" style="border-radius: 500px;">
                <v-icon size="36" :color="achievement.earned ? 'black' : 'grey-darken-1'">
                  {{ achievement.icon }}
                </v-icon>
                <div class="text-h6 font-weight-medium mt-2" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" :class="achievement.earned ? 'text-black' : 'text-grey-darken-3'">
                  {{ achievement.title }}
                </div>
                <div class="text-h4 font-weight-bold mt-1" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" :class="achievement.earned ? 'text-black' : 'text-grey-darken-1'">
                  {{ achievement.display }}
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="emit('update:modelValue', false)">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: Boolean,
    hoursVolunteered: Number,
    projectsCompleted: Number,
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const achievements = [
    {
      title: 'First 10 Hours',
      icon: 'mdi-timer-sand',
      earned: props.hoursVolunteered >= 10,
      display: '10h',
      statues: 0
    },
    {
      title: '50 Hours Milestone',
      icon: 'mdi-timer',
      earned: props.hoursVolunteered >= 50,
      display: '50h',
      status: 1
    },
    {
      title: '100 Hours Champion',
      icon: 'mdi-trophy',
      earned: props.hoursVolunteered >= 100,
      display: '100h',
      status: 1
    },
    {
      title: 'First Project',
      icon: 'mdi-briefcase-check',
      earned: props.projectsCompleted >= 1,
      display: '1+',
      status: 0
    },
    {
      title: '10 Projects Completed',
      icon: 'mdi-briefcase-check',
      earned: props.projectsCompleted >= 10,
      display: '10+',
      status: 1
    },
    {
      title: 'Community Hero',
      icon: 'mdi-account-heart',
      earned: props.hoursVolunteered >= 100 && props.projectsCompleted >= 10,
      display: '💙',
      status: 1
    },
  ]

  function achieved(status){
      if(!status === 1){
        
      }
    }
  </script>