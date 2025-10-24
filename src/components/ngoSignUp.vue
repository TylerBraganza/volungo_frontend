<script setup>

import {ref} from 'vue'
import {useRouter} from "vue-router"

//models
const name = ref(null)
const email = ref(null)
const phone = ref(null)
const password = ref(null)

// user interface models
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const router = useRouter();

//functions
function signUp(){
    const signUpData = {
        'name': name.value,
        'email': email.value,
        'phone': phone.value,
        'password': password.value,
    }

    try {
        // save data on browser
        localStorage.setItem("signUpData", JSON.stringify(signUpData));
        localStorage.setItem("isNGO", true)
        router.push('/login')

    } catch(err) {
        console.error('Sign Up process failed', err)
    }
}
</script>

<template>
    <v-container align="center">
        <v-row>
            <v-col>
                <v-card class="pa-6" width="600" justify="center" style="border: 2px solid blue;">
                    <v-card-title style="font-family: 'Courier New', Courier, monospace;">SIGN UP</v-card-title>
                    <v-text-field v-model="name" label="Name" :rules="[(v) => !!v || 'Name is required']"></v-text-field>
                    <v-text-field v-model="email" label="Email"
                        :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required> 
                    </v-text-field>
                    <v-text-field v-model="phone" label="Phone Number" type="number"></v-text-field>
                    <v-text-field v-model="password" label="Password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required
                    ></v-text-field>
                    <v-text-field label="Confirm Password"
                        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        @click:append="showConfirmPassword = !showConfirmPassword"
                        :rules="[
                            (v) => !!v || 'Please confirm your password',
                            (v) => v === password || 'Passwords must match',
                        ]"
                        required
                    ></v-text-field>
                    <v-card-actions>
                        <v-btn variant="elevated" @click="signUp()" style="background-color: #2BB673; margin-left: 230px;">SIGN UP</v-btn>
                    </v-card-actions>
                    <v-card-text style="font-family: 'Courier New', Courier, monospace;">Already registered?
                        <router-link to="/login">Login</router-link>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>