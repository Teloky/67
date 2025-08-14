let number = Math.floor(Math.random() * 100);
document.getElementById("rng").textContent = number;

document.getElementById("reroll").addEventListener("click", function() {
    number = Math.floor(Math.random() * 100);
    document.getElementById("rng").textContent = number;

    if (number === 67) {
        window.location.href = "brainrot.html";
    }
});

// Also check once at page load
if (number === 67) {
    window.location.href = "brainrot.html";
}
console.log(number)
