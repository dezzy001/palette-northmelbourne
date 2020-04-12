if (inIframe()) {
    const back_to_test = document.querySelector("#back-to-test");
    back_to_test.style.display = "none";
} else {
    console.log("NOT IFRAME");
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
