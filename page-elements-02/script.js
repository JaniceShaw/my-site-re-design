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

    // console.log('ham', target)
    const expanded = target.getAttribute('aria-expanded');

    if (expanded === 'false') {
        target.setAttribute('aria-expanded', 'true');

    } else {
        target.setAttribute('aria-expanded', false);

    }
}