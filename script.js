const fallingObjectContainer = document.getElementById('falling-object-container');
const rotateButton = document.getElementById('rotate-button');
const dropButton = document.getElementById('drop-button');
let rotation = 0;

function createFallingObject() {
  const fallingObject = document.createElement('div');
  fallingObject.className = 'falling-object';

  // 新しい画像を表示するための img 要素を作成
  const fallingObjectImage = document.createElement('img');
  fallingObjectImage.src = 'https://github.com/MIYA2021/siga.github.io/blob/main/new-object.png?raw=true'; // 新しい画像のファイルパス
  fallingObjectImage.alt = 'falling object';
  fallingObject.appendChild(fallingObjectImage);

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
  const fallingObject = createFallingObject(); // 修正：新しいオブジェクトを作成
  fallingObject.style.animation = 'fall 2s linear forwards';
  fallingObject.style.zIndex = '1'; // 土台が一番前に来るように設定
});

document.addEventListener('dblclick', () => {
  // ダブルクリックでアニメーションをリセット
  const fallingObject = fallingObjectContainer.lastChild;
  fallingObject.style.animation = '';
  fallingObject.style.zIndex = '0'; // 元のz-indexに戻す
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
  // ボタンで落とす
  const fallingObject = createFallingObject(); // 修正：新しいオブジェクトを作成
  fallingObject.style.animation = 'fall 2s linear forwards';
  fallingObject.style.zIndex = '1'; // 土台が一番前に来るように設定
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
