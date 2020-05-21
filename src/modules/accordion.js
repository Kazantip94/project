const accordion = () => {

    const 
        // panelGroup = document.querySelectorAll('.panel-group'),
        collapseIn = document.querySelectorAll('.collapse'),
        panelHeading = document.querySelectorAll('.panel-heading'),
        constructBtn = document.querySelectorAll('.construct-btn');
        
        
        const accordionButton = (index) => {
            for(let i = 0; i < collapseIn.length; i++) {
                if(index === i) {
                    collapseIn[i].classList.remove('show'); 
                    i++;
                    collapseIn[i].classList.add('show');
                }
            }    
        };
        const toggleAccordionContent = (index) => {
            for(let i = 0; i < collapseIn.length; i++) {
                if(index === i) {
                    collapseIn[i].classList.add('show');
    
                }else{
                    collapseIn[i].classList.remove('show');
                }
            }
        };

        for(let k = 0; k < panelHeading.length; k++){
            panelHeading[k].addEventListener('click', (event) =>{
                let target = event.target;
                
                target = target.closest('.panel-heading');
                
                if(target) {
                    panelHeading.forEach((item, i) => {
                        if(item === target) {
                            toggleAccordionContent(i);
                        }
                    });
                }
            });
        }
        
        for(let j = 0; j < constructBtn.length; j++) {
            constructBtn[j].addEventListener('click', (event) => {
                let target = event.target;
                
                target = target.closest('.construct-btn');
                
                if(target) {
                    constructBtn.forEach((item, i) => {
                        if(item === target) {
                            accordionButton(i);
                        }
                    });
                }

            });
        }
 
        collapseIn[0].classList.add('show');
        collapseIn[4].classList.add('show'); 
};


export default accordion;