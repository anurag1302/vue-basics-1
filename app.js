const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish Vue!!!",
      link: "http://techncode.xyz/",
      stringVar: "Hello World",
      numberVar: 123,
      boolVar: true,
      arrayVar: [99, 100, 100],
      objectVar: { name: "John" },
    };
  },
});

app.mount("#user-goal");
