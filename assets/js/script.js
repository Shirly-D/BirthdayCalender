//import json data 
import { birthdayList } from "./jsonData";

let dayText = document.querySelector('.birthday__block__text');
let birthdayBlock = document.querySelector('.birthday-display__section');
let birthdayBlockList = document.querySelector('.birthday-display__section__list');
let birthdayCount = document.querySelector('.birthday__block__count');
let inputData = document.querySelector('.input-section__year')[0];
let updateBtn = document.querySelector('update')[0];
let textarea = document.querySelector('.text')[0];

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
        else if (birthdayBlock[i].children.length == 1) birthdayBlock[i].classList = "display__peoples width1";
}
}





















