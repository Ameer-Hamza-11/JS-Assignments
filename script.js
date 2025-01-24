
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
  
  let names = ["bilal", "hamza", "ayan", "areeb", "moiz", "shehram", "anas, 'jameel"];
  function Task2() {
    let input = document.getElementById('Username').value;
  
    if (names.includes(input)) {
      alert("Name exists");
    } else {
      alert("name does not exist");
    }
  }





  let inputs = [
    {
      username: 'bilal',
      email: 'bmj@gmail.com',
      password: 'bmj123'
    }
  ];

  function Tasks3() {
    let user = document.getElementById('user').value.trim();
    let email = document.getElementById('pass').value.trim();
    let password = document.getElementById('gmail').value.trim();

    // Check if the entered details match any object in the inputs array
    let isValid = inputs.some(input => 
      input.username === user && 
      input.email === email && 
      input.password === password
    );

    if (isValid) {
      alert('Login successful');
    } else {
      alert('Login failed, Please Try Again');
    }
  }


  
// function leapyear() {
//   let year = prompt(`Input a year & check it's leap year or not`);
//   if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
//     alert(`${year} is a leap year`);
// } else {
//     alert(`${year} is not a leap year`);
// }

// }






// let randomcolors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];


// function color() {
//   let random = Math.trunc(Math.random() * randomcolors.length)
//   console.clear()
//   console.log('Your Lucky color is', randomcolors[random]);
// }











// let Emojis = ['😄', '🥳', '🤔', '😢', '❤️', '🎉'];

// function randoms() {
//   let randomemojis = Math.trunc(Math.random() *Emojis.length);


//   alert(Emojis[randomemojis])
// }


function add() {
  let num1 = document.getElementById('num1').value *1;
  let num2 = document.getElementById('num2').value *1;
  let userinput = document.getElementById('text').innerText = num1+num2;
}
function sub() {
  let num1 = document.getElementById('num1').value *1;
  let num2 = document.getElementById('num2').value *1;
  let userinput = document.getElementById('text').innerText = num1-num2;
}
function multi() {
  let num1 = document.getElementById('num1').value *1;
  let num2 = document.getElementById('num2').value *1;
  let userinput = document.getElementById('text').innerText = num1*num2;
}
function div() {
  let num1 = document.getElementById('num1').value *1;
  let num2 = document.getElementById('num2').value *1;
  let userinput = document.getElementById('text').innerText = num1/num2;
}