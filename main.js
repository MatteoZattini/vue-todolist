const { createApp } = Vue

createApp({
  data() {
    return {
      toDoList: [
        "fare la spesa",
        "fare la spesa",
        "fare la spesa",
        "fare la spesa",
        "fare la spesa",
      ]

    }
  },

  methods: {
    printList(index) {
        
    }
  }
}).mount('#app')