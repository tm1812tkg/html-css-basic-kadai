const btn = document.getElementById('btn');

const textChange = document.getElementById('text');

btn.addEventListener('mousedown',() => {
  textChange.textContent = 'ボタンをクリックしました';
}
);
