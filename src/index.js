import _ from 'lodash';
import '../styles/styles.css';
import '../styles/header.css';
import '../styles/home.css';
import '../styles/footer.css';

import firstLoad from '../functions/firstLoad';
import cleanSlate from '../functions/cleanSlate';
import homeDiv from '../pages/home';
import menuDiv from '../pages/menu';
import headerDiv from '../functions/header';
import footerDiv from '../functions/footer';

document.addEventListener('DOMContentLoaded', (event) => {
    const header = headerDiv();
    document.body.prepend(header);
    const homeButton = document.getElementById("homeButton");
    const menuButton = document.getElementById("menuButton");
    const aboutButton = document.getElementById("aboutButton");

    // Load Home Page Initially
    loadHomePage();
    footerDiv();
    if (homeButton) {
        homeButton.addEventListener("click", (e) => {
            cleanSlate();
            document.body.prepend(header);
            loadHomePage();
            console.log("click");
        });
    } else {
        console.error("homeButton not found");
    }

    if (menuButton) {
        menuButton.addEventListener("click", (e) => {
            cleanSlate();
            const menu = menuDiv();
            document.getElementById("content").appendChild(menu);
            console.log("click");
        });
    } else {
        console.error("menuButton not found");
    }
});

function loadHomePage() {
    homeDiv();
    initGalleryEvents();
}

function initGalleryEvents() {
    const track = document.getElementById("gallery");
    if (track) {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = "0";

        const handleOnDown = e => {
            e.preventDefault();
            track.dataset.mouseDownAt = e.clientX || e.touches[0].clientX;
        };

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        };

        const handleOnMove = e => {
            if (track.dataset.mouseDownAt === "0") return;
            e.preventDefault();  // Prevent default behavior to avoid vertical scrolling

            const clientX = e.clientX || e.touches[0].clientX;
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX;
            const maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -47);

            track.dataset.percentage = nextPercentage;

            track.style.transform = `translate(${nextPercentage}%, 0%)`;

            track.animate({
                transform: `translate(${nextPercentage}%, 0%)`
            }, { duration: 1200, fill: "forwards" });

            const images = track.getElementsByTagName("img");
            for (const image of images) {
                image.animate({
                    objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        };

        track.addEventListener("mousedown", handleOnDown);
        track.addEventListener("touchstart", handleOnDown);
        track.addEventListener("mouseup", handleOnUp);
        track.addEventListener("touchend", handleOnUp);
        track.addEventListener("mousemove", handleOnMove);
        track.addEventListener("touchmove", handleOnMove);

    } else {
        console.error("Gallery element not found in the DOM.");
    }
}
