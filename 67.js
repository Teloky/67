let number = Math.floor(Math.random() * 100);
document.getElementById("rng").textContent = number;

// Check at page load
settimeout(() => {
if (number === 67) {
    window.location.href = "brainrot.html";
}, 5000)
}

document.getElementById("reroll").addEventListener("click", function() {
    number = Math.floor(Math.random() * 100);
    document.getElementById("rng").textContent = number;

    // Check after reroll
    settimeout(() => {
    if (number === 67) {
        window.location.href = "brainrot.html";
    }
    }, 5000)        
});

