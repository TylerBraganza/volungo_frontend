<template>
    <v-container>  
      <!-- Signup Question -->
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="text-center text-h3 font-weight-bold mb-6"
          style="font-family: 'Courier New', Courier, monospace; font-weight: 300;">
            Are you signing up as an NGO or a volunteer?
          </h2>
        </v-col>
  
        <!-- Volunteer Card -->
        <v-col cols="12" md="5">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="elevation-2 pa-6 rounded-lg"
              style="min-height: 220px;"
              tabindex="0"
              role="button"
              aria-label="Sign up as a volunteer"
              @click="goToVolunteer"
              @keyup.enter="goToVolunteer"
            >
              <v-card-title class="justify-center" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 190%;">
                <v-icon class="mr-2">mdi-account-heart</v-icon>
                Volunteer SignUp
              </v-card-title>
              <v-card-text style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 120%;">
                Join causes and make a difference.
              </v-card-text>
              <v-scale-transition>
                <div v-if="isHovering" class="text-center mt-2" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 90%;">Click to get started</div>
              </v-scale-transition>
            </v-card>
          </v-hover>
        </v-col>
  
        <!-- NGO Card -->
        <v-col cols="12" md="5">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="elevation-2 pa-6 rounded-lg"
              style="min-height: 220px;"
              tabindex="0"
              role="button"
              aria-label="Sign up as an NGO"
              @click="goToNGO"
              @keyup.enter="goToNGO"
            >
              <v-card-title class="justify-center" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: 190%;">
                <v-icon class="mr-2">mdi-domain</v-icon>
                NGO SignUp
              </v-card-title>
              <v-card-text style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 120%;">
                Register your organization to find volunteers.
              </v-card-text>
              <v-scale-transition>
                <div v-if="isHovering" class="text-center mt-2" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: 90%;">Click to get started</div>
              </v-scale-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
      <!-- Stats Block -->
      <v-row justify="center" class="mt-10">
        <v-col cols="12" md="8">
          <v-row justify="space-around">
            <v-col cols="12" sm="4" class="text-center">
              <v-icon size="36">mdi-account-group</v-icon>
              <div class="text-subtitle-1 font-weight-medium">12,000+ Volunteers</div>
              <div class="text-caption">Helping across 30+ regions</div>
            </v-col>
            <v-col cols="12" sm="4" class="text-center">
              <v-icon size="36">mdi-hand-heart</v-icon>
              <div class="text-subtitle-1 font-weight-medium">1,500+ NGOs</div>
              <div class="text-caption">Actively recruiting</div>
            </v-col>
            <v-col cols="12" sm="4" class="text-center">
              <v-icon size="36">mdi-earth</v-icon>
              <div class="text-subtitle-1 font-weight-medium">Global Impact</div>
              <div class="text-caption">Projects in 18 countries</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  
      <!-- Footer Hint -->
      <v-row justify="center" class="mt-10">
        <v-col cols="12" md="6">
          <p class="text-center text-caption">
            Already have an account? <a href="/login">Login</a>.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      goToVolunteer() {
        this.$router.push('/volSignUp');
      },
      goToNGO() {
        this.$router.push('/ngoSignUp');
      }
    }
  }
  </script>