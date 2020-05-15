const accordion = (id) => {

    const panel = document.querySelectorAll('.panel'),
        collapseIn = document.querySelectorAll('.collapse');

        for(let i = 0; i < panel.length; i++) {
            panel[i].addEventListener('click', () => {
                
                for(let j = 0; j < collapseIn.length; j++) {
                    collapseIn[j].classList.remove('show');
                }
                collapseIn[i].classList.toggle('show');
            });
        }
        collapseIn[0].classList.add('show');
        collapseIn[4].classList.add('show'); 
};


export default accordion;