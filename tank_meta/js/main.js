
jQuery(window).on('load', function () {
    jQuery("#overlay").delay(500).fadeOut();
});

const elUpcoming = document.getElementById("upcomingDate");
const timerEl = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
};

const upcomingDate = new Date("08/17/2022"); // mm/dd/yyyy
const upcomingDateMonth = String(upcomingDate.getMonth() + 1).padStart(2, '0')
elUpcoming.textContent = `${upcomingDate.getDate()}.${upcomingDateMonth}.${upcomingDate.getFullYear()}`;

function calcDate(upcoming, target) {
    const res = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    };
    const gap = upcoming - new Date();

    res.days = Math.trunc(gap / 1000 / 60 / 60 / 24);
    res.hours = Math.trunc(gap / 1000 / 60 / 60 - res.days * 24);
    res.minutes = Math.trunc(
        gap / 1000 / 60 - res.days * 24 * 60 - res.hours * 60
    );
    res.seconds = Math.trunc(
        gap / 1000 -
        res.days * 24 * 60 * 60 -
        res.hours * 60 * 60 -
        res.minutes * 60
    );

    //number formatter
    const formatter = (num) => (num.toString().length === 2 ? num : `0${num}`);
    //number formatter

    target.days.textContent = formatter(res.days);
    target.hours.textContent = formatter(res.hours);
    target.minutes.textContent = formatter(res.minutes);
    target.seconds.textContent = formatter(res.seconds);

    // from markup
    // target.days.textContent = 14;
    // target.hours.textContent = 16;
    // target.minutes.textContent = 47;
    // target.seconds.textContent = 38;

    setTimeout(() => calcDate(upcoming, target), 1000);
}

calcDate(upcomingDate, timerEl);

function legendWrapper() {
    const btn = document.querySelector(".btn-legend");
    const legendImg = document.querySelector(".legend-img-active img");
    const btnText = document.querySelector(".btn-legend .elementor-button-text");
    const texts = document.querySelectorAll(".hide-content");

    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
            for (let text of texts) {
                text.style.height = 0;
                text.style.opacity = 0;
                legendImg.style.opacity = 0;
                btnText.textContent = "learn more";
                btn.classList.remove("active");
            }
        } else {
            for (let text of texts) {
                text.style.height = text.scrollHeight + "px";
                text.style.opacity = 1;
                btnText.textContent = "hide";
                btn.classList.add("active");
                legendImg.style.opacity = 1;
            }
        }
    });
}

function playOnHover() {
    const cards = document.querySelectorAll(".legend-card");
    for (let i = 1; i <= cards.length; i++) {
        let card = cards[i - 1];
        const video = card.querySelector("video");
        const src = video.querySelector("source");
        window.addEventListener("load", () => {
            video.load();
            card.addEventListener("mouseenter", () => {
                card.classList.remove("pause");
                video.setAttribute("autoplay", true);
                if (video.hasAttribute("autoplay")) {
                    video.play();
                }
            });
            card.addEventListener("mouseleave", () => {
                const video = card.querySelector("video");
                video.pause();
                card.classList.add("pause");
            });
        });
    }
}

playOnHover();

legendWrapper();

const body = document.body;

if (screen.width > 1024) {

    gsap.registerPlugin(ScrollTrigger);

    function parallax() {
        gsap.to(".elementor-location-header", {
            scrollTrigger: {
                trigger: ".elementor-location-header",
                start: "top top",
                end: "1000",
                pin: true,
            },
        });
        gsap.from(".header-city", {
            scrollTrigger: {
                trigger: "body",
                start: "0",
                end: "600",
                scrub: true,
            },
            yPercent: 120,
            opacity: 0,
        });
        gsap.from(".header-arena", {
            scrollTrigger: {
                trigger: "body",
                start: "200",
                end: "800",
                scrub: true,
            },
            yPercent: 80,
            opacity: 0,
        });
        gsap.from(".header-timer-time", {
            scrollTrigger: {
                trigger: ".header-body",
                start: "100",
                end: "800",
                scrub: true,
            },
            yPercent: 70,
        });
        gsap.from(".header-tank", {
            scrollTrigger: {
                trigger: "body",
                start: "400",
                end: "800",
                scrub: true,
            },
            yPercent: 70,
            opacity: 0,
        });
        gsap.from(".header-timer-content", {
            scrollTrigger: {
                trigger: "body",
                start: "400",
                end: "1000",
                scrub: true,
            },
            opacity: 0,
        });
        gsap.from(".header-subscribe", {
            scrollTrigger: {
                trigger: "body",
                start: "400",
                end: "1000",
                scrub: true,
            },
            opacity: 0,
        });
    }

    parallax();
}

