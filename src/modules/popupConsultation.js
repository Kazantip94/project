const popupConsultation = () => {
    const consultationBtn = document.querySelector('.consultation-btn'),
        popupConsultation = document.querySelector('.popup-consultation'),
        message = document.querySelector('.message'),
        popUp = document.querySelector('.popup-consultation');

        consultationBtn.addEventListener('click', () => {  
            event.preventDefault();
                if(message.value !== ''){
                    popupConsultation.style.display = 'block';
                    popUp.classList.add('modal-form');  
                }
    });
};

export default popupConsultation;