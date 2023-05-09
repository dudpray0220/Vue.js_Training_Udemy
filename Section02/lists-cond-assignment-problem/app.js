const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTask: "",
      toggle: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.toggle ? "Hide Button" : "Show Button";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      console.log(this.inputTask);
      this.inputTask = "";
      console.log(this.tasks.length);
    },
    changeToggle() {
      this.toggle = !this.toggle;
      console.log(this.toggle);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
  },
});

app.mount("#assignment");
