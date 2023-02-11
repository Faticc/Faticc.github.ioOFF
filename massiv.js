let op = [
    { af: "Абзаров Тельман", vl: new value("1") },
    { af: "Абрамова Мария",  vl: new value("1") },
    { af: "Амиров Эмиль", vl: new value("1") },
    { af: "Бабаев Борис", vl: new value("1") },
    { af: "Бадалян Шушана", vl: new value("1") },
    { af: "Гаврилов Виктор", vl: new value("1") },
    { af: "Голик Алёна", vl: new value("1") },
    { af: "Голиков Тимур", vl: new value("1") },
    { af: "Голоев Милан", vl: new value("1") },
    { af: "Горбенко Вика", vl: new value("1") },
    { af: "Гурова Полина", vl: new value("1") },
    { af: "Джалалов Барыш", vl: new value("1") },
    { af: "Джалалов Кадый", vl: new value("1") },
    { af: "Исламова Айлин", vl: new value("1") },
    { af: "Комеристый Александр", vl: new value("0") },
    { af: "Кондратьев Александр", vl: new value("1") },
    { af: "Магомедов Артём", vl: new value("1") },
    { af: "Мевлютова Залина", vl: new value("1") },
    { af: "Меретина Милана", vl: new value("1") },
    { af: "Немогучева Юлия", vl: new value("1") },
    { af: "Пасов Никита", vl: new value("1") },
    { af: "Сафарян Максим", vl: new value("1") },
    { af: "Соколов Данила", vl: new value("1") },
    { af: "Чехизе Малак", vl: new value("1") },
    { af: "Шарлай Алёна", vl: new value("1") }
  ];
  function proverka(i) {
    let ts = new value(0);
    for (let i = 0; i < people.length; i++) {
        if (ts() === people[i].vl()) {
            console.log('тест');
        }
    }
  }
  setInterval(proverka, 1000);