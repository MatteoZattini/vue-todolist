const { createApp } = Vue

createApp({
  data() {
    return {
      toDoList: [
        "fare la spesa",
        "fare la benzina",
        "andare in palestra",
        "fare il pranzo",
        "fare il bucato",
      ],
      button: document.getElementById("button-Add"),
      myInput: document.getElementById("myInput"),
      elemento: 0,
    }
  },

  methods: {
    addElement() {
        console.log(myInput.value)
        this.toDoList.push(myInput.value)
        myInput.value = ""
    },
    remove(indice) {
        console.log("click")
        this.toDoList.splice(indice, 1)
    }
  },

  mounted() {

  }
}).mount('#app')
