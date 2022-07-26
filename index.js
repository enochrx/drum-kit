const btnClick = () => {
  //   const audio = new Audio("sounds/crash.mp3");
  //   audio.play();
};
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Keypress
document.addEventListener("keydown", function (event) {
  action(event.key);
  buttonAnimation(event.key);
});

//Mouse click
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonHTML = this.innerHTML;

    action(buttonHTML);
    buttonAnimation(buttonHTML);
  });
}

const action = function (key) {
  switch (key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const kickBass = new Audio("sounds/kick-bass2.mp3");
      kickBass.play();
      break;
    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      "Not a valid input";
      break;
  }
};

const buttonAnimation = function (currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
};

//////////////////////////////////////////////////////////////////////////////
//Side Knowledge
//Constructor Function ----- The first letter of the function name is actually capitalized in this case, contrary to the usual camelCase practise of naming variables

function HotelStaff(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
const staff1 = new HotelStaff("Ramow", 35, true, ["spanish", "english"]);

console.log(staff1.age);
