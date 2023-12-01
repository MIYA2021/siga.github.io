const fallingObjectContainer = document.getElementById('falling-object-container');
const rotateButton = document.getElementById('rotate-button');
const dropButton = document.getElementById('drop-button');
let rotation = 0;

function createFallingObject() {
  const fallingObject = document.createElement('div');
  fallingObject.className = 'falling-object';
  fallingObjectContainer.appendChild(fallingObject);

  fallingObject.addEventListener('animationend', () => {
    // アニメーションが終了したら、次の物を作成
    createFallingObject();
    // 現在の物を削除
    fallingObjectContainer.removeChild(fallingObject);
  });

  return fallingObject;
}

createFallingObject(); // 初期物の作成

rotateButton.addEventListener('click', () => {
  // ボタンで回転
  rotation += 15;
  fallingObjectContainer.lastChild.style.transform = `rotate(${rotation}deg)`;
});

dropButton.addEventListener('click', () => {
  // ボタンで落とす
  fallingObjectContainer.lastChild.style.animation = 'fall 2s linear forwards';
});

document.addEventListener('dblclick', () => {
  // ダブルクリックでアニメーションをリセット
  fallingObjectContainer.lastChild.style.animation = '';
});

document.addEventListener('touchstart', (e) => {
  const touchY = e.touches[0].clientY;
  fallingObjectContainer.lastChild.style.top = `${touchY}px`;
});

document.addEventListener('touchmove', (e) => {
  const touchY = e.touches[0].clientY;
  fallingObjectContainer.lastChild.style.top = `${touchY}px`;
});

document.addEventListener('touchend', () => {
  fallingObjectContainer.lastChild.style.animation = 'fall 2s linear forwards';
});

rotateButton.addEventListener('touchstart', (e) => {
  e.stopPropagation(); // ボタンでのタッチイベント伝播を防ぐ
});

dropButton.addEventListener('touchstart', (e) => {
  e.stopPropagation(); // ボタンでのタッチイベント伝播を防ぐ
});

dropButton.addEventListener('dblclick', (e) => {
  e.preventDefault(); // ダブルクリックでのデフォルトの動作を防ぐ
});