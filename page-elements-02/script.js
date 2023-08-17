console.log('hello')
const menuButton = document.querySelector('.menu-button');
console.log(menuButton);

menuButton.addEventListener("click", (element) => {
    console.log('jkjkj')
    const button = element.target;
    button.classList.toggle("open");
}
);

