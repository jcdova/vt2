// Excercise Button Variables
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const output = document.getElementById('output');
const output2 = document.getElementById('output2');

// Code for Excercise button
// const array1 = [
//   '15 Regular Squats',
//   '20 Pushups',
//   '10 Squats with dumbells',
//   '10 Curls with bar',
//   '10 Hammer Curls',
//   '10 Overhead Tricep Extensions',
//   '10 Lunges with bar',
//   '15 Jumping Jacks with Weights',
//   '20 Straight Punches',
//   '20 Uppercuts',
//   '12 Russian Twists with Weight',
//   '10 Tricep Kick Backs',
//   '8 Side to Side Push Ups',
//   '20 Alt Hooks with Dumbells',
//   'Straight Punches with Dumbells',
//   '15 Shoulder Press with Dumbells',
//   '15 Shoulder Flies with Dumbells',
//   '6 Surrenders with Dumbells',
//   '15 Alternating renegade row',
//   '10 Dumbell squat',
//   '10 Side lateral raise with Dumbells',
//   '10 Bent-over row',
//   '10 Bent over dumbell row with palms in',
//   '8 Squats with bar',
//   '8 Biceps curl to shoulder press',
//   '8 Dumbell Wood Chop',
//   '8 Dumbell squat to shoulder press',
//   '10 Dumbell Reverse Lunge',
//   '10 Dumbell Front raises',
//   '20 Standing dumbell calf raises',
//   '10 Shoulder Press with Front Rotation',
//   '10 Dumbell Floor / bench Fly',
//   '8 Skull Crusher on floor / bench',
//   '15 Dumbell Straight Arms Crunch',
//   '10 Dumbell Bar Grip Sumo Squat',
//   '15 Dumbell Seated Calf Raises',
//   '10 Dumbell Upright Row',
//   '10 Overhead Front Press with Bar',
//   '10 Upright Row with Bar',
//   '10 Flies on Bench',
//   '10 Bench Press',
// ];
const array1 = [
  '8 Squat Jumps',
  '30 Quick Feet',
  '10 Regular Squats',
  '20 Pushups',
  '4 Burpees with Pushup',
  '10 Candlesticks',
  '10 Low to High Plank',
  '10 Ski Jumps',
  '30 Second Low Plank Hold',
  '10 Alt Low Plank with Punches',
  '10 Alt High Plank with Punches',
  '10 Heismans',
  '10 Hooks',
  '15 Half Burpees',
  '10 Drop Squats',
  '10 Curls',
  '10 Hammer Curls',
  '10 Overhead Tricep Extensions',
  '10 Lunges',
  '10 Jumping Lunges',
  '20 Jumping Jacks',
  '15 Jumping Jacks with Weights',
  '20 Straight Punches',
  '20 Uppercuts',
  '2 Ladder Jumps up and down',
  '15 Speed Skater Toe Taps',
  '10 V-Sit Alt Crossbody Toe Touch',
  '10 Reverse Crunches',
  '10 Alt V-Sit Heal Taps',
  '12 Russian Twists with Kettle Bell',
  '10 Alt Front / Reverse Lunges',
  '10 Tricep Kick Backs',
  '8 Side to Side Push Ups',
  '12 V-Sit Jab Cross with Weight',
  '12 Alt Squat to Shin Kick',
  '12 Alt Lunge to Shin Kicks',
  '6 Round House Kicks each side',
  '6 Side Kicks each side',
  '5 Alt Elbow Strikes',
  '6 Front Kicks each side',
  '20 Jab Cross / Hook Hook',
  '10 (Jab Cross /Hook Hook / 2 Uppercuts)',
  '10 (Jab Jab / Hook Hook / Elbow)',
  '6 (Round House / LR Shin Kicks / LR Hooks)',
  'LR Uppercut / Cross / Hook',
  '20 Alt Hooks',
  '15 Speed Bag Punches',
  '10 Speed Punches each side',
  '10 Alt Knee Kicks',
  '15 Shoulder Press with Dumbells',
  '15 Shoulder Flies with Dumbells',
  '6 Surrenders',
  '4 Inch Worm',
  '20 Mountain Climbers',
  '15 Extreme Mountain Climbers',
  '6 Rotational Jump Squats',
  '6 Jumping Shin Kicks',
  '5 Gorilla Jumps',
  '3 Quick Feet and Sprawls',
  '15 Shoulder Taps',
  '15 Tricep Pushups',
  '10 Kettle Bells Swings',
  '8 Kettle Bell Goblet Squat',
  '8 Kettle Bell Clean & Press each side',
  '10 Kettle Bell Sumo Squat',
  '12 Kettle Bell Upright Row',
  '8 Kettle Bell Lunge Pass Through',
  '12 Kettle Bell High Plank Pull Through',
];

