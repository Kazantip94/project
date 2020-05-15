const popupCall = () => {
    const popUp = document.querySelector('.popup-call'),
        callBtn = document.querySelectorAll('.call-btn');

    const frame = () => {
        popUp.style.display = 'block';
    };

    callBtn.forEach((elem) => elem.addEventListener('click', frame));

    popUp.addEventListener('click', (event) =>{
        let target = event.target;

        if(target.classList.contains('popup-close')) {
            popUp.style.display = 'none';
            popupCall();

        }else{
            target = target.closest('.popup-content');

            if(!target) {
                popUp.style.display = 'none';
                popupCall();
            }
        }
    });
};

export default popupCall;