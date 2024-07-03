document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    const createAndAppendElement = (tag, parent, attributes = {}, innerHTML = '') => {
        const element = document.createElement(tag);
        Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));
        element.innerHTML = innerHTML;
        parent.appendChild(element);
        return element;
    };

    const profile = portfolioData.profile;
    const workExperience = portfolioData.workExperience;
    const education = portfolioData.education;
    const services = portfolioData.services;
    const skills = portfolioData.skills;
    const projects = portfolioData.projects;
    const achievements = portfolioData.achievements;

    // Populate profile data
    const profileImage = document.getElementById('profile-image');
    profileImage.setAttribute('src', profile.image);

    const profileName = document.getElementById('profile-name');
    profile.name.split('').forEach(letter => {
        const li = createAndAppendElement('li', profileName, { class: 'check' });
        createAndAppendElement('input', li, { type: 'checkbox' });
        createAndAppendElement('div', li, { class: 'edit' }, letter);
    });

    const profileRole = document.getElementById('profile-role');
    profileRole.textContent = profile.role;
    const profileRoleDuplicate = document.getElementById('profile-role-duplicate');
    profileRoleDuplicate.textContent = profile.role;

    const profileBio = document.getElementById('profile-bio');
    profileBio.textContent = profile.bio;

    const profileSocialMedia = document.getElementById('profile-social-media');
    profile.socialMedia.forEach(sm => {
        const a = createAndAppendElement('a', profileSocialMedia, { href: sm.link });
        createAndAppendElement('i', a, { class: `bx bxl-${sm.platform} bx-flashing` });
    });

    const profileCvLink = document.getElementById('profile-cv-link');
    profileCvLink.setAttribute('href', profile.cvLink);

    // Populate work experience
    const workExperienceContainer = document.getElementById('work-experience');
    workExperience.forEach(exp => {
        const div = createAndAppendElement('div', workExperienceContainer, { class: 'workeduc-content' });
        createAndAppendElement('span', div, { class: 'year' }, `<i class='bx bxs-calendar'></i>${exp.date}`);
        createAndAppendElement('h3', div, {}, `${exp.role} - ${exp.company}`);
        const ul = createAndAppendElement('ul', div);
        exp.description.forEach(desc => {
            createAndAppendElement('li', ul, {}, desc);
        });
    });

    // Populate education
    const educationContainer = document.getElementById('education');
    education.forEach(edu => {
        const div = createAndAppendElement('div', educationContainer, { class: 'workeduc-content' });
        createAndAppendElement('span', div, { class: 'year' }, `<i class='bx bxs-calendar'></i>${edu.date}`);
        createAndAppendElement('h3', div, {}, edu.institution);
        const ul = createAndAppendElement('ul', div);
        edu.details.forEach(detail => {
            createAndAppendElement('li', ul, {}, detail);
        });
    });

    // Populate services
    const servicesContainer = document.getElementById('services');
    services.forEach(service => {
        const div = createAndAppendElement('div', servicesContainer, { class: 'services-content' });
        createAndAppendElement('i', div, { class: `bx ${service.icon}` });
        createAndAppendElement('h3', div, {}, service.title);
        createAndAppendElement('p', div, {}, service.description);
    });

    // Populate skills
    const skillsContainer = document.getElementById('skills');
    
    const frontendSkills = createAndAppendElement('div', skillsContainer, { class: 'skills-content' });
    createAndAppendElement('h3', frontendSkills, {}, 'Front-End');
    const frontendContent = createAndAppendElement('div', frontendSkills, { class: 'content' });
    skills.frontend.forEach(skill => {
        createAndAppendElement('span', frontendContent, {}, `<i class='bx ${skill.icon}'></i> ${skill.name}`);
    });

    const programmingSkills = createAndAppendElement('div', skillsContainer, { class: 'skills-content' });
    createAndAppendElement('h3', programmingSkills, {}, 'Programming Languages');
    const programmingContent = createAndAppendElement('div', programmingSkills, { class: 'content' });
    skills.programmingLanguages.forEach(skill => {
        createAndAppendElement('span', programmingContent, {}, `<i class='bx ${skill.icon}'></i> ${skill.name}`);
    });

    const toolsSkills = createAndAppendElement('div', skillsContainer, { class: 'skills-content' });
    createAndAppendElement('h3', toolsSkills, {}, 'IDE and Tools');
    const toolsContent = createAndAppendElement('div', toolsSkills, { class: 'content' });
    skills.tools.forEach(tool => {
        createAndAppendElement('span', toolsContent, {}, `<i class='bx ${tool.icon}'></i> ${tool.name}`);
    });

    // Populate projects
    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const div = createAndAppendElement('div', projectsContainer, { class: 'project' });
        createAndAppendElement('h3', div, {}, project.title);
    });

    // Populate achievements
    const achievementsContainer = document.getElementById('achievements');
    achievements.forEach(achievement => {
        const div = createAndAppendElement('div', achievementsContainer, { class: 'achievement' });
        createAndAppendElement('h3', div, {}, achievement.title);
    });
});


function checkform()
{
    var take= document.forms['theform'].elements;
    var fieldmustbefilled = true;
    for(var i=0; i<take.length; i++)
        {
            if(take[i].value.length == 0)
                fieldmustbefilled = false;
        }

        if(fieldmustbefilled) 
            {
                document.getElementById("form-btn").disabled =false;
                document.getElementById("form-btn").style.backgroundColor = "#00abf0";
                document.getElementById("form-btn").style.color = "white";
                document.getElementById("form-btn").style.borderColor = "#00abf0";
            }
        else 
        {
            document.getElementById("form-btn").disabled = true;
            document.getElementById("form-btn").style.backgroundColor = "#8E8E8E";
            document.getElementById("form-btn").style.color = "grey";
            document.getElementById("form-btn").style.borderColor = "grey";
        }

}

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