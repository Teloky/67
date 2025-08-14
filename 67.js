let number = Math.floor(Math.random() * 100);
document.getElementById("rng").textContent = number;

// Check at page load
if (number === 67) {
    window.location.href = "brainrot.html";
}

document.getElementById("reroll").addEventListener("click", function() {
    number = Math.floor(Math.random() * 100);
    document.getElementById("rng").textContent = number;

    // Check after reroll
    if (number === 67) {
        window.location.href = "brainrot.html";
    }
});
