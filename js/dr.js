let people = [
    { name: "Абзаров", birthday: new Date("08/03/2008"), gender: "male" },
    { name: "Абрамова", birthday: new Date("01/27/2009"), gender: "female" },
    { name: "Амиров", birthday: new Date("02/11/2009"), gender: "male" },
    { name: "Бабаев", birthday: new Date("09/29/2008"), gender: "male" },
    { name: "Бадалян", birthday: new Date("05/21/2008"), gender: "female" },
    { name: "Гаврилов", birthday: new Date("MM/dd/2006"), gender: "male" },
    { name: "Голик", birthday: new Date("03/08/2008"), gender: "female" },
    { name: "Голиков", birthday: new Date("05/dd/2008"), gender: "male" },
    { name: "Голоев", birthday: new Date("01/22/2008"), gender: "male" },
    { name: "Горбенко", birthday: new Date("05/11/2009"), gender: "female" },
    { name: "Гурова", birthday: new Date("02/03/2008"), gender: "female" },
    { name: "Джалалов", birthday: new Date("07/23/2008"), gender: "male" },
    { name: "Джалалов", birthday: new Date("09/24/2008"), gender: "male" },
    { name: "Исламова", birthday: new Date("07/19/2008"), gender: "female" },
    { name: "Комеристый", birthday: new Date("07/10/2008"), gender: "male" },
    { name: "Кондратьев", birthday: new Date("07/17/2008"), gender: "male" },
    { name: "Магомедов", birthday: new Date("05/19/2008"), gender: "male" },
    { name: "Мевлютова", birthday: new Date("MM/dd/2008"), gender: "female" },
    { name: "Меретина", birthday: new Date("12/27/2007"), gender: "female" },
    { name: "Немогучева", birthday: new Date("05/26/2009"), gender: "female" },
    { name: "Пасов", birthday: new Date("09/26/2008"), gender: "male" },
    { name: "Сафарян", birthday: new Date("09/22/2008"), gender: "male" },
    { name: "Соколов", birthday: new Date("09/24/2008"), gender: "male" },
    { name: "Чехизе", birthday: new Date("01/30/2009"), gender: "female" },
    { name: "Шарлай", birthday: new Date("09/27/2008"), gender: "female" }
  ];
  function greetOnBirthday(i) {
    let today = new Date();
    for (let i = 0; i < people.length; i++) {
      if (today.getMonth() === people[i].birthday.getMonth() && today.getDate() === people[i].birthday.getDate()) {
          alert(`Поздравим с днем рождения! Желаю вам всего наилучшего в ваш особенный день: ${people[i].name}`);
      }
    }
  }
  setInterval(greetOnBirthday, 60 * 60 * 1000); // проверка каждый час