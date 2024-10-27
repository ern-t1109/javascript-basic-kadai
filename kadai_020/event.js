const Btn = document.getElementById('btn');

const text2 = document.getElementById('text2');
text2.style.display = 'none'; // 初期表示非表示

Btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.style.display = 'none';
    text2.style.display = 'block'; //クリック後に表示
});
