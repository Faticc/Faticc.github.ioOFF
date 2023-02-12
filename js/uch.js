let options = [];
document.querySelector("#submitBtn").addEventListener("click", function() {
    options.length = 0; // Clearing the array
    let select1 = { name: "Саша", value: document.querySelector("#select1").value };
    let select2 = { name: "Вика", value: document.querySelector("#select2").value };
    let select3 = { name: "Кадыр", value: document.querySelector("#select3").value };
    options.push(select1, select2, select3);
    console.log(options);
});