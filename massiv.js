let op = 
[
    { af: "Абзаров Тельман", vl: value("1") },
    { af: "Абрамова Мария",  vl: value("1") },
    { af: "Амиров Эмиль", vl: value("1") },
    { af: "Бабаев Борис", vl: value("1") },
    { af: "Бадалян Шушана", vl: value("1") },
    { af: "Гаврилов Виктор", vl: value("1") },
    { af: "Голик Алёна", vl: value("1") },
    { af: "Голиков Тимур", vl: value("1") },
    { af: "Голоев Милан", vl: value("1") },
    { af: "Горбенко Вика", vl: value("1") },
    { af: "Гурова Полина", vl: value("1") },
    { af: "Джалалов Барыш", vl: value("1") },
    { af: "Джалалов Кадый", vl: value("1") },
    { af: "Исламова Айлин", vl: value("1") },
    { af: "Комеристый Александр", vl: value("1") },
    { af: "Кондратьев Александр", vl: value("1") },
    { af: "Магомедов Артём", vl: value("1") },
    { af: "Мевлютова Залина", vl: value("1") },
    { af: "Меретина Милана", vl: value("1") },
    { af: "Немогучева Юлия", vl: value("1") },
    { af: "Пасов Никита", vl: value("1") },
    { af: "Сафарян Максим", vl: value("1") },
    { af: "Соколов Данила", vl: value("1") },
    { af: "Чехизе Малак", vl: value("1") },
    { af: "Шарлай Алёна", vl: value("1") }
  ];
  function proverka(i) {
    let ts = value(0);
    for (let i = 0; i < people.length; i++) {
        if (ts() === people[i].vl()) {
            console.log('тест');
        }
    }
  }
  setInterval(proverka, 1000);