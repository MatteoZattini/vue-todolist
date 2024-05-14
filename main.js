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
      elemento: 0,
    }
  },

  methods: {
    addElement() {
        console.log(myInput.value)
        this.toDoList.push(myInput.value)
        myInput.value = ""
    },
    remove(array, indice) {
        console.log("click")
        array[indice] = elemento
        elemento.classList.add("d-none")
        // if (indice == elemento) {
        //     return indice.classList.add("d-none")
        // }

        // indice = this.toDoList(i)
        // indice.classList.add("d-none")
        
    }
  },

  mounted() {

  }
}).mount('#app')
