const C_TEST_DIRECTORY = "tests";
const C_TEST_ENTRY_HTML = "index.html";
const cards = document.querySelectorAll(".card");
const demo_iframe = document.querySelector("#demo-container iframe");

cards.forEach((card) => {
    let preview_trigger = card.querySelector(".preview");
    if (preview_trigger) {
        preview_trigger.addEventListener("click", (event) => {
            demo_iframe.src =
                "/" +
                C_TEST_DIRECTORY +
                "/" +
                card.querySelector("a").id +
                "/" +
                C_TEST_ENTRY_HTML;
        });
    }
});
