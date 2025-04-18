const toggleButton = document.getElementById('toggle');
const mainMenu = document.getElementById('menu');

toggleButton.addEventListener('click', function()
{
    mainMenu.classList.toggle('active')
})