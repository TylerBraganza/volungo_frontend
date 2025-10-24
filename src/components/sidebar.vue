<template>
        <v-navigation-drawer
          app
          expand-on-hover
          permanent
          rail
        >
        <div class="d-flex flex-column fill-height">
  
          <v-divider/>
  
          <v-list style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            <v-list-item class="project-item" prepend-icon="mdi-hand-heart" title="Projects" value="projects" to="projects"></v-list-item>
            <v-list-item class="history-item" prepend-icon="mdi-history" title="Past Volunteering" value="past volunteering" to="pastVolunteer"></v-list-item>
          </v-list>

          <v-spacer/>
          <v-list style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            <v-list-item class="about-us-item" prepend-icon="mdi-information" title="About Us" value="about us" to="/aboutUs"></v-list-item>
            <v-list-item
              prepend-icon="mdi-account-circle"
              subtitle="Email"
              title="Name"
              to="/profile"
            ></v-list-item>
          </v-list>
        </div>  

        </v-navigation-drawer>
</template>

<style>

</style>