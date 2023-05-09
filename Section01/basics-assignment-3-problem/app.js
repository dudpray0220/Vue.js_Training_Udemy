app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return 37;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      console.log("Watcher executing...");
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
