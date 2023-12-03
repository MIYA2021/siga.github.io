const fallingObjectContainer = document.getElementById('falling-object-container');
const rotateButton = document.getElementById('rotate-button');
const dropButton = document.getElementById('drop-button');
let rotation = 0;
let fallingObject = null;

function createFallingObject() {
  // 画面上に既にオブジェクトがあれば生成しない
  if (fallingObject) {
    return;
  }

  fallingObject = document.createElement('div');
  fallingObject.className = 'falling-object';

  // 新しい画像を表示するための img 要素を作成
  const fallingObjectImage = document.createElement('img');
  fallingObjectImage.src = 'https://github.com/MIYA2021/siga.github.io/blob/main/new-object.png?raw=true'; // 新しい画像のファイルパス
  fallingObjectImage.alt = 'falling object';
  fallingObject.appendChild(fallingObjectImage);

  fallingObjectContainer.appendChild(fallingObject);

  fallingObject.addEventListener('animationend', () => {
    // アニメーションが終了したら、現在の物を削除
    fallingObjectContainer.removeChild(fallingObject);
    fallingObject = null;
  });

  return fallingObject;
}

// 初期物の作成
createFallingObject();

rotateButton.addEventListener('click', () => {
  // ボタンで回転
  if (fallingObject) {
    rotation += 15;
    fallingObject.style.transform = `rotate(${rotation}deg)`;
  }
});

dropButton.addEventListener('click', () => {
  // ボタンで落とす
  if (fallingObject) {
    fallingObject.style.animation = 'fall 2s linear forwards';
    // 新しいオブジェクトを作成
    createFallingObject();
  }
});

document.addEventListener('dblclick', () => {
  // ダブルクリックでアニメーションをリセット
  if (fallingObject) {
    fallingObject.style.animation = '';
  }
});

document.addEventListener('touchstart', (e) => {
  if (fallingObject) {
    // タッチ開始時にオブジェクトの位置を設定
    const touchY = e.touches[0].clientY;
    fallingObject.style.top = `${touchY}px`;
  }
});

document.addEventListener('touchmove', (e) => {
  if (fallingObject) {
    // タッチ中にオブジェクトの位置を更新
    const touchY = e.touches[0].clientY;
    fallingObject.style.top = `${touchY}px`;
  }
});

document.addEventListener('touchend', () => {
  // ボタンで落とす
  if (fallingObject) {
    fallingObject.style.animation = 'fall 2s linear forwards';
    // 新しいオブジェクトを作成
    createFallingObject();
  }
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
