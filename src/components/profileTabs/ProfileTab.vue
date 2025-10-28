<template>
  <v-container>
    <v-card class="pa-6" max-width="600" elevation="4" style="margin-left: 250px;">
      <v-row justify="center">
        <v-avatar size="100">
          <v-img :src="userImage" alt="User Image" />
        </v-avatar>
      </v-row>

      <v-file-input
        label="Upload Profile Image"
        accept="image/*"
        prepend-icon="mdi-camera"
        @change="handleImageUpload"
        class="mt-4"
      />

      <v-text-field
        label="Name"
        v-model="name"
        prepend-icon="mdi-account"
        @blur="saveName"
      />

      <v-text-field
        label="Email"
        v-model="email"
        prepend-icon="mdi-email"
        @blur="saveEmail"
      />

      <v-text-field
        label="Password"
        :model-value="password"
        prepend-icon="mdi-lock"
        type="password"
        readonly
      />

      <v-expansion-panels class="mt-4">
        <v-expansion-panel>
          <v-expansion-panel-title>Change Password</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-text-field
              label="New Password"
              v-model="newPassword"
              type="password"
              prepend-icon="mdi-lock-reset"
            />
            <v-text-field
              label="Confirm Password"
              v-model="confirmPassword"
              type="password"
              prepend-icon="mdi-lock-check"
            />
            <v-btn
              color="primary"
              class="mt-2"
              :disabled="!canUpdate"
              @click="updatePassword"
            >
              Update Password
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref(localStorage.getItem('name') || 'Tyler')
const email = ref(localStorage.getItem('email') || 'tyler@example.com')
const password = ref(localStorage.getItem('password') || '••••••••')
const userImage = ref(localStorage.getItem('userImage') || 'https://via.placeholder.com/100')

const newPassword = ref('')
const confirmPassword = ref('')

const canUpdate = computed(() =>
  newPassword.value &&
  confirmPassword.value &&
  newPassword.value === confirmPassword.value
)

function updatePassword() {
  localStorage.setItem('password', newPassword.value)
  password.value = '••••••••'
  newPassword.value = ''
  confirmPassword.value = ''
}

function saveName() {
  localStorage.setItem('name', name.value)
}

function saveEmail() {
  localStorage.setItem('email', email.value)
}

function handleImageUpload(fileList) {
  const file = fileList?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      userImage.value = reader.result
      localStorage.setItem('userImage', reader.result)
    }
    reader.readAsDataURL(file)
  }
}
</script>