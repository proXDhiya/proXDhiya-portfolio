const servicesBox = document.querySelectorAll('.service-box');
const projectCard = document.querySelectorAll('.project-card');

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let res = JSON.parse(xhttp.responseText);

        // fetch all services
        for (let i = 0; i < servicesBox.length; i++) {
            // Update image
            servicesBox[i].childNodes[1].src = res.services[i].img_url;
            // Update title
            servicesBox[i].childNodes[3].innerHTML = res.services[i].name;
            // Update description
            servicesBox[i].childNodes[5].innerHTML = res.services[i].description;
        }

        // fetch all projects
        for (let i = 0; i < projectCard.length; i++) {
            // update image
            projectCard[i].childNodes[1].style.backgroundImage = `url('${res.projects[i].img_url}')`;
            // update title
            projectCard[i].childNodes[3].childNodes[1].innerHTML = res.projects[i].name;
            // update description
            projectCard[i].childNodes[3].childNodes[3].innerHTML = res.projects[i].description;
        }
    }
};
xhttp.open("GET", "/../data.json", true);
xhttp.send();
