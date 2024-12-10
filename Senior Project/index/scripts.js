document.addEventListener('DOMContentLoaded', function() {
    const lightswitch = document.getElementsByClassName('lightswitch')[0];
    const shade = document.getElementsByClassName('shade')[0];
    const click = new Audio('switch.mp3');
    const logo = document.getElementsByClassName('logo')[0];
    const logoLetters = document.getElementsByClassName('logo-letters')[0];
    const portfolio = document.getElementsByClassName('header-portfolio')[0];
    const contactMe = document.getElementsByClassName('header-contact-me')[0];
    const media = document.getElementsByClassName('header-media')[0];
    const portrait = document.getElementsByClassName('portrait')[0];
    const paragraph0 = document.getElementsByClassName('zero')[0];
    const paragraph1 = document.getElementsByClassName('one')[0];
    const paragraph2 = document.getElementsByClassName('two')[0];
    const paragraph3 = document.getElementsByClassName('three')[0];
    const paragraph4 = document.getElementsByClassName('four')[0];
    const paragraph5 = document.getElementsByClassName('five')[0];
    const paragraph6 = document.getElementsByClassName('six')[0];
    const paragraph7 = document.getElementsByClassName('seven')[0];
    const paragraph8 = document.getElementsByClassName('eight')[0];
    const paragraph9 = document.getElementsByClassName('nine')[0];

    const footerLocation = document.getElementsByClassName('location-link')[0];
    const footerContactMe = document.getElementsByClassName('footer-contact-me')[0];
    const footerPortfolio = document.getElementsByClassName('footer-portfolio')[0];
    const footerLinkedIn = document.getElementsByClassName('linkedin-link')[0];
    const footerYouTube = document.getElementsByClassName('youtube-link')[0];
    const footerGithub = document.getElementsByClassName('github-link')[0];
    const footerMedia = document.getElementsByClassName('footer-media')[0];
    const footerHome = document.getElementsByClassName('footer-home')[0];

    const textShadowArray = [logo, portfolio, contactMe, media]
    const colorArray = [logoLetters, portfolio, contactMe, media]
    const paragraphTextShadowArray = [paragraph0, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8, paragraph9];
    const paragraphColorArray = [paragraph0, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8, paragraph9];
    const colorCodeArray = ["0 0 7px #fff, 0 0 10px #fff, 0 0 21px #e30303, 0 0 42px #e30303, 0 0 82px #e30303, 0 0 92px #e30303, 0 0 102px #e30303, 0 0 151px #e30303", 
                            "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #ff8600, 0 0 42px #ff8600, 0 0 82px #ff8600, 0 0 92px #ff8600, 0 0 102px #ff8600, 0 0 151px #ff8600",
                            "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fffe37, 0 0 42px #fffe37, 0 0 82px #fffe37, 0 0 92px #fffe37, 0 0 102px #fffe37, 0 0 151px #fffe37",
                            "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #01fe01, 0 0 42px #01fe01, 0 0 82px #01fe01, 0 0 92px #01fe01, 0 0 102px #01fe01, 0 0 151px #01fe01",
                            "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #3500ff, 0 0 42px #3500ff, 0 0 82px #3500ff, 0 0 92px #3500ff, 0 0 102px #3500ff, 0 0 151px #3500ff",
                            "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #00fdfd, 0 0 42px #00fdfd, 0 0 82px #00fdfd, 0 0 92px #00fdfd, 0 0 102px #00fdfd, 0 0 151px #00fdfd",
                            "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #e30303, 0 0 42px #e30303, 0 0 82px #e30303, 0 0 92px #e30303, 0 0 102px #e30303, 0 0 151px #e30303", 
                            "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #ff8600, 0 0 42px #ff8600, 0 0 82px #ff8600, 0 0 92px #ff8600, 0 0 102px #ff8600, 0 0 151px #ff8600"];
    const footerArray = [footerLocation, footerContactMe, footerPortfolio, footerLinkedIn, footerYouTube, footerGithub, footerMedia, footerHome];

lightswitch.addEventListener('click', function() {
    let delay = 500;
    click.play();
    lightswitch.style.display = 'none';
    shade.style.display = 'none';
    
    for(let i = 0; i < textShadowArray.length; i++) {
        setTimeout(function() {
            textShadowArray[i].style.textShadow = "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #e30303, 0 0 42px #e30303, 0 0 82px #e30303, 0 0 92px #e30303, 0 0 102px #e30303, 0 0 151px #e30303";
            colorArray[i].style.color = "#fff";
        }, delay)
        delay = delay + 500;
    }
    
    setTimeout(function() {
        portrait.style.boxShadow = "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #00fdfd, 0 0 42px #00fdfd, 0 0 82px #00fdfd, 0 0 92px #00fdfd";
        portrait.style.border = "5px solid #00fdfd";
        portrait.style.opacity = '1';
    }, delay)
    delay = delay + 500;

    for(let i = 0; i <= paragraphTextShadowArray.length - 1; i++) {
        setTimeout(function() {
            paragraphTextShadowArray[i].style.textShadow = "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #ceff03, 0 0 42px #ceff03, 0 0 82px #ceff03, 0 0 92px #ceff03, 0 0 102px #ceff03, 0 0 151px #ceff03";
            paragraphColorArray[i].style.color = "#fff";
        }, delay)
        delay = delay + 250;
    }
    
    for(let i = 0; i <= footerArray.length - 1; i++) {
        setTimeout(function() {
            footerArray[i].style.textShadow = colorCodeArray[i];
            footerArray[i].style.color = "#fff";
        }, delay)
        delay = delay + 250;
    }
})
})