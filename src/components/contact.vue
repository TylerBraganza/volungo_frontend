<script setup>
</script>
<template>
    <v-container class="contact-page text-center" >
      <!-- Header -->
      <div class="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Whether you have questions, feedback, or want to get involved — reach out!</p>
      </div>
  
      <!-- Form -->
      <v-form class="contact-form">
        <v-text-field label="Full Name" required />
        <v-text-field label="Email Address" required type="email" />
        <v-textarea label="Your Message" rows="5" required />
        <v-btn color="primary" class="mt-4">Send Message</v-btn>
      </v-form>
  
      <!-- Info + Social -->
      <v-row class="contact-info mt-8">
        <v-col cols="12" md="6">
          <h3>Reach Us</h3>
          <p><v-icon color="primary">mdi-email</v-icon> contact@volungo.org</p>
          <p><v-icon color="primary">mdi-phone</v-icon> +254 712 345678</p>
          <p><v-icon color="primary">mdi-map-marker</v-icon> Nairobi, Kenya</p>
        </v-col>
  
        <v-col cols="12" md="6">
          <h3>Follow Us</h3>
          <v-btn icon style="margin-right: 5px;"><v-icon color="blue darken-2">mdi-facebook</v-icon></v-btn>
          <v-btn icon style="margin-right: 5px;"><v-icon color="light-blue">mdi-twitter</v-icon></v-btn>
          <v-btn icon style="margin-right: 5px;"><v-icon color="red">mdi-instagram</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<style>
.contact-page {
  font-family: Cambria, Georgia, "Times New Roman", serif;
  max-width: 800px;
  margin: auto;
}

.contact-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.contact-header p {
  font-size: 1.2rem;
  color: #555;
}

.contact-form .v-text-field,
.contact-form .v-textarea {
  font-size: 1rem;
}

.contact-info h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.contact-info p {
  font-size: 1rem;
  margin: 0.3rem 0;
}
</style>