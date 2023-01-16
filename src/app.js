const MyNameApp = {
  data() {
    return{
      name: "Quimbé",
      age: 30
    }
  }
}

Vue.createApp(MyNameApp).mount("#app")