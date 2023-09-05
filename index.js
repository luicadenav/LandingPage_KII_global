
document.addEventListener("DOMContentLoaded", function(event) { 
    const pulseButton = document.getElementById('floating-btn');
    pulseButton.classList.add('floating-btn');
    console.log("holita1");

    //elements needed

    const firstSection = document.querySelector('#first-Section');
    const secondSection = document.querySelector('#second-section');
    const thirdSection = document.querySelector('#third-section');
    const fourthSection = document.querySelector('#fourth-section');
    const navList = document.querySelectorAll('.link');
    const initalBtnStyles={ ...pulseButton.style};


    // for scroll to home 

    pulseButton.addEventListener('click',()=>{
            if(pulseButton.getAttribute('toHome') == 'true'){
                firstSection.scrollIntoView({ behavior: 'smooth' }); 
            }else{
                fourthSection.scrollIntoView({ behavior: 'smooth' }); 
            }
            
    });

    
    //For changing properties based on location.

    
    window.addEventListener('scroll', () => {
        const firtsTop = firstSection.offsetTop;
        const secondTop = secondSection.offsetTop;
        const thirdTop = thirdSection.offsetTop;
        const fourthTop = fourthSection.offsetTop;
        const myScrollTop = document.body.scrollTop;
        const pulsebtnTop = pulseButton.offsetTop+myScrollTop;
     
        // fixed Button styles  on each section  constants

        const btnSecondStyles={
            backgroundColor: '#00f0ff',
            boxShadow: '0 0 0 0 #00f0ff',
            border: '2px solid #00f0ff',
            transform: 'rotate(180deg)'
            
        }
        const btnThirdStyles={
            backgroundColor: 'var(--third-color)',
            boxShadow: '0 0 0 0 var(--third-color)',
            border: '2px solid var(--third-color)',

        }
        const btnFourthStyles={
            backgroundColor: 'var(--extra-color)',
            boxShadow: '0 0 0 0 var(--extra-color)',
            border: '2px solid var(--extra-color)',
        }

        // Logic for fixing button style on each section.
        

        if( firtsTop <= pulsebtnTop &&  pulsebtnTop< secondTop ){
            Object.assign(pulseButton.style, initalBtnStyles);
            pulseButton.setAttribute('toHome','false');

            addActive(navList,0);
            /* navList[1].classList.remove('active');
            navList[2].classList.remove('active');
            navList[3].classList.remove('active');
            navList[0].classList.add('active'); */

        } else if(secondTop <= pulsebtnTop &&  pulsebtnTop< thirdTop){
            console.log("estoy en secondSection");
            Object.assign(pulseButton.style, btnSecondStyles);
            addActive(navList,1);

        } else if(thirdTop <= pulsebtnTop &&  pulsebtnTop< fourthTop){
            console.log("estoy en thirdSection");
            Object.assign(pulseButton.style, btnThirdStyles);
            pulseButton.setAttribute('toHome','true');
            addActive(navList,2);
        }else {
            console.log("estoy en fourthSection");
            Object.assign(pulseButton.style, btnFourthStyles);
            pulseButton.setAttribute('toHome','true');
            addActive(navList,3);
        }
        
    });

});

function addActive(list,location) {
    list.forEach((e,i) => {
                if( i == location){
                    e.classList.add('active');
                }else{
                    e.classList.remove('active');
                }
            });
}
