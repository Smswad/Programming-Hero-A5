let count = 0;
const counter = document.getElementById("wishlisted");

const wishlist_counter = document.querySelectorAll(".add-wishlist").forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        count++;
        counter.textContent = count;
        console.log("added");

    });
    
});
