const number = Math.floor(Math.random() * 100);
document.getElementById("rng").textContent = number;
document.getElementById("reroll").addEventListener("click", function() {
    const number = Math.floor(Math.random() * 100);
    document.getElementById("rng").textContent = number;
})
 if (number === 67) {
    window.location.href = "brainrot.html";
 }