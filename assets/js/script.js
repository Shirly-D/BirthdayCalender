//import json data 
import { birthdayList } from "./jsonData.js";

const dayText = document.querySelector('.birthday__block__text');
const birthdayBlock = document.querySelector('.birthday-display__section');
const birthdayBlockList = document.querySelector('.birthday-display__section__list');
const birthdayCount = document.querySelector('.birthday__block__count');
const inputData = document.querySelectorAll('.input-section__year')[0];
const updateBtn = document.querySelectorAll('.update')[0];
const textarea = document.querySelectorAll('.text')[0];

const arrayOfDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const arrayOfColors = ["#800000", "#4b458e", "#458032", "#004466", "#aa8822", "#b00b69", "#1affdb", "#ffdb1a"];
const generateRandonColor = [];

//new array
const birthdayData = birthdayList.map(person => person.birthday);
const personName = birthdayList.map(person => person.name);

//to clear data

const clearData = () => {
    for (let i = 0; i < birthdayBlock.length; i++) birthdayBlock[i].innerHTML = "";
};

//add list of people 
const addPeople = () => {
    for (let i = 0; i < birthdayBlock.length; i++) {
        if (birthdayBlock[i].children.length == 0) {
            birthdayBlock[i].classList = "birthday-display__section birthday-empty";
            birthdayBlock[i].innerHTML = `<li class="birthday-display__section__list"></li>`;
        }
        else if (birthdayBlock[i].children.length == 1) birthdayBlock[i].classList = "birthday-display__section initial-size";
        else (birthdayBlock[i].children.length > 1 && birthdayBlock[i].children.length <= 20); birthdayBlock[i].classList = "birthday-display__section size";
    }
};

//heading count text
const heading = () => {
    for (let i = 0; i < birthdayBlock.length; i++) {
        let list = birthdayBlock[i].childElementCount;

        if (list == 0 || birthdayBlock[i].classList.contains("birthday-empty")) birthdayCount[i].innerHTML = `No Birthdays`;
        else if (list == 1) birthdayCount[i].innerHTML = `${list} Birthday`;
        else birthdayCount[i].innerHTML = `${list} Birthdays`;
    }
};

//random color for diff bdays
const randomColor = () => {
    for (let i = 0; i < birthdayBlockList.length; i++) {
        generateRandonColor.push(generateColor());
    }
};

//adding color in the name list
const colorList = () => {
    for (let i = 0; i < birthdayBlock.length; i++) {
        let peopleList = birthdayBlock[i].children;
        for (let j = 0; j < peopleList.length; j++) {
            if (peopleList.length == 0 || birthdayBlock[i].classList.contains("birthday-empty")) peopleList[j].style.backgroundColor = "#6B7985";
            else if (peopleList.length == 1) birthdayCount[i].innerHTML = peopleList[j].style.backgroundColor = arrayOfColors[j];
            else peopleList[j].style.backgroundColor = arrayOfColors[j];
        }
    }
    generateRandonColor.length = 0;
};

//color generation 
const generateColor = () => {
    let randomColorConversion = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColorConversion;
};

//add first and last initial of names
const personNames = () => {
    birthdayData.forEach((birthday, index) => {
        let date = birthday.slice(3, 5);
        let month = birthday.slice(0, 2) - 1;
        let currentDate = new Date(inputData.value, month, date)
        let currentDay = arrayOfDays[currentDate.getDay()];
        console.log(currentDay);
        
        for (let i = 0; i < dayText.length; i++) {
            let name = personName[index];
            let values = name.split(" ");
            let fname = values[0].slice(0, 1);
            let lname = values[1].slice(0, 1);

            if (dayText[i].textContent == currentDay) {
                birthdayBlockList.innerHTML= `<h3 class="birthday-display__section__names">${fname}${lname}</h3>`;
            }
        }
    });
};

//Adding JSON Data to Textarea
textarea.value = JSON.stringify(birthdayList, undefined, 4); 

// Adding Event Listener to Submit Button
updateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputData.value == "") {
        alert("Fill the year fields")
    }
    else if (inputData.value.length > 4 || inputData.value.length < 4) {
        alert("Enter valid year")
    }
    else if (inputData.value.length === 4) {
        clearData();
        personNames();
        addPeople();
        randomColor();
        colorList();
        heading();
        inputData.value = "";
    }
});



















