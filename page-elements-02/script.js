const menuButton = document.querySelector('.menu-button');
const iMask = document.querySelector('h1');
const navigation = document.querySelector('nav');

console.log(menuButton);

menuButton.addEventListener("mouseover", (element) => {
    iMask.classList.add('hover')
});

menuButton.addEventListener("mouseleave", (element) => {
    iMask.classList.toggle('hover')
})

menuButton.addEventListener("click", (element) => {

    const button = element.currentTarget;
    button.classList.toggle("open");
    navigation.classList.toggle('zoom')

    hamburgerClickHandler(button);
});

const hamburgerClickHandler = (target) => {

    const expanded = target.getAttribute('aria-expanded');
    const topYValue = document.querySelector('.hamburger .top');
    const bottomYValue = document.querySelector('.hamburger .bottom');

    // false is a string
    if (expanded === 'false') {
        target.setAttribute('aria-expanded', 'true');
        // -for mobile devises - set y value of the top and bottom lines
        topYValue.setAttribute('y', 45);
        bottomYValue.setAttribute('y', 45)

    } else {
        target.setAttribute('aria-expanded', false);
        // -for mobile devises - set y value of the top and bottom lines
        topYValue.setAttribute('y', 36);
        bottomYValue.setAttribute('y', 62)
    }
}


// TODO: change from jquery to normal javascript

//add dynamic date for the copyright year
const yearEl = document.querySelector('#year');
//create date object
const date = new Date();
// make yearEL = date object year 
yearEl.textContent = date.getFullYear();


//add the functionality for the skills level display
//the star
const starFull = '&#9733;';
const star = '&#9734;';

//selects all li and add stars
// $('.skills li').each(function () {
//     var numStars = '';
//     var levelStars;
//     var level = $(this).attr('data-level');
//     var skill = $(this).text();
//     //insert the correct amount of stars inside the stars span
//     if (level == 1) {
//         numStars += star;
//     } else if (level == 3) {
//         numStars += star + star + star;
//     } else if (level == 2) {
//         numStars += star + star;
//     } else {
//         numStars = '';
//     }
//     levelStars = skill + '<span class="stars">' + numStars + '</span>';
//     $(this).html(levelStars);
// });

// const allSkills = document.querySelectorAll('.skills li');

// allSkills.forEach(skill => {
//     let numStars = '';
//     let levelStars;

//     // const level = $(this).attr('data-level');
//     const level = skill.getAttribute('data-level');
//     const skillName = skill.textContent();
//     console.log(skillName, 'name');

//     // false is a string
//     // var skill = $(this).text();
// });


// //display stars when clicked
// const skillsList = querySelectorAll('.skills ul');
// console.log(skillsList, 'skills lists');


// $('.skills ul').on('click', function () {
//     $(this).children('li').children('.stars').fadeToggle();
//     //also display stars key
//     $('.star-key').fadeToggle();
// });


// sticky title ///
// TODO: for mobile make titles stick under header and shrink
const aboutTitle = document.querySelector('.about .title');
const skillsTitle = document.querySelector('.skills .title');
const experienceTitle = document.querySelector('.experience .title');

console.log(aboutTitle.parentElement);

// might need to add to individual observer
const options = {
    root: null, // this is the default -- the viewport
    threshold: 1, // 0 - 1, 0 default
    rootMargin: "-260px 0px -0px 0px" // needs px "0px 0px 0px 0px"
}


const observerAbout = new IntersectionObserver((entries, observer) => {

    // entries[0].target.classList.toggle("test", !entries.isIntersecting)

    if (entries[0].isIntersecting) {
        // title is not at the top & on the page
        skillsTitle.classList.remove('test')
        entries[0].target.classList.add('on-page')
        console.log(entries[0].target);

    } else {
        entries[0].target.classList.toggle('test')

    }


}, options);

const observerSkills = new IntersectionObserver((entries, observer) => {

    if (entries[0].isIntersecting) {

        aboutTitle.classList.remove('test')
        // title is not at the top & on the page
        entries[0].target.classList.add('on-page')
        console.log(entries[0].target);

    } else {
        entries[0].target.classList.toggle('test')

    }


    // entries[0].target.classList.toggle("test", !entries[0].isIntersecting)

    console.log(entry.target.parentElement);



}, options);



// observerAbout.observe(aboutTitle);
// observerSkills.observe(skillsTitle);
// observer.observe(experienceTitle);


// observe.observe(aboutWatcher);
// observe.observe(skillsWatcher);



// const aboutObserver = new IntersectionObserver((entries) => {
//     console.log(entries[0]);
//     aboutTitle.classList.toggle('sticking', !entries[0].isIntersecting);
// }, { rootMargin: "-100px 0px 0px 0px" });

// const skillsObserver = new IntersectionObserver((entries) => {

//     aboutTitle.classList.remove('sticking');
//     console.log(entries);
//     skillsTitle.classList.toggle('sticking', !entries[0].isIntersecting);
// }, { rootMargin: "0px 0px 0px 0px" });

// aboutObserver.observe(aboutWatcher)
// skillsObserver.observe(skillsWatcher)

