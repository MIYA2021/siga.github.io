const tower = document.getElementById('tower');
const rotateButton = document.getElementById('rotate-button');
const dropButton = document.getElementById('drop-button');
let rotation = 0;

rotateButton.addEventListener('click', () => {
  rotation += 15;
  tower.style.transform = `rotate(${rotation}deg)`;
});

dropButton.addEventListener('click', () => {
  const image = document.createElement('div');
  image.className = 'image';
  tower.appendChild(image);
  // ゲームのロジックをここに追加
  // 例: スコアの計算、画像同士のバトル処理など
});
