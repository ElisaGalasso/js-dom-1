const firstImgEl = document.querySelector ('img')

const buttonEl = document.querySelector ('button')
/*buttonEl.addEventListener('click', function(){
    firstImgEl.src = './img/yellow_lamp.png'
})*/

buttonEl.addEventListener ('click', function(){
    if (firstImgEl.src.includes('white_lamp')) {
        firstImgEl.src =('./img/yellow_lamp.png')
        buttonEl.textContent = ('Spegni')
    } else {
        firstImgEl.src = ('./img/white_lamp.png')
        buttonEl.textContent = ('Accendi')
    }
})