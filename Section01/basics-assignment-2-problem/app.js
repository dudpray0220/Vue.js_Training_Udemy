const app = Vue.createApp({
  data() {
    return {
      keydown: "",
      confirmKey: "",
    };
  },
  methods: {
    showAlert() {
      alert("Warning!!!!");
    },
    setKeydown() {
      this.keydown = event.target.value;
    },
    confirmKeydown() {
      this.confirmKey = event.target.value;
    },
  },
});

app.mount("#assignment");
