import { defineStore } from 'pinia'

export const useVolunteerStore = defineStore('volunteer', {
  state: () => ({
    allProjects: [], // full list of volunteer opportunities
    filters: {
      name: ''
    }
  }),
  getters: {
    filteredProjects(state) {
      return state.allProjects.filter(project =>
        project.name.toLowerCase().includes(state.filters.name.toLowerCase())
      )
    }
  }
})