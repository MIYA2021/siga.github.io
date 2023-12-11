const fallingObjectContainer = document.getElementById('falling-object-container');
const rotateButton = document.getElementById('rotate-button');
const dropButton = document.getElementById('drop-button');
let rotation = 0;

function createFallingObject() {
  const fallingObject = document.createElement('div');
  fallingObject.className = 'falling-object';

  const fallingObjectImage = document.createElement('img');
  fallingObjectImage.src = 'https://github.com/MIYA2021/siga.github.io/blob/main/new-object.png?raw=true';
  fallingObjectImage.alt = 'falling object';
  fallingObject.appendChild(fallingObjectImage);

  fallingObjectContainer.appendChild(fallingObject);

  fallingObject.addEventListener('animationend', () => {
    fallingObjectContainer.removeChild(fallingObject);
  });

  return fallingObject;
}

createFallingObject();

rotateButton.addEventListener('click', () => {
  const fallingObject = fallingObjectContainer.lastChild;
  if (fallingObject) {
    rotation += 15;
    fallingObject.style.transform = `rotate(${rotation}deg)`;
  }
});

dropButton.addEventListener('click', () => {
  const fallingObject = createFallingObject();
  try {
    fallingObject.style.animation = 'fall 2s linear forwards';
  } catch (error) {
    console.error("Error in dropButton click:", error);
  }
});

document.addEventListener('dblclick', () => {
  const fallingObject = fallingObjectContainer.lastChild;
  if (fallingObject) {
    fallingObject.style.animation = '';
  }
});

document.addEventListener('touchstart', (e) => {
  const touchY = e.touches[0].clientY;
  const fallingObject = fallingObjectContainer.lastChild;
  if (fallingObject) {
    fallingObject.style.top = `${touchY}px`;
  }
});

document.addEventListener('touchmove', (e) => {
  const touchY = e.touches[0].clientY;
  const fallingObject = fallingObjectContainer.lastChild;
  if (fallingObject) {
    fallingObject.style.top = `${touchY}px`;
  }
});

document.addEventListener
