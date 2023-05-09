const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname: "",
      lastName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = `${value} ${this.lastName}`;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = `${this.name} ${value}`;
    //   }
    // },
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullname() {
      console.log("Running again");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return `${this.name} ${this.lastName}`;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    setReset() {
      this.name = "";
    },
  },
});

app.mount("#events");
