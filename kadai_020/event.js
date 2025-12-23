const btn = document.getElementById('btn');


  btn.addEventListener('mousedown',() => {
    const textChange = document.getElementById('text');
    textChange.innerHTML = 'ボタンをクリックしました';
  }
);