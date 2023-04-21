const myProject = document.querySelector('.my-project');

myProject.addEventListener('click', fetchAllProject);

async function fetchAllProject() {
    let url = 'https://api.github.com/users/Sveta2808/repos';

    try {
        let allProjectRaw = await fetch(url);
        console.log(allProjectRaw);

        return await allProjectRaw.json();
    } catch (error) {
        console.log(error);
    }

}

async function fetchDataProject() {
    let dataProject = await fetchAllProject();
    let html = '';

    dataProject.forEach(repos => {
        let htmlSection = `<div class="project-section">
                            <h2>${repos.full_name} ${repos.html_url}</h2
                            <div class="description">${repos.description}</div>
                            </div>`;
       

        html += htmlSection;


    });



myProject.innerHTML = html;

}

fetchDataProject();



const photo = document.querySelector('.my-photo');

function animation() {

    photo.classList.toggle('photo_animation_active');

}

photo.addEventListener('click', animation);

const letter = document.querySelector('.letter');
const letter_A = document.querySelector('.letter_A');
const letter_B = document.querySelector('.letter_B');
const letter_C = document.querySelector('.letter_C');
const letter_D = document.querySelector('.letter_D');

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyA') {
        return letter_A.scrollIntoView(true)
    }
    else if (event.code === 'KeyB') {
        return letter_B.scrollIntoView(true)
    }
    else if (event.code === 'KeyC') {
        return letter_C.scrollIntoView(true)
    }
    else if (event.code === 'KeyD') {
        return letter_D.scrollIntoView(true)
    }

});


