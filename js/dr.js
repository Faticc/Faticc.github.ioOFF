let people = [
    { name: "Абзарова Тельмана", birthday: new Date("08/03/2008"), gender: "male" },
    { name: "Абрамову Марию", birthday: new Date("01/27/2009"), gender: "female" },
    { name: "Амирова Эмиля", birthday: new Date("02/11/2009"), gender: "male" },
    { name: "Бабаева Бориса", birthday: new Date("09/29/2008"), gender: "male" },
    { name: "Бадалян Шушанну", birthday: new Date("05/21/2008"), gender: "female" },
    { name: "Гаврилова Виктора", birthday: new Date("MM/dd/2006"), gender: "male" },
    { name: "Голик Алёну", birthday: new Date("03/08/2008"), gender: "female" },
    { name: "Голикова Тимура", birthday: new Date("05/dd/2008"), gender: "male" },
    { name: "Голоева Милана", birthday: new Date("01/22/2008"), gender: "male" },
    { name: "Горбенко Викторию", birthday: new Date("05/11/2009"), gender: "female" },
    { name: "Гурову Полину", birthday: new Date("02/03/2008"), gender: "female" },
    { name: "Джалалова Барыша", birthday: new Date("07/23/2008"), gender: "male" },
    { name: "Джалалова Кадыра", birthday: new Date("09/24/2008"), gender: "male" },
    { name: "Исламову Айлин", birthday: new Date("07/19/2008"), gender: "female" },
    { name: "Комеристого Александра", birthday: new Date("02/19/2008"), gender: "male" },
    { name: "Кондратьева Александра", birthday: new Date("07/17/2008"), gender: "male" },
    { name: "Магомедова Артёма", birthday: new Date("05/19/2008"), gender: "male" },
    { name: "Мевлютову Залину", birthday: new Date("MM/dd/2008"), gender: "female" },
    { name: "Меретину Милану", birthday: new Date("12/27/2007"), gender: "female" },
    { name: "Немогучеву Юлию", birthday: new Date("05/26/2009"), gender: "female" },
    { name: "Пасова Никиту", birthday: new Date("09/26/2008"), gender: "male" },
    { name: "Сафарян Максима", birthday: new Date("09/22/2008"), gender: "male" },
    { name: "Соколова Данила", birthday: new Date("09/24/2008"), gender: "male" },
    { name: "Чехизе Малак", birthday: new Date("01/30/2009"), gender: "female" },
    { name: "Шарлай Алёну", birthday: new Date("09/27/2008"), gender: "female" }
  ];


  window.onload = function greetOnBirthday(i) {
    let today = new Date();
    for (let i = 0; i < people.length; i++) {
      if (today.getMonth() === people[i].birthday.getMonth() && today.getDate() === people[i].birthday.getDate()) {
          alert(`Поздравляем ученика 8В класса ${people[i].name} 🎂
                 с днём рождения Надеемся, он будет здоровым!
                 И проведёт этот день весело и съест много вкусностей.
                 Пожалуйста, продолжайте быть счастливыми!`);
      }
    }
  }