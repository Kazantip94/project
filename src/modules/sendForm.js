const sendForm = () => {
    const errorMessage = 'Ошибка',
        loadMessage = 'Отправка',
        successMessage = 'Отправлено';

    const form = document.querySelectorAll('form'),
        phone = document.querySelectorAll('.phone-user'),
        name = document.querySelectorAll('.form-name'),
        calcResult = document.getElementById('calc-result'),
        onoffSwitchOne = document.getElementById('myonoffswitch'),
        onoffSwitchTwo = document.getElementById('myonoffswitch-two'),
        calcItem = document.getElementById('calc-item'),
        controlOne = document.getElementById('control-one'),
        controlTwo = document.getElementById('control-two'),
        controlThree = document.getElementById('control-three'),
        message = document.querySelector('.message'),
        controlFour = document.getElementById('control-four');

        

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color:#ccc;';

    const postData = (obj) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj) 
        });

      };

    form.forEach(item => {
        //Валидация формы
        item.addEventListener('input', function() {
            
            for(let i = 0; i < phone.length; i++) {
                if(phone !== i){
                    phone[i].value = phone[i].value.replace(/[^0-9+]/, '');
                    
                }else{
                    console.log('Введите цыфри: ');
                }
            }
            for(let j = 0; j < name.length; j++) {
                if(name !== j){
                    name[j].value = name[j].value.replace(/[^А-ЯЁ\s]/i, '');
                }else{
                    console.log('Введите буквы: ');
                }
            }
        });

        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(item);
            let body = {};
            let date = {};
            let formDate = {};
            
                if(item.parentElement.parentNode.parentNode.classList.contains('modal-calc')){
                    
                    date.controlOne = controlOne.value;
                    date.controlTwo = controlTwo.value;
                    date.controlThree = controlThree.value;
                    date.controlFour = controlFour.value;
                    date.calcResult = calcResult.value;
                    date.onoffSwitchOne = onoffSwitchOne.value;
                    date.onoffSwitchTwo = onoffSwitchTwo.value;
                    date.calcItem = calcItem.value;
 
                }
                if(item.parentElement.parentNode.parentNode.classList.contains('modal-form')){
                    formDate.message = message.value;
                }
                formData.forEach((val, key) => {
                    body[key] = val;
                });

                let obj = Object.assign(body, date, formDate);

            postData(obj)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error('status network not 200');
                    }

                    statusMessage.textContent = successMessage;
                    setTimeout(() =>{
                        statusMessage.textContent = '';
                    },3000);
                })
                .catch(() => {
                    statusMessage.textContent = errorMessage;
                    setTimeout(() =>{
                        statusMessage.textContent = '';
                    },3000);
                })
                .finally(() => {
                    item.querySelectorAll('input').forEach(item => item.value = '');
                });

            });
    });
        
};

export default sendForm;