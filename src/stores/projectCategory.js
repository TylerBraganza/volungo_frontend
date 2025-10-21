import AnimalCare from '@/components/projectCategoriesIndPages/animalCare.vue'
import { defineStore } from 'pinia'

export const useProjectCategoryStore = defineStore('projectCategory', {
  state: () => ({
    projectCategory: {
      0: {
        id: 1,
        name: "Environmental Conservation",
        description: "Join efforts to protect and restore natural ecosystems through hands-on activities like tree planting, wildlife monitoring, clean-up drives, and sustainable education. Volunteers play a vital role in preserving biodiversity and promoting eco-conscious communities.",
        image: "/slideGroupImages/view-kids-practicing-health-wellness-activity.jpg",
        link: "/environmentalConservation" 
      },
      1: {
        id: 2,
        name: "Elderly Care",
        description: "Provide companionship, emotional support, and practical assistance to seniors in need. Whether you're helping with daily tasks, sharing stories, or simply being present, your time brings comfort, dignity, and connection to older adults in your community.",
        image: "/slideGroupImages/realistic-scene-with-elderly-care-senior-people.jpg",
        link: "/elderlyCare" 
      },
      2: {
        id: 3,
        name: "Teaching",
        description: "Empower learners by sharing knowledge, skills, and encouragement. Whether you're tutoring children, guiding youth, or supporting adult education, your time helps unlock potential and build brighter futures.",
        image: "/slideGroupImages/medium-shot-woman-teaching-kid-write.jpg",
        link: "/teaching" 
      },
      3: {
        id: 4,
        name: "Child Care",
        description: "Create safe, nurturing environments for children to learn, play, and grow. Volunteers assist with activities, supervision, and emotional support, making a lasting impact during formative years.",
        image: "/slideGroupImages/front-view-happy-mother-playing-home-with-her-children.jpg",
        link: "/childCare" 
      },

      4: {
        id: 5,
        name: "Animal Care",
        description: "Support the wellbeing of animals through hands-on care, shelter assistance, and advocacy. Volunteers help feed, groom, socialize, and protect animals while promoting compassion and responsible pet ownership.",
        image: "/slideGroupImages/boy-taking-care-of-animal.jpg",
        link: "/animalCare"  
      },

      5: {
        id: 6,
        name: "Community Outreach and Support",
        description: "Strengthen communities by helping with food distribution, shelter programs, and local initiatives. Volunteers connect with people in need, offering resources, empathy, and practical aid.",
        image: "/slideGroupImages/different-people-doing-volunteer-work.jpg",
        link: "/communityOutreach" 
      },

      6: {
        id: 7,
        name: "Special Needs Care",
        description: "Provide personalized support to individuals with physical, developmental, or cognitive challenges. Volunteers assist with daily tasks, creative activities, and inclusive engagement that fosters dignity and joy.",
        image: "/slideGroupImages/african-american-man-wheelchair-enjoying-having-fun-with-her-daughter-park.jpg",
        link: "/specialNeeds" 
      },

      7: {
        id: 8,
        name: "NGO Impact Assist",
        description: "Support nonprofits by offering skills in writing, design, research, and digital outreach. Volunteers help NGOs create content, manage social media, organize data, and improve online visibility while strengthening mission-driven organizations from behind the scenes.",
        image: "/slideGroupImages/day-office-travel-agency.jpg",
        link: "/ngoImpact" 
      },

      8: {
        id: 9,
        name: "Digital Literacy and Access",
        description: "Bridge the digital divide by helping individuals gain essential tech skills and access to online resources. Volunteers teach basic computer use, internet safety, and digital communication while supporting inclusive, tech-enabled communities.",
        image: "/slideGroupImages/lifestyle-scene-from-community-showing-care-support-from-people.jpg",
        link: "/digitalLiteracy" 
      },
    },
    selectedProjectCategoryItem: null
  }),

  actions: {
    updateSelectedProjectCategoryItem(item) {
      this.selectedProjectCategoryItem = item
    }
  }
})