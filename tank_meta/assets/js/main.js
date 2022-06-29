
$(window).on('load', function () {
    $("#overlay").delay(500).fadeOut();
});

const body = document.body;

gsap.registerPlugin(ScrollTrigger);

function parallax() {
    gsap.to(".header", {
        scrollTrigger: {
            trigger: ".header",
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
