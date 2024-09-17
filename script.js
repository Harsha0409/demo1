// Select the toggle button and menu
const menuToggle = document.querySelector('.menu-toggle');
const rightSideIcons = document.querySelector('.right-side-icons');

// Add event listener to toggle the visibility of the menu
menuToggle.addEventListener('click', () => {
    rightSideIcons.classList.toggle('active');
});


// for members count
let count = 1;
const targetCount = 20;
const countElement = document.getElementById('rider-count');
let increaseCount;

document.querySelector('.members-count').addEventListener('mouseover', function () {
    // Start counting only if the count hasn't reached the target yet
    if (count === 1) {
        increaseCount = setInterval(() => {
            if (count <= targetCount) {
                countElement.textContent = `Our Biker Brotherhood is ${count}+ Riders Strong`;
                count++;
            } else {
                clearInterval(increaseCount); // Stop the interval when targetCount is reached
            }
        }, 100); // Adjust the speed as needed
    }
});
