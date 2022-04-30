let userName1 = prompt("Укажіть своє ім'я", "Ім'я");
let userPhone1 = prompt("Укажіть номер свого телефону", "+380");
let userMail1 = prompt("Укажіть електронну пошту", "user@gmail.com");
let brandCar1 = prompt(
  "Виберіть марку авто: Ауді, Тойота, Шкода, Рено",
  "Марку не вибрано"
);
let typeBody1 = prompt(
  "Зазначте тип кузова: седан, універсал, позашляховик, пікап, фургон",
  "Кузов не вибрано"
);
let typeEngine1 = prompt(
  "Виберіть тип двигуна: дизельний, бензиновий",
  "Двигун не вибрано"
);
let volumeEngine1 = +prompt(
  "Зазначте об'єм двигуна: 2, 3, 4, 5",
  "Об'єм не вибрано"
);
if (
  typeof volumeEngine1 === "number" &&
  !isNaN(volumeEngine1) &&
  volumeEngine1 >= 0
);
else {
  volumeEngine1 = 0;
}
let color1 = prompt(
  "Виберіть колір авто: білий, чорний, сірий, синій, жовтий, червоний",
  "Колір не вибрано"
);

let userName2 = prompt("Укажіть своє ім'я", "Ім'я");
let userPhone2 = prompt("Укажіть номер свого телефону", "+380");
let userMail2 = prompt("Укажіть електронну пошту", "user@gmail.com");
let brandCar2 = prompt(
  "Виберіть марку авто: Ауді, Тойота, Шкода, Рено",
  "Марку не вибрано"
);
let typeBody2 = prompt(
  "Зазначте тип кузова: седан, універсал, позашляховик, пікап, фургон",
  "Кузов не вибрано"
);
let typeEngine2 = prompt(
  "Виберіть тип двигуна: дизельний, бензиновий",
  "Двигун не вибрано"
);
let volumeEngine2 = +prompt(
  "Зазначте об'єм двигуна: 2, 3, 4, 5",
  "Об'єм не вибрано"
);
if (
  typeof volumeEngine2 === "number" &&
  !isNaN(volumeEngine2) &&
  volumeEngine2 >= 0
);
else {
  volumeEngine2 = 0;
}
let color2 = prompt(
  "Виберіть колір авто: білий, чорний, сірий, синій, жовтий, червоний",
  "Колір не вибрано"
);

let questionnaireСar1 = {
  id: 1,
  name: userName1,
  phone: userPhone1,
  mail: userMail1,
  brand: brandCar1,
  typeBody: typeBody1,
  typeEngine: typeEngine1,
  volumeEngine: volumeEngine1,
  color: color1,
};

let questionnaireСar2 = {
  id: 2,
  name: userName2,
  phone: userPhone2,
  mail: userMail2,
  brand: brandCar2,
  typeBody: typeBody2,
  typeEngine: typeEngine2,
  volumeEngine: volumeEngine2,
  color: color2,
};

let questionnaireСar3 = {
  id: 3,
  name: "Aня",
  phone: "+380509876543",
  mail: "anna@gmail.com",
  brand: "Aуді",
  typeBody: "седан",
  typeEngine: "дизельний",
  volumeEngine: 4,
  color: "сірий",
};

let questionnaireСars = [
  questionnaireСar1,
  questionnaireСar2,
  questionnaireСar3,
];
questionnaireСars.pop(questionnaireСar3);

console.log(questionnaireСars);

// Total volume engine
let totalVolumeEngine = 0;
questionnaireСars.forEach((questionnaireСar) => {
  totalVolumeEngine =
    questionnaireСar1.volumeEngine + questionnaireСar2.volumeEngine;
});

console.log(totalVolumeEngine);

// Add data user
let addDatUser1;
questionnaireСars.forEach((questionnaireСar) => {
  addDatUser1 = `1)${questionnaireСar1.id}; 
    2)${questionnaireСar1.name};
    3)${questionnaireСar1.phone};
    4)${questionnaireСar1.mail}`;
});

let infomUser1 = addDatUser1;
console.log(infomUser1);

let addDatUser2;
questionnaireСars.forEach((questionnaireСar) => {
  addDatUser2 = `1)${questionnaireСar2.id}; 
  2)${questionnaireСar2.name};
  3)${questionnaireСar2.phone};
  4)${questionnaireСar2.mail}`;
});

let infomUser2 = addDatUser2;
console.log(infomUser2);
