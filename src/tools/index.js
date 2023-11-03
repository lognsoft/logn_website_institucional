let scripts = [
    // "/js/vendors/jquery-3.6.1.min.js",
    // "/js/vendors/appear.min.js",
    // "/js/vendors/bootstrap.bundle.min.js",
    // "/js/vendors/jquery.countTo.js",
    // "/js/vendors/wow.min.js",
    // "/js/vendors/swiper-bundle.min.js",
    // "/js/vendors/particles.min.js",
    "/js/vendors/vanilla-tilt.min.js",
    // "/js/vendors/isotope-min.js",
    // "/js/vendors/jquery.fancybox.min.js",
    "/js/main.js"
];

let hystoryScript = [];

export const generateScript = async () => {
    for(let i = 0; i < scripts.length; i++){
        let script = document.createElement("script");
        script.setAttribute("src",`${scripts[i]}`);
        document.body.appendChild(script);
        hystoryScript[i] = script;
    }
}

export const clearScript = () => {
    for(let i = 0; i < hystoryScript.length; i++){
        hystoryScript[i].remove();
    }
}

const sleep = (timer) => new Promise((resolve) => setTimeout(resolve,timer));