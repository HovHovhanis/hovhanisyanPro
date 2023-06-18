customSelect('select');

const picker = new easepick.create({
    element: document.getElementById('date'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
});

const inputSubscribt = document.querySelector('.subcribe__input');
const label = document.querySelector('.subscribe__label');

inputSubscribt.addEventListener('input', () => {
    if (inputSubscribt.value.trim() !== '') {
        label.classList.add('subscribe__label--top');
    } else {
        label.classList.remove('subscribe__label--top');
    }
})

console.log('HH Project');