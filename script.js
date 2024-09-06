console.log('priya saran');

document.addEventListener('DOMContentLoaded', function () {
    // Select all list items in the navigation
    const navItems = document.querySelectorAll('ul.navbar-nav > li');
    
    // Add click event listener to each list item
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'active' class from all list items
            navItems.forEach(function (el) {
                el.classList.remove('active');
            });
            // Add 'active' class to the clicked list item
            this.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
    
    // Function to hide all answers
    const hideAllAnswers = () => {
        questions.forEach(q => {
            const answer = q.nextElementSibling;
            if (answer) {
                answer.style.display = 'none';
            }
        });
    };

    // Initially, show the first answer and hide others
    hideAllAnswers();
    if (questions.length > 0) {
        const firstAnswer = questions[0].nextElementSibling;
        if (firstAnswer) {
            firstAnswer.style.display = 'block';
        }
    }

    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Hide all answers
            hideAllAnswers();

            // Toggle the answer visibility of the clicked question
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('jpg_btn');
//     if (button) {
//         button.classList.remove('unactive-btn');
//         button.classList.add('active-btn');
//     } else {
//         console.error('Element with ID "jpg_btn" not found.');
//     }
// }); 
function observeDiv(divId) {
    // alert(divId)
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                document.getElementById(`${divId}_btn`).classList.remove('unactive-btn')
                document.getElementById(`${divId}_btn`).classList.add('active-btn')
                // document.getElementById('observing-section').style.height=`document.getElementById(divId).height+30px`
                console.log(`${entry.target.id} is in the viewport`);
            } else {
                
                console.log(`${entry.target.id} is out of the viewport`);
                document.getElementById(`${divId}_btn`).classList.remove('active-btn')
                document.getElementById(`${divId}_btn`).classList.add('unactive-btn')
            }
        });
    }, {
        root: null, // Use the viewport as the container
        rootMargin: '0px', // No margin
        threshold: 0.5 // 50% of the element must be visible to trigger the observer
    });

    // Get the div element by ID and start observing it
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {
        observer.observe(targetDiv);
        
        // Optional: Scroll the element into view if needed
        targetDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
}

