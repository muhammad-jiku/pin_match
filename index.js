document.getElementById('generate-btn').addEventListener('click', function () {
  function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length === 4) {
      return pin;
    } else {
      console.log('3 digit pin', pin);
      return getPin();
    }
  }

  function generatePin() {
    const pin = getPin();
    document.getElementById('form-control').value = pin;
  }
  generatePin();
});

document.getElementById('key-pad').addEventListener('click', function (event) {
  const number = event.target.innerText;
  const box = document.getElementById('input-box');
  if (isNaN(number)) {
    if (number === 'C') {
      box.value = '';
    }
  } else {
    const previousNumber = box.value;
    const newNumber = previousNumber + number;
    box.value = newNumber;
  }
});

document.getElementById('notify-success').style.display = 'none';
document.getElementById('notify-failed').style.display = 'none';

document.getElementById('submit-btn').addEventListener('click', function () {
  if (
    document.getElementById('input-box').value ===
    document.getElementById('form-control').value
  ) {
    document.getElementById('notify-success').style.display = 'block';
    document.getElementById('notify-failed').style.display = 'none';
  } else {
    document.getElementById('notify-failed').style.display = 'block';
    document.getElementById('notify-success').style.display = 'none';
  }
});
