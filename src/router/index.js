import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/home.vue'
import Projects from '@/components/projects.vue'
import NGOSignUp from '@/components/ngoSignUp.vue'
import Login from '@/components/login.vue'
import PastVolunteer from '@/components/pastVolunteer.vue'
import AboutUs from '@/components/aboutUs.vue'
import LongListings from '@/components/longListings.vue'
import ShortListings from '@/components/shortListings.vue'
import Pricing from '@/components/pricing.vue'
import Apply from '@/components/apply.vue'
import Contact from '@/components/contact.vue'
import Profile from '@/components/profile.vue'
import ProjectCategory from '@/components/projectCategory.vue'
import Listings from '@/components/listings.vue'
import ProjectItem from '@/components/projectItem.vue'
import VolSignUp from '@/components/volSignUp.vue'
import FAQ from '@/components/faq.vue'
import animalCare from '@/components/projectCategoriesIndPages/animalCare.vue'
import childCare from '@/components/projectCategoriesIndPages/childCare.vue'
import communityOutreach from '@/components/projectCategoriesIndPages/communityOutreach.vue'
import digitalLiteracy from '@/components/projectCategoriesIndPages/digitalLiteracy.vue'
import elderlyCare from '@/components/projectCategoriesIndPages/elderlyCare.vue'
import environmentalConservation from '@/components/projectCategoriesIndPages/environmentalConservation.vue'
import ngoImpact from '@/components/projectCategoriesIndPages/ngoImpact.vue'
import specialNeeds from '@/components/projectCategoriesIndPages/specialNeeds.vue'
import teaching from '@/components/projectCategoriesIndPages/teaching.vue'
import SignUp from '@/components/signUp.vue'
import ListProjects from '@/components/listProjects.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },

    {
      name: 'projects',
      path: '/projects',
      component: Projects
    },

    {
      name: 'ngoLogin',
      path: '/ngoSignUp',
      component: NGOSignUp
    },

    {
      name: 'Login',
      path: '/login',
      component: Login
    },

    {
      name: 'pastVolunteer',
      path: '/pastVolunteer',
      component: PastVolunteer
    },

    {
      name: 'aboutUs',
      path: '/aboutUs',
      component: AboutUs
    },

    {
      name: 'shortListings',
      path: '/shortListings',
      component: ShortListings
    },

    {
      name: 'longListings',
      path: '/longListings',
      component: LongListings
    },

    {
      name: 'pricing',
      path: '/pricing',
      component: Pricing
    },

    {
      name: 'contact',
      path: '/contact',
      component: Contact
    },

    {
      name: 'apply',
      path: '/apply',
      component: Apply
    },

    {
      name: 'profile',
      path: '/profile',
      component: Profile
    },

    {
      name: 'projectCategory',
      path: '/projectCategory',
      component: ProjectCategory
    },

    {
      name: 'listings',
      path: '/listings',
      component: Listings
    },

    {
      name: 'projectItem',
      path: '/projectItem',
      component: ProjectItem
    },

    {
      name: 'volSignUp',
      path: '/volSignUp',
      component: VolSignUp
    },

    {
      name: 'faq',
      path: '/faq',
      component: FAQ
    },

    {
      name: 'animalCare',
      path: '/animalCare',
      component: animalCare
    },

    {
      name: 'childCare',
      path: '/childCare',
      component: childCare
    },

    {
      name: 'communityOutreach',
      path: '/communityOutreach',
      component: communityOutreach
    },

    {
      name: 'digitalLiteracy',
      path: '/digitalLiteracy',
      component: digitalLiteracy
    },

    {
      name: 'elderlyCare',
      path: '/elderlyCare',
      component: elderlyCare
    },

    {
      name: 'environmentalConservation',
      path: '/environmentalConservation',
      component: environmentalConservation
    },

    {
      name: 'ngoImpact',
      path: '/ngoImpact',
      component: ngoImpact
    },

    {
      name: 'specialNeeds',
      path: '/specialNeeds',
      component: specialNeeds
    },

    {
      name: 'teaching',
      path: '/teaching',
      component: teaching
    },

    {
      name: 'signUp',
      path: '/signUp',
      component: SignUp
    },

    {
      name: 'listProjects',
      path: '/listProjects',
      component: ListProjects
    },

    
  ],
})

export default router
