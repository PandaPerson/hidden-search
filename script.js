const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus()
})

// Definitely needs some work. Unable to actually select search input without *closing* the input selector. 