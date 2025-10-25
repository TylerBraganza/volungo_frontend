<script setup>
import { ref, watch } from 'vue'

const dialog = ref(false)
const fontSize = ref(16)
const highContrast = ref(false)

watch(fontSize, (size) => {
  document.body.style.fontSize = `${size}px`
})

watch(highContrast, (enabled) => {
  document.body.classList.toggle('high-contrast', enabled)
})
</script>

<template>
  <!-- Floating Button (outside layout flow) -->
  <div class="accessibility-fab">
    <v-btn icon @click="dialog = true" aria-label="Accessibility Settings">
      <v-icon>mdi-human</v-icon>
    </v-btn>
  </div>

  <!-- Dialog -->
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title>Accessibility Settings</v-card-title>
      <v-card-text>
        <v-slider
          v-model="fontSize"
          :min="12"
          :max="24"
          step="1"
          label="Text Size"
          thumb-label
        />
        <v-switch
          v-model="highContrast"
          label="High Contrast Mode"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
/* Global styles — not scoped */
body.high-contrast {
  background-color: #000;
  color: #fff;
}

.accessibility-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10000;
}
</style>