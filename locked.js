const button = document.getElementById('enter')
const place = document.querySelector('.input')


button.addEventListener('click', () => {
    console.log("CLICK")
    place.placeholder = 'locked'
})