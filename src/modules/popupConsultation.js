const popupConsultation = () => {
    const consultationBtn = document.querySelector('.consultation-btn'),
        popupConsultation = document.querySelector('.popup-consultation');

        consultationBtn.addEventListener('click', () => {
            if(require){
                popupConsultation.style.display = 'block';
            }
    });
};

export default popupConsultation;