const array2 = [
  'High Knees',
  '15 Pushups',
  'Butt Kickers',
  '20 Mountain Climbers',
  '15 Extreme Mountain Climbers',
  'Squats',
  '30 High Plank Jacks',
  'Jumping Jacks',
  'Wall Sits with Straight Punches',
  'High Plank Shoulder Taps',
  'Table Top Shoulder Taps',
  'Russian Twists',
  'Crunches',
  'Wall Taps',
  'Bear Crawl',
  'Overhead High Knees with Bar',
  'Tricep Pushups',
  'Straight Punches',
  'Hooks',
  'Uppercuts',
  'Frog Jumps',
  'Knee to elbows',
  'Back Kicks',
  'Back Kicks with Punch',
  'Drop Squats',
  'Log Jumps',
  'Criss Cross Jacks',
  'Quick Feet and Sprawls',
  'Rotational Jump Squats',
  'Quick Feet',
  'Candlesticks',
  'Jump Squats',
  'Heismans',
  'Gorilla Jumps',
  'Half Burpees',
  'Kettle Bells Swings',
  'Kettle Bell Goblet Squat',
  'Kettle Bell Clean & Press each side',
  'Kettle Bell Sumo Squat',
  'Kettle Bell Upright Row',
  'Kettle Bell Lunge Pass Through',
  'Kettle Bell High Plank Pull Through',
];

function getRandomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

button1.addEventListener('click', () => {
  const randomItem = getRandomItemFromArray(array1);
  const randomItem2 = getRandomItemFromArray(array1);
  const randomThirty = getRandomItemFromArray(array2);
  output.textContent = `${randomItem}`;

  setTimeout(() => {
    output2.innerText = `${randomItem2}`;
  }, 12000);

  setTimeout(() => {
    clearExcercise();
  }, 165000);

  setTimeout(() => {
    output2.innerText = `${randomThirty}`;
  }, 180000);
});

var count = 0;
var round = document.getElementById('round');
function countRounds() {
  count++;
  round.innerHTML = count;
}

button2.addEventListener('click', () => {
  const randomItem = getRandomItemFromArray(array2);
  output2.textContent = `${randomItem}`;
});

// script for playing sound
document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('startBtn');
  const thirtySec = document.getElementById('thirty');
  const timesUp = document.getElementById('timeComplete');

  playButton.addEventListener('click', function () {
    timesUp.play();
    const delayInSeconds = 150;
    const delayInSeconds2 = 180;
    const delayInSeconds3 = 210;

    // Delay the sound playback
    setTimeout(function () {
      thirtySec.play();
      thirtySecText.innerText = `${'30 SECONDS LEFT'}`;
    }, delayInSeconds * 1000); // Convert delay to milliseconds

    setTimeout(function () {
      timesUp.play();
      thirtySecText.innerText = `${''}`;
    }, delayInSeconds2 * 1000); // Convert delay to milliseconds

    setTimeout(function () {
      timesUp.play();
    }, delayInSeconds3 * 1000); // Convert delay to milliseconds
  });
});

// script for timer
const timeDisplay = document.querySelector('.time-display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const intervalInput = document.getElementById('intervalInput');

let timerInterval;
let remainingTime = 0;

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsDisplay = seconds % 60;
  timeDisplay.textContent = `${minutes < 10 ? '' : ''}${minutes}:${
    secondsDisplay < 10 ? '0' : ''
  }${secondsDisplay}`;
}

function startTimer() {
  const intervalSeconds = parseInt(210, 10);
  clearExcercise();
  if (isNaN(intervalSeconds) || intervalSeconds <= 0) {
    return;
  }

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  remainingTime = intervalSeconds;
  updateDisplay(remainingTime);

  timerInterval = setInterval(() => {
    remainingTime--;
    updateDisplay(remainingTime);
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  updateDisplay(0);
}

function clearExcercise() {
  output.textContent = `${''}`;
  output2.innerText = `${''}`;
}

function clearExcerciseBtn() {
  output.textContent = `${''}`;
  output2.innerText = `${''}`;
  thirtySecText.innerText = `${''}`;
  stopTimer();
  count = 0;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
clearBtn.addEventListener('click', clearExcerciseBtn);
