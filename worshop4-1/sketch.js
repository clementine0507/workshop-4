let input;
let submitButton;
let greeting;
let listInputs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput();
  input.position(100, 100);
  submitButton = createButton('submit');
  submitButton.position(input.x + input.width, input.y);
  submitButton.mousePressed(submitInput);
  greeting = createElement('h2', 'Please write your question.');
  greeting.style('color', 'black');
  greeting.position(input.x, input.y - 50);
}

function submitInput() {
  let userInput = input.value();
  input.value(''); 
  listInputs.push(userInput);
  if (listInputs.length > 10) {
    listInputs.shift();
  }
}

function draw() {
  background(220);
  for (let x = 0; x < listInputs.length; x++) {
    text(listInputs[x], 20, 180 + x * 20);
  }
}
