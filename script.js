
function leapyear() {
    let year = prompt(`Input a year & check it's leap year or not`);
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
      alert(`${year} is a leap year`);
  } else {
      alert(`${year} is not a leap year`);
  }
  
  }
  
  
  
  
  
  
  let randomcolors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
  
  
  function color() {
    let random = Math.trunc(Math.random() * randomcolors.length)
    console.clear()
    console.log('Your Lucky color is', randomcolors[random]);
  }
  
  
  
  
  
  
  
  
  
  
  
  let Emojis = ['😄', '🥳', '🤔', '😢', '❤️', '🎉'];
  
  function randoms() {
    let randomemojis = Math.trunc(Math.random() *Emojis.length);
  
  
    alert(Emojis[randomemojis])
  }



  function Task1() {
    let Email = document.getElementById('email').value ;
    let Password = document.getElementById('password').value;

    if (Email === "bmj@gmail.com" && Password === "bmj123") {
      alert("login successful");
    } else {
      alert("invalid password or email");
    }
  }
  
  let names = ["bilal", "hamza", "ayan", "areeb", "moiz", "shehram", "anas"];
  function Task2() {
    let input = prompt("plz input your saved name bilal, hamza, ayan, areeb, moiz, shehram, anas");
    
    if (names.includes(input)) {
      alert("Name exists");
    } else {
      alert("name does not exist");
    }
  }