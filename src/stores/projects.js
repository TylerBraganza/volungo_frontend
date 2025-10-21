import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
      {
        id:1,
        name: "GreenGrid Kenya",
        image: "/images/african-american-technician-checks-maintenance-solar-panels-group-three-black-engineers-meeting-solar-station.jpg",
        description: "Solar microgrids powering rural Kenya, reducing energy poverty and boosting local economies through sustainable electricity access.",
        longDescription:"GreenGrid Kenya is a renewable energy initiative focused on deploying solar microgrids in off-grid rural communities across Kenya. The project aims to reduce energy poverty, empower local economies, and promote sustainable development through clean, affordable electricity. It includes training programs for local technicians and partnerships with schools and clinics to ensure reliable power access.",
        capacity: "3/10",
        organization:"EcoEmpower Kenya",
        date:"20/10/2025",
        duration:"3 days",
        category:"Environmental Conservation"
      },
      {
        id:2,
        name: "Books Beyond Borders",
        image: "/images/study-group-african-people.jpg",
        description: "Distributing books and training teachers to improve literacy and foster reading culture in underserved East African schools.",
        longDescription: "Books Beyond Borders is a literacy and education access program that distributes culturally relevant books to underserved schools in East Africa. It also trains teachers in inclusive pedagogy and supports mobile libraries in remote regions. The goal is to foster a love of reading and improve literacy outcomes for children aged 6–14.",
        capacity: "3/10",
        organization:"ReadRise Foundation",
        date:"15/10/2025",
        duration:"4 weeks",
        category:"Community Outreach and Support"
      },
      {
        id:3,
        name: "AquaSafe Initiative",
        image: "/images/view-realistic-hands-touching-clear-flowing-water.jpg",
        description: "Clean water access through rain harvesting, borehole repair, and hygiene education in drought-affected communities.",
        longDescription: "AquaSafe Initiative provides clean water solutions to drought-prone communities through rainwater harvesting systems, borehole rehabilitation, and water hygiene education. The project targets schools and health centers first, ensuring safe water access for children and vulnerable populations. It also promotes community-led maintenance and water governance.", 
        capacity: "3/10",
        organization:"WaterWell trust",
        date:"18/10/2025",
        duration:"3 weeks",
        category:"Community Outreach and Support"
      },
      {
        id:4,
        name: "MindMatters Youth",
        image: "/images/people-meeting-support-group.jpg",
        description: "Youth mental health support through peer counseling, school workshops, and digital resources to build emotional resilience.",
        longDescription: "MindMatters Youth is a mental health awareness and support program for teenagers and young adults in urban Kenya. It offers peer counseling, school-based workshops, and digital resources to reduce stigma and promote emotional resilience. The project collaborates with psychologists and youth mentors to create safe spaces for expression and healing.",
        capacity: "3/10",
        organization:"ThriveMind Kenya",
        date:"30/10/2025",
        duration:"2 hours",
        category:"Community Outreach and Support"
      },
      {
        id:5,
        name: "BrightSteps Childcare",
        image: "/images/portrait-african-american-mother-with-his-son-playing-having-fun-together-outdoors-park-monoparental-family.jpg",
        description: "Providing nurturing care and playful learning for children in underserved communities.",
        longDescription: "BrightSteps Childcare is a volunteer-led initiative supporting children aged 3–8 in informal settlements around Nairobi. Volunteers engage in play-based learning, hygiene routines, and emotional support to foster early development. The program partners with local caregivers and schools to ensure continuity and safety.",
        capacity: "5/12",
        organization: "LittleLight Foundation",
        date: "22/10/2025",
        duration: "3 months",
        category: "Child Care"
      },
      {
        id:6,
        name: "EmpowerAbility",
        image: "/images/teacher-explaining-illustration-process-paralyzed-student-with-disability-working-painting-project-artistic-lesson-creativity-studio-diverse-team-sketching-vase-using-graphic-pencil.jpg",
        description: "Inclusive care and learning for children with physical and cognitive disabilities.",
        longDescription: "EmpowerAbility connects volunteers with special needs centers in Nairobi to assist with therapy sessions, adaptive learning, and recreational activities. Volunteers receive basic training in communication and mobility support, working alongside therapists and educators to promote inclusion.",
        capacity: "2/8",
        organization: "AccessAbility Kenya",
        date: "25/10/2025",
        duration: "4 days",
        category: "Special Needs Care"
      },
      {
        id:7,
        name: "PawPal Rescue",
        image: "/images/smiley-woman-playing-with-cute-dog-up-adoption.jpg",
        description: "Animal rescue and shelter support for abandoned pets and injured wildlife.",
        longDescription: "PawPal Rescue is a volunteer program based at a shelter near Ngong Hills. Volunteers help with feeding, cleaning, basic medical care, and socializing rescued animals. The project also runs weekend adoption drives and wildlife awareness campaigns in schools.",
        capacity: "4/10",
        organization: "WildCare Kenya",
        date: "28/10/2025",
        duration: "5 weeks",
        category: "Animal Care"
      },
      {
        id:8,
        name: "DigitalBridge",
        image: "/images/grandson-teaching-his-elderly-female-use-laptop.jpg",
        description: "Teaching basic computer skills and internet safety to youth and adults.",
        longDescription: "DigitalBridge is a digital literacy initiative offering free training sessions in community centers across Nairobi. Volunteers teach typing, email use, online safety, and basic productivity tools. The program targets school leavers, job seekers, and older adults with limited tech exposure.",
        capacity: "6/15",
        organization: "TechReach Africa",
        date: "26/10/2025",
        duration: "2.5 weeks",
        category: "Digital Literacy and Access"
      },
      {
        id:9,
        name: "ImpactAssist",
        image: "/images/nomad-family-traveling-living-van.jpg",
        description: "Supporting local NGOs with admin, outreach, and impact tracking.",
        longDescription: "ImpactAssist places volunteers in small NGOs to help with data entry, social media, grant writing, and event planning. Volunteers receive onboarding and work closely with program officers to improve visibility and efficiency. Ideal for those interested in nonprofit management.",
        capacity: "3/6",
        organization: "CivicLink Kenya",
        date: "27/10/2025",
        duration: "3 days",
        category: "NGO Impact Assist"
      },
      {
        id:10,
        name: "GoldenCompanions",
        image: "/images/lifestyle-scene-showing-care-support-from-people-community.jpg",
        description: "Companionship and wellness support for elderly residents in care homes.",
        longDescription: "GoldenCompanions organizes weekly visits to elderly care homes in Nairobi, where volunteers engage in conversation, reading, light exercise, and wellness checks. The project aims to reduce isolation and promote dignity among older adults through consistent, caring interaction.",
        capacity: "2/5",
        organization: "AgeWell Kenya",
        date: "29/10/2025",
        duration: "2 months",
        category: "Elderly Care"
      },
      {
        id:11,
        name: "TeachForward",
        image: "/images/portrait-professor-work-educational-system.jpg",
        description: "Volunteer teaching in under-resourced schools and after-school programs.",
        longDescription: "TeachForward connects volunteers with schools in low-income areas to support literacy, numeracy, and creative arts. Volunteers assist teachers, lead small groups, and run enrichment activities. The program includes orientation and ongoing mentorship to ensure impact and growth.",
        capacity: "7/20",
        organization: "EduSpark Kenya",
        date: "30/10/2025",
        duration: "4 hours",
        category: "Teaching"
      }
    ],
    selectedProjectItem: null
  }),

  actions: {
    updateSelectedProjectItem(item) {
      this.selectedProjectItem = item
    }
  }
})
