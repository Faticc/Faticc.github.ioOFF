let people = [
    { name: "Александр", vl: 0 },
    { name: "Петрович", vl: 1 },
    { name: "Вова", vl: 1 }
  ];
  function test() {
      for (let i = 0; i < people.length; i++) {
        if (people[i].vl < 1) {
      console.log(`Name: ${people[i].name}`);
    }
  }
  }
  setInterval(test(), 60000);
  