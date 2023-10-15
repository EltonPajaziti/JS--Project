/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*CALCULATE*/
const calculateForm=document.getElementById('calculate-form'),
calculateCm=document.getElementById('calculate-cm'),
calculateKg=document.getElementById('calculate-kg'),
calculateMessage=document.getElementById('calculate-message')
const calculateBMI=(e)=>{
    e.preventDefault()
    //Check if the fields have a value
    if(calculateCm.value==='' || calculateKg==='' ){
        //Add and Remove Color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-green')
        //Show message
        calculateMessage.textContent='Fill in the Height and Weight 👨‍💻 '
        //Remove Message 3 seconds
        setTimeout(()=>{
        calculateMessage.textContent=''},3000)
    }else{
        //BMI FORMULA
        const cm=(calculateCm.value/100)
        const kg=calculateKg.value
        bmi=Math.round(kg/(cm*cm))

        //SHOW YOUR HEALTH STATUS
        if(bmi<0){
            calculateMessage.classList.add('color')
            calculateMessage.textContent=`You write height or weight incorrect 😔`
        }
        else if(bmi<18.5){
            //ADD COLOR AND DISPLAY SETTINGS
            calculateMessage.classList.add('color')
            calculateMessage.textContent=`Your BMI is ${bmi} and you are skinny 😔`
        } else if(bmi<25){
            calculateMessage.classList.add('color')
            calculateMessage.textContent=`Your BMI is ${bmi} and you are healthy 🥳`
        }else if(25<bmi){
            calculateMessage.classList.add('color')
            calculateMessage.textContent=`Your BMI is ${bmi} and you are overweight 😞`
        }
       
//TO CLEAR THE INPUT FIELDS
    calculateCm.value=''
    calculateKg.value=''
    //REMOVE MESSAGE 4 sec
        setTimeout(()=>{
            calculateMessage.textContent=''
        },4000)
    }
}
calculateForm.addEventListener('submit',calculateBMI)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
 // Merr referencën e formës dhe input-it
 const form = document.getElementById("contact-form");
 const input = document.getElementById("contact-user");

 // Ngarko vlerën e ruajtur në Local Storage në input (nëse ekziston)
 input.value = localStorage.getItem("user_email") || "";

 // Shto një ngjarje për dorëzim të formës
 form.addEventListener("submit", function(event) {
     event.preventDefault(); // Parandaloni dorëzimin e formës

     // Merr vlerën e input-it
     const userEmail = input.value;

     // Ruaj vlerën në Local Storage
     localStorage.setItem("user_email", userEmail);

     // Mund të shtoni ndonjë logjikë shtesë këtu për përpunimin e të dhënave

     // Pastro input-in
     input.value = "";

     // Tregoni një konfirmim për përdoruesin ose bëni çfarë është e nevojshme
     alert("Email saved to Local Storage:" + userEmail);
 });