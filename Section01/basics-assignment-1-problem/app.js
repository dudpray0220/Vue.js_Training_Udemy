app = Vue.createApp({
  data() {
    return {
      name: "byh",
      age: 29,
      url: "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    };
  },
  methods: {
    randomNumber() {
      const num = Math.random();
      return num;
    },
    plusAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
