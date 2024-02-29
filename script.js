const flipCard = document.querySelectorAll('.network-info');
let ogTest =''


const doStuff = function(e) {
    let targetCard = e.target.closest('div');
    targetCard.classList.toggle('hover-target')

    let test = e.target.closest('div').querySelector('span');
    ogTest = test.textContent;
    test.textContent = 'More Details'


}

const fixStuff = function(e) {
   let targetCard = e.target.closest('div');
    targetCard.classList.toggle('hover-target')
    
    let test = e.target.closest('div').querySelector('span');
    test.textContent=ogTest

}


flipCard.forEach((card) => {card.addEventListener('mouseover', doStuff)})
flipCard.forEach((card) => {card.addEventListener('mouseout', fixStuff)})