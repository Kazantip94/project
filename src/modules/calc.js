
const calc = () => {
    const accordion = document.getElementById('accordion'),
        calcResult = document.getElementById('calc-result'),
        twoWell = document.getElementById('two-well'),
        onoffSwitchOne = document.getElementById('myonoffswitch'),
        onoffSwitchTwo = document.getElementById('myonoffswitch-two'),
        twoWellBox = document.getElementById('two-well-box'),
        twoWellBoxTwo = document.getElementById('two-well-box-two'),
        calcItem = document.getElementById('calc-item'),
        controlOne = document.getElementById('control-one'),
        controlTwo = document.getElementById('control-two'),
        controlThree = document.getElementById('control-three'),
        controlFour = document.getElementById('control-four');

       
            twoWell.style.display = 'none';
            twoWellBox.style.display = 'none';
            twoWellBoxTwo.style.display = 'none'; 
        // let inps = document.querySelectorAll('select');

        // for(let i = 0; i < inps.length; i++) {
        //     if(inps[i].name && inps[i].accordion === this) {
        //         console.log(inps[i].name, inps[i].value);
        //     }
        // }
        // console.log(inps);
        // Функция подсчета
        const countSum = () => {
            let total = 0,
                swithOne = 0,
                bottom = 0,
                valueControlOne = 0,
                valueControlTwo = 0,
                valueControlThree = 0,
                valueControlFour = 0;
            // Блок тип септика
            if(onoffSwitchOne.checked){
                swithOne += 10000;
                twoWell.style.display = 'none';
                twoWellBox.style.display = 'none';
                twoWellBoxTwo.style.display = 'none';   
            }else{
                swithOne += 15000;
                twoWell.style.display = 'inline-block';
                twoWellBox.style.display = 'inline-block';
                twoWellBoxTwo.style.display = 'inline-block'; 
            }
            //Блок первый колодец
            if(controlOne.value && controlOne.value == 2){
                valueControlOne += (swithOne / 100 )* 20;
            }
            //Блок второй колодец
            if(controlTwo.value && controlTwo.value == 2){
                valueControlTwo += (swithOne / 100 )* 30;
            }else if(controlTwo.value && controlTwo.value == 3){
                valueControlTwo += (swithOne / 100 )* 50;
            }
            //Блок третий колодец
            if(controlThree.value && controlThree.value == 2){
                valueControlThree += (swithOne / 100 )* 20;
            }
            //Блок четвертый колодец
            if(controlFour.value && controlFour.value == 2){
                valueControlFour += (swithOne / 100 )* 30;
            }else if(controlFour.value && controlFour.value == 3){
                valueControlFour += (swithOne / 100 )* 50;
            }
            
            //Блок днище колодца
            if(onoffSwitchTwo.checked && onoffSwitchOne.checked){
                bottom += 1000;
            }else if(onoffSwitchTwo.checked && onoffSwitchOne.checked === false) {
                bottom += 2000;
            }
            //Подсчет результата
            total =  valueControlOne + valueControlTwo + valueControlThree + valueControlFour + swithOne + bottom;
            console.log(total);
            //Вывод результата в input
            
            calcResult.textContent = total;  
        };
        calcItem.addEventListener('input', function () {
                this.value = this.value.replace(/[^0-9\.]/, '');
            });
        
        accordion.addEventListener('change', countSum);
    
};
export default calc;