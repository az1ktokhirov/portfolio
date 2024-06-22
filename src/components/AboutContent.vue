<template>
    <!-- <Navbar /> -->
    <div class="about__content">
        <div class="about__content-top">
            <div></div>
            <h2 class="about__content-top-title" @mouseover="play">
                FRoNT-eND <br />
                <span>DeVeLoPeR</span>
            </h2>
            <div class="about__content-top-link" @click="scrollToAboutMe">
                <img src="../assets/images/arrow.svg" alt="" />
            </div>
        </div>
        <div class="about__content-bottom" id="aboutMe">
            <p class="about__content-bottom-text">
                Hello! I'm Tokhirov Azizillo, a passionate front-end developer with a strong base in HTML5, CSS3, and JavaScript. I specialize in creating responsive and user-friendly web pages, using
                tools and frameworks such as Bootstrap, SCSS, and Vue.js. Currently, I am improving my skills and learning more at the "Proweb" IT center in Tashkent. This program has helped me to
                better understand modern web development practices and technologies, getting me ready to handle real-world challenges in the industry. Although I have not yet worked on real projects,
                I'm eager to use my knowledge and skills in a professional setting. My goal is to achieve success in the IT field and keep growing as a professional. I'm excited about working on
                innovative projects and collaborating with people who share my passion for technology and development.
            </p>
            <div class="about__content-bottom-list">
                <h2 class="about__content-bottom-list-title">My Skills:</h2>
                <h4 class="about__content-bottom-list-item html-item">Html</h4>
                <h4 class="about__content-bottom-list-item css-item">Css</h4>
                <h4 class="about__content-bottom-list-item js-item">JS</h4>
                <h4 class="about__content-bottom-list-item git-item">Git</h4>
                <h4 class="about__content-bottom-list-item btrp-item">Bootstrap</h4>
                <h4 class="about__content-bottom-list-item vue-item">Vue</h4>
                <h4 class="about__content-bottom-list-item scss-item">Scss</h4>
                <h4 class="about__content-bottom-list-item"></h4>
            </div>
            <div class="about__content-bottom-resume">
                <p @click="downloadPDF">
                    Click to Download <br />
                    My Resume!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import hoverSound from "../assets/audio/hover-sound.wav";

export default {
    setup() {
        const hoverAudio = new Audio(hoverSound);

        async function play() {
            try {
                await hoverAudio.play();
            } catch (error) {
                console.log("Playback failed: ", error);
            }
        }

        function scrollToAboutMe() {
            const aboutMe = document.getElementById("aboutMe");
            const navHeight = document.querySelector("nav").offsetHeight;
            window.scrollTo({
                top: aboutMe.offsetTop - navHeight,
                behavior: "smooth",
            });
        }
        function downloadPDF() {
            const link = document.createElement("a");
            link.href = "/public/my-resume.pdf";
            link.download = "Azizillo_Tokhirov_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        return { play, scrollToAboutMe, downloadPDF };
    },
};
</script>
