$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
})
// typing animation script
var typed = new Typed(".typing", {
    strings: ["Transporter,", "C'est Notre", "Métier"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true
});

const allCross = document.querySelectorAll('.visible-pannel img');
console.log(allCross);

allCross.forEach(element => {

    element.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];


        // console.log(this.src);
        if(this.src.includes('R')){
            this.src = 'OIP.gif';
            gsap.to(currentChoice, {duration: 0.2, height: height + 40, opacity: 1, padding: '20px 15px'})
        } else if (this.src.includes('OIP')){
            this.src = 'R.gif';
            gsap.to(currentChoice, {duration: 0.2, height: 0, opacity: 0, padding: '0px 15px'})
        }

    })
})
