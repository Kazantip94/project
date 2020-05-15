const accordion = (id) => {

    const panel = document.querySelectorAll('.panel'),
        collapseIn = document.querySelectorAll('.collapse'),
        constructBtn = document.querySelectorAll('.construct-btn');

        for(let i = 0; i < panel.length; i++) {
            panel[i].addEventListener('click', () => {
                
                for(let j = 0; j < collapseIn.length; j++) {
                    collapseIn[j].classList.remove('show');
                }
                collapseIn[i].classList.toggle('show');
            });
            
        }
        for(let k = 0; k < constructBtn.length; k++) {
            constructBtn[k].addEventListener('click', () => {
                
            });
        }


        collapseIn[0].classList.add('show');
        collapseIn[4].classList.add('show'); 
};


export default accordion;