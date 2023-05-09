const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the Vue",
      courseGoalB: "Master the Vue",
      courseGoalC: "<h3>Oh, the Vue</h3>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
