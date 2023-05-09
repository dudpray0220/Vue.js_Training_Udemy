const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + lastName;
    },
    submitForm() {
      alert("제출됨");
    },
    confirmInput() {
      this.confirmName = this.name;
    },
  },
});

app.mount("#events");
