//import json data 
import { birthdayList } from "./jsonData.js";

let dayText = document.querySelector('.birthday__block__text');
let birthdayBlock = document.querySelector('.birthday-display__section');
let birthdayBlockList = document.querySelector('.birthday-display__section__list');
let birthdayCount = document.querySelector('.birthday__block__count');
let inputData = document.querySelectorAll('.input-section__year')[0];
let updateBtn = document.querySelector('.update');
let textarea = document.querySelectorAll('.text')[0];

let arrayOfDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let arrayOfColors = ["#800000", "#4b458e", "#458032", "#004466", "#aa8822", "#b00b69", "#1affdb", "#ffdb1a"];
let generateRandonColor = [];

//new array
const birthdayData = birthdayList.map(person => person.birthday);
const personName = birthdayList.map(person => person.name);

//to clear data

let clearData = () => {
    for (let i = 0; i < birthdayBlock.length; i++) birthdayBlock[i].innerHTML = "";
};

//add list of people 
let addPeople = () => {
    for (let i = 0; i < birthdayBlock.length; i++) {
        if (birthdayBlock[i].children.length == 0) {
            birthdayBlock[i].classList = "birthday-display__section birthday-empty";
            birthdayBlock[i].innerHTML = `<li class="birthday-display__section__list"></li>`;
        }
        else if (birthdayBlock[i].children.length == 1) birthdayBlock[i].classList = "birthday-display__section initial-size";
        else (birthdayBlock[i].children.length > 1 && birthdayBlock[i].children.length <= 20); {
            birthdayBlock[i].classList = "birthday-display__section size";
        }
    }
}
//heading count text
let heading = () => {
    for (let i = 0; i < birthdayBlock.length; i++) {
        let list = birthdayBlock[i].childElementCount;

        if (list == 0 || birthdayBlock[i].classList.contains("birthday-empty")) birthdayCount[i].innerHTML = `No Birthdays`;
        else if (listLength == 1) birthdayCount[i].innerHTML = `${listLength} Birthday`;
        else birthdayCount[i].innerHTML = `${list} Birthdays`;
    }
};

//random color for diff bdays
let randomColor = () => {
    for (let i = 0; i < birthdayBlockList.length; i++) {
        generateRandonColor.push(generateColor());
    }
};

//color generation 
const generateColor = () => {
    let randomColorConversion = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColorConversion;
};

//Adding JSON Data to Textarea
textarea.value = JSON.stringify(birthdayList, undefined, 4); 

// Adding Event Listener to Submit Button
updateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (inputData.value == "") {
        alert("Fill the year fiels")
    }
    else if (inputData.value.length > 4 || inputData.value.length < 4) {
        alert("Enter valid year")
    }
    else if (inputData.value.length === 4) {
        clearData();
        addPeople();
        randomColor();
        heading();
        inputData.value = "";
    }
});



















