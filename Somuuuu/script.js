document.getElementById("surpriseBtn").addEventListener("click", function() {
    let message = document.getElementById("hiddenMessage");
    let forgivenessSection = document.getElementById("forgivenessSection");
    message.classList.toggle("hidden");
    forgivenessSection.classList.toggle("hidden");
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").innerText = "Yay! You made my heart so happy! 💖💖💖";
    document.getElementById("responseMessage").classList.remove("hidden");

    // Show Love Pop-up
    document.getElementById("lovePopup").classList.add("show");
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").innerText = "Aww, please give me another chance? 🥺💔";
    document.getElementById("responseMessage").classList.remove("hidden");
});

// Close Pop-up
document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("lovePopup").classList.remove("show");
});