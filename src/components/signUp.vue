<script setup>
</script>

<style>
.hover-card:hover .hover-text {
  color:  #2BB673; /* or any color you want */
  transition: color 0.3s ease;
}

.card-link {
    text-decoration: none;
}
  
.hover-card {
    transition: box-shadow 0.3s ease;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
  
.card-link:hover .hover-card {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}
</style>

<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 style="font-family: 'Courier New', Courier, monospace; margin-top: 20px;" class="text-center">Are you signing up as an NGO or a volunteer?</h1>
            </v-col>
            <v-col cols="12" md="6">
                <router-link to="/volSignUp" class="card-link">
                    <v-card style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: 20px;" class="text-center hover-card">
                        <v-img src="/images/joel-muniz-A4Ax1ApccfA-unsplash.jpg" gradient="to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)">
                            <h1 class="hover-text">H1</h1>
                        </v-img>
                    </v-card>
                </router-link>
            </v-col>
            <v-col cols="12" md="6">
                <router-link to="/ngoSignUp" class="card-link">
                    <v-card style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: 20px;" class="text-center hover-card">
                        <v-img src="/images/joel-muniz-A4Ax1ApccfA-unsplash.jpg" gradient="to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)">
                            <h1 class="hover-text">H1</h1>
                        </v-img>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>