let options = [];
document.querySelector("#submitBtn").addEventListener("click", function() {
    options.length = 0;
    let select0 = {
        name: "Абзаров Тельман",
        value: document.querySelector("#select0").value
    };
    let select1 = {
        name: "Абрамова Мария",
        value: document.querySelector("#select1").value
    };
    let select2 = {
        name: "Амиров Эмиль",
        value: document.querySelector("#select2").value
    };
    let select3 = {
        name: "Бабаев Борис",
        value: document.querySelector("#select3").value
    };
    let select4 = {
        name: "Бадалян Шушана",
        value: document.querySelector("#select4").value
    };
    let select5 = {
        name: "Гаврилов Виктор",
        value: document.querySelector("#select5").value
    };
    let select6 = {
        name: "Голик Алена",
        value: document.querySelector("#select6").value
    };
    let select7 = {
        name: "Голиков Тимур",
        value: document.querySelector("#select7").value
    };
    let select8 = {
        name: "Голоев Милан",
        value: document.querySelector("#select8").value
    };
    let select9 = {
        name: "Горбенко Виктория",
        value: document.querySelector("#select9").value
    };
    let select10 = {
        name: "Гурова Полина",
        value: document.querySelector("#select10").value
    };
    let select11 = {
        name: "Джалалов Барыш",
        value: document.querySelector("#select11").value
    };
    let select12 = {
        name: "Джалалов Кадыр",
        value: document.querySelector("#select12").value
    };
    let select13 = {
        name: "Исламова Айлин",
        value: document.querySelector("#select13").value
    };
    let select14 = {
        name: "Комеристый Александр",
        value: document.querySelector("#select14").value
    };
    let select15 = {
        name: "Кондратьев Александр",
        value: document.querySelector("#select15").value
    };
    let select16 = {
        name: "Магомедов Артём",
        value: document.querySelector("#select16").value
    };
    let select17 = {
        name: "Мевлютова Залина",
        value: document.querySelector("#select17").value
    };
    let select18 = {
        name: "Меретина Милана",
        value: document.querySelector("#select18").value
    };
    let select19 = {
        name: "Немогучева Юлия",
        value: document.querySelector("#select19").value
    };
    let select20 = {
        name: "Пасов Никита",
        value: document.querySelector("#select20").value
    };
    let select21 = {
        name: "Сафарян Максим",
        value: document.querySelector("#select21").value
    };
    let select22 = {
        name: "Соколов Данила",
        value: document.querySelector("#select22").value
    };
    let select23 = {
        name: "Чехизе Малак",
        value: document.querySelector("#select23").value
    };
    let select24 = {
        name: "Шарлай Алёна",
        value: document.querySelector("#select24").value
    };
    options.push(select0, select1, select2, select3, select4, select5, select6, select7, select8, select9, select10, select11, select12, select13, select14, select15, select16, select17, select18, select19, select20, select21, select22, select23, select24);
    console.log(options);
    let content = '';
    for (var i = 0; i < options.length; i++) {
        content += options[i].name + ': ' + options[i].value + '\n';
    }

    var blob = new Blob([content], {
        type: 'text/plain'
    });
    var a = document.createElement('a');
    a.download = "Список присутствующих.txt";
    a.href = URL.createObjectURL(blob);
    a.click();
});