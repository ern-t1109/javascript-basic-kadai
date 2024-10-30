const text = document.getElementById('text');
const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
  text.textContent = 'ボタンをクリックしました'; // text要素のテキスト内容を直接変更
});
