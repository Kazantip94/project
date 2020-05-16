const popupCheck = () => {
    const checkBtn = document.querySelector('.check-btn'),
    popUpCheck = document.querySelector('.popup-check');

    checkBtn.addEventListener('click', () => {
        popUpCheck.style.display = 'block';
    });
};

export default popupCheck;