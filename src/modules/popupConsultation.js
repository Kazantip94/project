const popupConsultation = () => {
    const consultationBtn = document.querySelector('.consultation-btn'),
        popupConsultation = document.querySelector('.popup-consultation'),
        message = document.querySelector('.message'),
        directorForm = document.querySelector('.director-form');

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body) 
            });
    
          };

        consultationBtn.addEventListener('click', (event) => {
                if(message.value !== ''){
                    event.preventDefault();
                    popupConsultation.style.display = 'block';
                    const formData = new FormData(directorForm);
                    let body = {};

                    formData.forEach((val, key) => {
                        body[key] = val;
                });
                 postData(body);
                
                }
    });
};

export default popupConsultation;