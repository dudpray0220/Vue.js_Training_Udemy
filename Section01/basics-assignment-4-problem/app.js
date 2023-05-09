const app = Vue.createApp({
  data() {
    return {
      inputStyle: "",
      toggleValue: false,
      inputColor: "",
    };
  },
  methods: {
    setInputStyle() {
      if (event.target.value === "user1" || event.target.value === "user2") {
        this.inputStyle = event.target.value;
      } else {
        this.inputStyle = "";
      }
    },
    setToggle() {
      this.toggleValue = !this.toggleValue;
    },
    setColor() {
      this.inputColor = event.target.value;
    },
  },
});

app.mount("#assignment");
