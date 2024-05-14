const { createApp } = Vue

createApp({
  data() {
    return {
      toDoList: [
        "fare la spesa",
        "fare la spesa",
        "fare la spesa",
        "fare la spesa",
        "fare il bucato",
      ],
      button: document.getElementById("button-Add"),
      myInput: document.getElementById("myInput"),
    }
  },

  methods: {
    addElement() {
        console.log(myInput.value)
        this.toDoList.push(myInput.value)
        myInput.value = ""
    }
  },

  mounted() {

  }
}).mount('#app')