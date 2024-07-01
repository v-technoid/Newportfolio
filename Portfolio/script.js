document.addEventListener('DOMContentLoaded', () => {
    const profile = portfolioData.profile;
    const workExperience = portfolioData.workExperience;
    const education = portfolioData.education;
    const services = portfolioData.services;
    const skills = portfolioData.skills;
    const projects = portfolioData.projects;
    const achievements = portfolioData.achievements;

    // Populate profile data
    document.getElementById('profile-image').src = profile.image;
    document.getElementById('profile-name').innerHTML = profile.name.split('').map(letter => `
        <li class="check">
            <input type="checkbox" />
            <div class="edit">${letter}</div>
        </li>`).join('');
    document.getElementById('profile-role').textContent = profile.role;
    document.getElementById('profile-role-duplicate').textContent = profile.role;
    document.getElementById('profile-bio').textContent = profile.bio;

    document.getElementById('profile-social-media').innerHTML = profile.socialMedia.map(sm => `
        <a href="${sm.link}"><i class='bx bxl-${sm.platform} bx-flashing'></i></a>
    `).join('');

    document.getElementById('profile-cv-link').href = profile.cvLink;

    // Populate work experience
    document.getElementById('work-experience').innerHTML = workExperience.map(exp => `
        <div class="workeduc-content">
            <span class="year"><i class='bx bxs-calendar'></i>${exp.date}</span>
            <h3>${exp.role} - ${exp.company}</h3>
            <ul>${exp.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
        </div>
    `).join('');

    // Populate education
    document.getElementById('education').innerHTML = education.map(edu => `
        <div class="workeduc-content">
            <span class="year"><i class='bx bxs-calendar'></i>${edu.date}</span>
            <h3>${edu.institution}</h3>
            <ul>${edu.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
        </div>
    `).join('');

    // Populate services
    document.getElementById('services').innerHTML = services.map(service => `
        <div class="services-content">
            <i class='bx ${service.icon}'></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');

    // Populate skills
    document.getElementById('skills').innerHTML = `
        <div class="skills-content">
            <h3>Front-End</h3>
            <div class="content">${skills.frontend.map(skill => `
                <span><i class='bx ${skill.icon}'></i> ${skill.name}</span>
            `).join('')}</div>
        </div>
        <div class="skills-content">
            <h3>Programming Languages</h3>
            <div class="content">${skills.programmingLanguages.map(skill => `
                <span><i class='bx ${skill.icon}'></i> ${skill.name}</span>
            `).join('')}</div>
        </div>
        <div class="skills-content">
            <h3>IDE and Tools</h3>
            <div class="content">${skills.tools.map(tool => `
                <span><i class='bx ${tool.icon}'></i> ${tool.name}</span>
            `).join('')}</div>
        </div>
    `;

    // Populate projects
    document.getElementById('projects').innerHTML = projects.map(project => `
        <div class="project">
            <h3>${project.title}</h3>
        </div>
    `).join('');

    // Populate achievements
    document.getElementById('achievements').innerHTML = achievements.map(achievement => `
        <div class="achievement">
            <h3>${achievement.title}</h3>
        </div>
    `).join('');
});










const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);
        if (pageTurn.classList.contains("turn")) {
            pageTurn.classList.remove("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else {
            pageTurn.classList.add("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});
//contact me button when click

const pages = document.querySelectorAll('.book-page.page-right')
const contactMeBtn = document.querySelector('.btn.contact-me')

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn')

            setTimeout(() => {
                page.style.zIndex = 20 + index
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

// create reverse index function

let totalPages = pages.length
let pageNumber = 0

function reverseIndex() {
    pageNumber--

    if (pageNumber < 0) {
        pageNumber = totalPages - 1
    }
}

// back profile button whe click
const backProfileBtn = document.querySelector('.back-profile')
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex()

            pages[pageNumber].classList.remove('turn')

            setTimeout(() => {
                reverseIndex()
                pages[pageNumber].style.zIndex = 10 + index
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

//opening animation
const coverRight = document.querySelector('.cover.cover-right')
const pageLeft = document.querySelector('.book-page.page-left')

//opening animation (cover right animation)

setTimeout(() => {
    coverRight.classList.add('turn')
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1
}, 2800)

//opening animation (cover left or profile page animation)

setTimeout(() => {
    pageLeft.style.zIndex = 20
}, 3200)

//opening animation (all page right animation)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex()

        pages[pageNumber].classList.remove('turn')

        setTimeout(() => {
            reverseIndex()
            pages[pageNumber].style.zIndex = 10 + index
        }, 500)
    }, (index + 1) * 200 + 2100)
})