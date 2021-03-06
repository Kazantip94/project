const popupCall = () => {
    const popUpCall = document.querySelector('.popup-call'),
        popUp = document.querySelectorAll('.popup'),
        callBtn = document.querySelectorAll('.call-btn'),
        captureForm = document.querySelectorAll('.capture-form');

    const frame = () => {
        popUpCall.style.display = 'block';
    };

    callBtn.forEach((elem) => elem.addEventListener('click', frame));

    for(let i = 0; i < popUp.length; i++){
        popUp[i].addEventListener('click', (event) =>{
            let target = event.target;
    
            if(target.classList.contains('popup-close')) {
                popUp[i].style.display = 'none'; 
                popUp[i].classList.remove('modal-calc');
                popUp[i].classList.remove('modal-form');
                
                popupCall();
            }else{
                
                target = target.closest('.popup-content');
    
                if(!target) {
                    popUp[i].style.display = 'none';
                    
                    popUp[i].classList.remove('modal-calc');
                    popUp[i].classList.remove('modal-form');
                    popupCall();
                }
            }
        });
    }
};

export default popupCall;