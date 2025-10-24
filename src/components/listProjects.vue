<script setup>

import {ref} from 'vue'
import {useRouter} from "vue-router"

//models
const name = ref(null)
const shortDescription = ref(null)
const longDescription = ref(null)
const volunteer = ref(null)
const durationUnit = ref(null)
const durationValue = ref(null)

// user interface models
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const router = useRouter();

const selectedOption = ref(null);
const options = ['','Animal Care', 'Child Care', 'Community Outreach and Support', 'Digital Literacy and Access', 'Elderly Care', 'Environmental Conservation', 'NGO Impact Assist', 'Special Needs Care', 'Teaching'];

const formRef = ref(null)

function clearForm() {
  name.value = '';
  shortDescription.value = '';
  longDescription.value = '';
  volunteer.value = null;
  durationValue.value = null;
  durationUnit.value = '';
  selectedOption.value = '';
  formRef.value?.reset();
}

</script>

<template>
        <v-form ref="formRef">
            <v-row style="margin-top: 20px;" class="justify-center">
            <h1 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Create New Project</h1>
            <v-card class="pa-6 d-flex flex-column" justify="center" style="border: 2px solid #007cf0; width: 96%;">
                <v-row>
                    <v-col md="6">
                        <v-text-field v-model="name" label="Project Name" :rules="[(v) => !!v || 'Name is required']"></v-text-field>
                        <v-text-field v-model="shortDescription" label="Short Description" type="text" 
                            :rules="[
                                v => !!v || 'Short Description is Required',
                                v => v.trim().split(/\s+/).length <= 20 || 'Maximum 20 words'
                            ]"
                        ></v-text-field>
                        <v-textarea v-model="longDescription" label="Long Description" type="text"
                            :rules="[
                                (v) => !!v || 'Long Description is Required',
                            ]"
                        ></v-textarea>
                    </v-col>
                    <v-col  md="6">
                        <v-number-input 
                            v-model="volunteer" 
                            label="Volunteers Required" 
                            type="integer" 
                            :min="1" 
                            :rules="[
                                v => !!v || 'Required',
                                v => v >= 1 || 'Must be at least 1'
                            ]"
                        />
                        <v-row dense>
                            <v-col cols="6">
                                <v-number-input
                                    v-model="durationValue"
                                    label="Duration"
                                    min="1"
                                    outlined
                                    :rules="[
                                        v => !!v || 'Required',
                                        v => v >= 1 || 'Must be at least 1'
                                    ]"
                                />
                            </v-col>
                            <v-col cols="6">
                                <v-select
                                    v-model="durationUnit"
                                    :items="['', 'Hours', 'Days', 'Weeks', 'Months']"
                                    label="Unit"
                                    outlined
                                    :rules="[
                                        v => !!v || 'Select a unit',
                                        v => v !== '' || 'Please select a unit'
                                    ]"
                                />
                            </v-col>
                        </v-row>
                        <v-select
                            v-model="selectedOption"
                            :items="options"
                            label="Project Category"
                            outlined
                            :rules="[
                                v => !!v || 'Selection required',
                                v => v !== '' || 'Please select a unit'
                            ]"
                        />
                        <v-file-input label="Upload Image">

                        </v-file-input>
                    </v-col>
                </v-row>
                <v-row>
                    <v-card-actions style="margin-left: 565px;">
                        <v-btn style="background-color: #2BB673;">List Project</v-btn>
                        <v-btn style="border: 2px solid #2BB673;" @click = clearForm()>Clear Form</v-btn>
                    </v-card-actions>
                </v-row>
            </v-card>            
        </v-row>
        </v-form>
</template>