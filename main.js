// const { createApp } = Vue

// createApp({
//   data() {
//     return {
//       toDoList: [
//         "fare la spesa",
//         "fare la benzina",
//         "andare in palestra",
//         "fare il pranzo",
//         "fare il bucato",
//       ],
//       button: document.getElementById("button-Add"),
//       myInput: document.getElementById("myInput"),
//     }
//   },

//   methods: {
//     addElement() {
//         console.log(myInput.value)
//         this.toDoList.push(myInput.value)
//         myInput.value = ""
//     },
//     remove(indice) {
//         console.log("click")
//         this.toDoList.splice(indice, 1)
//     }
//   },

//   mounted() {

//   }
// }).mount('#app')

const { createApp } = Vue

createApp({
  data() {
    return {
      toDoList: [
        {titolo:"fare la spesa", done: true},
        {titolo:"fare la benzina", done: true},
        {titolo:"andare in palestra",done: true},
        {titolo:"fare il pranzo", done: true},
        {titolo:"fare il bucato", done: true},
      ],
      button: document.getElementById("button-Add"),
      myInput: document.getElementById("myInput"),
    }
  },

  methods: {
    addElement() {
        console.log(myInput.value)
        this.toDoList.push({titolo:myInput.value, done: true})
        myInput.value = ""
    },
    remove(indice) {
        console.log("click")
        this.toDoList.splice(indice, 1)
    },
    isItDone(indice) {
      if (this.toDoList[indice].done == true) {
        return "done"
      } else {
        return "notDone"
      }
    },
    change(indice) {
      if(this.toDoList[indice].done == true) {
        this.toDoList[indice].done = false
      } else {
        this.toDoList[indice].done = true
      }
    }
  },

  mounted() {

  }
}).mount('#app')
