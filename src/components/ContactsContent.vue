<template>
    <div class="contacts__content">
        <ul class="contacts__content-list contacts__content-list1">
            <li v-for="contact in contacts" :key="contact.id">
                <a :href="contact.link" target="_blank" class="contacts__content-list-link">
                    <div class="contacts__content-list-link-img">
                        <img :src="contact.imgSrc" :alt="contact.alt" />
                    </div>
                    <p>{{ contact.text }}</p>
                </a>
            </li>
        </ul>
        <ul class="contacts__content-list contacts__content-list2">
            <li v-for="contact in contacts2" :key="contact.id">
                <a :href="contact.link" target="_blank" class="contacts__content-list-link contacts__content-list-link2">
                    <div class="contacts__content-list-link-img">
                        <img :src="contact.imgSrc" :alt="contact.alt" />
                    </div>
                    <p>{{ contact.text }}</p>
                </a>
            </li>
        </ul>

        <div class="back back2">
            <router-link to="/"><p class="back-icon back2-icon">X</p></router-link>
        </div>
    </div>
</template>

<script>
import Email from "../assets/images/email.png";
import Phone from "../assets/images/phone.png";
import Vkontakt from "../assets/images/VK.png";
import X from "../assets/images/twitter.png";
import TG from "../assets/images/telegram.png";
import Insta from "../assets/images/instagram.png";
import Github from "../assets/images/github.png";
import Discord from "../assets/images/discord.png";
export default {
    data() {
        return {
            contacts: [
                { id: 1, link: "mailto:azizillotokhirov@gmail.com", imgSrc: Email, alt: "Email Icon", text: "My Gmail!" },
                { id: 2, link: "tel:+998888386668", imgSrc: Phone, alt: "Phone Icon", text: "My Number!" },
                { id: 3, link: "https://vk.com/az1ktokhirov", imgSrc: Vkontakt, alt: "VK Icon", text: "My VKontakte!" },
                { id: 4, link: "https://x.com/az1ktokh1rov", imgSrc: X, alt: "Twitter Icon", text: "My Twitter!" },
            ],
            contacts2: [
                { id: 1, link: "https://t.me/az1ktokhirov", imgSrc: TG, alt: "Telegram Icon", text: "My Telegram!" },
                { id: 2, link: "https://www.instagram.com/az1ktokhirov", imgSrc: Insta, alt: "Instagram Icon", text: "My Instagram!" },
                { id: 3, link: "https://github.com/az1ktokhirov", imgSrc: Github, alt: "GitHub Icon", text: "My GitHub!" },
                { id: 4, link: "https://discord.com/channels/@az1ktokhirov", imgSrc: Discord, alt: "Discord Icon", text: "My Discord!" },
            ],
        };
    },
};
</script>

<style></style>
