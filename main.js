//show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
    // sidebar.style.animation = "hideSidebar 500ms ease forwards"
})

//theme change functionality
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

//toggle sidebar active

const sidebarActive = document.querySelectorAll('.sidebar-btn');

sidebarActive.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        sidebarActive.forEach(f => f.classList.remove('active'));
            e.target.classList.toggle('active');
    });
});

// sidebarActive.addEventListener('click', () => {
//     // sidebarActive.querySelector('a').classList.toggle('active');
//     // sidebarActive.querySelector('a').style.transition = "all 300ms ease";
//     // sidebarActive.querySelector('a:nth-child(2)').classList.toggle('active');
//     // sidebarActive.querySelector('a:nth-child(3)').classList.toggle('active');
//     // sidebarActive.querySelector('a:nth-child(4)').classList.toggle('active');
//     // sidebarActive.querySelector('a:nth-child(5)').classList.toggle('active');
//     // sidebarActive.querySelector('a:nth-child(6)').classList.toggle('active');
//     // sidebarActive.querySelector('a:last-child').classList.toggle('active');
// })