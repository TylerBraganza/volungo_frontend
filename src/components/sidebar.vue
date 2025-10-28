<template>
        <v-navigation-drawer
          app
          expand-on-hover
          permanent
          rail
          elevation="3"
        >
        <div class="d-flex flex-column fill-height">
  
          <v-divider/>
  
          <v-list style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            <v-list-item class="colored-item" prepend-icon="mdi-account-group" title="Projects" value="projects" to="projects"></v-list-item>
            <v-list-item class="colored-item" prepend-icon="mdi-apps" title="Project Categories" value="Project Categories" to="projectCategory"></v-list-item>
            <v-list-item class="colored-item" prepend-icon="mdi-history" title="Past Volunteering" value="past volunteering" to="pastVolunteer"></v-list-item>
          </v-list>

          <v-spacer/>
          <v-list style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            <v-list-item class="colored-item" prepend-icon="mdi-information" title="About Us" value="about us" to="/aboutUs"></v-list-item>
            <v-list-item
              prepend-icon="mdi-account-circle"
              subtitle="Role"
              title="Name"
              to="/profile"
              class="colored-item"
            ></v-list-item>
          </v-list>
        </div>  

        </v-navigation-drawer>
</template>

<style>
.colored-item .v-icon{
  color: #000000 !important;
}
</style>