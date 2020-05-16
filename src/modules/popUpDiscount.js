const popUpDiscount = () => {
    const visibleBlock = document.querySelector('.visible-sm-block'),
        hiddenCard = document.querySelectorAll('.hidden'),
        addSentenceBtn = document.querySelector('.add-sentence-btn'),
        discountBtn = document.querySelectorAll('.discount-btn'),
        popupDiscount = document.querySelector('.popup-discount');

        addSentenceBtn.addEventListener('click', () => {

            for(let i = 0; i < hiddenCard.length; i++){
                addSentenceBtn.classList.add('hidden');
                visibleBlock.classList.remove('visible-sm-block');
                hiddenCard[i].classList.remove('hidden');
            }    
        });
        const frameDiscount = () => {
            popupDiscount.style.display = 'block';
        };
    
        discountBtn.forEach((elem) => elem.addEventListener('click', frameDiscount));
};

export default popUpDiscount;