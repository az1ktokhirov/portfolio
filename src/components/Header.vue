<template>
    <header class="header">
        <div class="header__content" @mouseover="addHoverBg" @mouseleave="removeHoverBg">
            <router-link to="/about" class="header__content-link">
                <div class="header__content-link-list marquee">
                    <span @click="played" @mouseover="play" class="header__content-link-list-item default-link">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">About</span>
                </div>
            </router-link>
            <router-link to="/projects" class="header__content-link">
                <div class="header__content-link-list marquee2">
                    <span @click="played" @mouseover="play" class="header__content-link-list-item default-link">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Projects</span>
                </div>
            </router-link>
            <router-link to="/contacts" class="header__content-link">
                <div class="header__content-link-list marquee">
                    <span @click="played" @mouseover="play" class="header__content-link-list-item default-link">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                    <span @click="played" @mouseover="play" class="header__content-link-list-item">Contacts</span>
                </div>
            </router-link>
        </div>
        <h1 class="header__content-title">Hello🖐, I'm <span @click="downloadPDF" @mouseover="play">Azizillo Tokhirov</span> and I'm Front-end Developer</h1>
    </header>
</template>

<script>
import hoverSound from "../assets/audio/hover-audio.wav";
import clickSound from "../assets/audio/click-audio.wav";

export default {
    setup() {
        const hoverAudio = new Audio(hoverSound);
        const clickAudio = new Audio(clickSound);

        async function play() {
            try {
                await hoverAudio.play();
            } catch (error) {
                console.log("Playback failed: ", error);
            }
        }

        async function played() {
            try {
                await clickAudio.play();
            } catch (error) {
                console.log("Playback failed: ", error);
            }
        }

        function addHoverBg() {
            document.querySelector(".header__content").classList.add("hover-bg");
        }

        function removeHoverBg() {
            document.querySelector(".header__content").classList.remove("hover-bg");
        }

        function downloadPDF() {
            const link = document.createElement("a");
            link.href = "/public/my-resume.pdf"; // public papkasi ichida joylashgan faylga nisbatan yo'l
            link.download = "Azizillo_Tokhirov_Resume.pdf"; // Yuklab olish fayl nomi
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        return { play, played, addHoverBg, removeHoverBg, downloadPDF };
    },
};
</script>
