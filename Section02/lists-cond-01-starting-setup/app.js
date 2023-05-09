const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal: "",
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.goal);
      this.goal = "";
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
      console.log(idx);
    },
  },
});

app.mount("#user-goals");
