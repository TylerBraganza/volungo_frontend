<script setup>

import {useRouter} from "vue-router"

import { ref } from 'vue'
const user = ref({ avatarUrl: null })
const defaultAvatar = '/images/default-avatar.png'

const uploadAvatar = async (file) => {
  const formData = new FormData()
  formData.append('avatar', file)

  try {
    const res = await fetch('/api/user/avatar', {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()
    user.value.avatarUrl = data.avatarUrl
  } catch (err) {
    console.error('Upload failed', err)
  }
}

const router = useRouter()

function logout(){
    localStorage.setItem( "isLoggedIn", false );
    router.push('/')
}

function changeProfile(){
    
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col md="4">
                <v-card style="border: 2px solid #007CF0;" height="280px">
                        <v-img src='/images/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg'></v-img>
                </v-card>
            </v-col>
            <v-col md="8">
                <v-card class="pa-6" justify="center" style="font-family: 'Courier New', Courier, monospace; border: 2px solid #2BB673; height: 280px;">
                    <h2>Name: </h2>
                    <h2>Email: </h2>
                    <h2>Phone: </h2>
                    <h2>Hours Vounteered: </h2>
                    <v-btn style="border: 2px solid #2BB673; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: 10px;">🖨️ Print Certificate</v-btn>
                    <v-spacer/>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12">
                <v-card style="height: 280px; font-family: 'Courier New', Courier, monospace;border: 2px solid #222;" class="pa-6" justify="center">
                    <h2>Achievements:</h2>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>