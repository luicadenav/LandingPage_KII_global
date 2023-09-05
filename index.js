
document.addEventListener("DOMContentLoaded", function(event) { 
    const pulseButton = document.getElementById('floating-btn');
    pulseButton.classList.add('floating-btn');

console.log("holita1");


    const firstSection = document.querySelector('#first-Section');
    const secondSection = document.querySelector('#second-section');
    const thirdSection = document.querySelector('#third-section');
    const fourthSection = document.querySelector('#fourth-section');
    const initalBtnStyles={ ...pulseButton.style};


    pulseButton.addEventListener('click',()=>{
        console.log(window.location.hash);

        if (window.location.hash === '#first-Section') {
            console.log('paseporaca');
            const section = document.querySelector('#first-Section');
            section.scrollIntoView({ behavior: 'smooth' });
        }       
    });


    window.addEventListener('scroll', () => {
        const firtsTop = firstSection.offsetTop;
        const secondTop = secondSection.offsetTop;
        const thirdTop = thirdSection.offsetTop;
        const fourthTop = fourthSection.offsetTop;
        const myScrollTop = document.body.scrollTop;
        const pulsebtnTop = pulseButton.offsetTop+myScrollTop;

        const btnSecondStyles={
            backgroundColor: '#00f0ff',
            boxShadow: '0 0 0 0 #00f0ff',
            border: '2px solid #00f0ff',
            transform: 'rotate(180deg)'
            
        }
        const btnThirdStyles={
            backgroundColor: '#cd3232',
            boxShadow: '0 0 0 0 #cd3232',
            border: '2px solid #cd3232',

        }
        const btnFourthStyles={
            backgroundColor: 'var(--extra-color)',
            boxShadow: '0 0 0 0 var(--extra-color)',
            border: '2px solid var(--extra-color)',
        }

    
        

        if( firtsTop <= pulsebtnTop &&  pulsebtnTop< secondTop )
        {
            Object.assign(pulseButton.style, initalBtnStyles);

        } else if(secondTop <= pulsebtnTop &&  pulsebtnTop< thirdTop)
        {
            console.log("estoy en secondSection");
            Object.assign(pulseButton.style, btnSecondStyles);

        }else if(thirdTop <= pulsebtnTop &&  pulsebtnTop< fourthTop)
        {
            console.log("estoy en thirdSection");
            Object.assign(pulseButton.style, btnThirdStyles);

        }else {
            console.log("estoy en fourthSection");
            Object.assign(pulseButton.style, btnFourthStyles);
        }
    });

});
