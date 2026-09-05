// Handle wish form submission
document.getElementById('wishForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const wishText = document.getElementById('wishInput').value.trim();
    const authorName = document.getElementById('nameInput').value.trim();
    
    if (wishText && authorName) {
        // Create new wish card
        const newWish = document.createElement('div');
        newWish.classList.add('wish-card');
        newWish.innerHTML = `
            <p class="wish-text">"${wishText}"</p>
            <p class="wish-author">- ${authorName}</p>
        `;
        
        // Add animation class
        newWish.style.animation = 'slideInUp 0.6s ease';
        
        // Insert at the beginning of wishes container
        const wishesContainer = document.getElementById('wishesContainer');
        wishesContainer.insertBefore(newWish, wishesContainer.firstChild);
        
        // Clear form
        document.getElementById('wishInput').value = '';
        document.getElementById('nameInput').value = '';
        
        // Show success message
        showNotification('🎉 Your wish has been added!');
        
        // Store wish in local storage
        saveWish(wishText, authorName);
    }
});

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        font-size: 1rem;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.5s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Function to save wish to local storage
function saveWish(wish, author) {
    let wishes = JSON.parse(localStorage.getItem('birthdayWishes')) || [];
    wishes.push({
        wish: wish,
        author: author,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('birthdayWishes', JSON.stringify(wishes));
}

// Function to load wishes from local storage on page load
function loadSavedWishes() {
    let wishes = JSON.parse(localStorage.getItem('birthdayWishes')) || [];
    wishes.forEach(w => {
        const wishCard = document.createElement('div');
        wishCard.classList.add('wish-card');
        wishCard.innerHTML = `
            <p class="wish-text">"${w.wish}"</p>
            <p class="wish-author">- ${w.author}</p>
        `;
        document.getElementById('wishesContainer').appendChild(wishCard);
    });
}

// Add confetti animation on page load
function createConfetti() {
    const confettiPieces = 50;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${getRandomColor()};
            left: ${Math.random() * 100}%;
            top: -10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
        `;
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.5;
        
        confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;
        
        setTimeout(() => confetti.remove(), (duration + delay) * 1000);
    }
}

// Function to get random color for confetti
function getRandomColor() {
    const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4', '#ffe66d', '#f78fb3', '#95e1d3'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Gallery image click handler
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        alert('Click to add your memory photo here!');
    });
});

// Gift link click handler
document.querySelectorAll('.gift-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirect to gift options would go here!');
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Trigger confetti on special occasions
function triggerCelebration() {
    for (let i = 0; i < 3; i++) {
        setTimeout(createConfetti, i * 500);
    }
}

// Load saved wishes when page loads
window.addEventListener('load', function() {
    loadSavedWishes();
});

// Optional: Trigger celebration on page load
window.addEventListener('load', function() {
    setTimeout(triggerCelebration, 500);
});

// Add parallax effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        header.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

// Dynamic time-based greeting
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = '🎉';
    
    if (hour < 12) {
        greeting = '🌅 Good Morning! ';
    } else if (hour < 18) {
        greeting = '☀️ Good Afternoon! ';
    } else {
        greeting = '🌙 Good Evening! ';
    }
    
    return greeting;
}

// Add birthday countdown (optional)
function addCountdown() {
    // Set birthday date (change to your friend's actual birthday)
    const birthdayDate = new Date(2026, 8, 15); // September 15, 2026
    const today = new Date();
    
    if (birthdayDate > today) {
        const timeLeft = birthdayDate - today;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        
        if (days > 0) {
            const countdownHTML = `
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                           color: white; 
                           padding: 15px; 
                           text-align: center; 
                           border-radius: 10px; 
                           margin-bottom: 20px;
                           font-weight: 600;">
                    ⏰ ${days} days until the birthday! ⏰
                </div>
            `;
            
            const header = document.querySelector('.header');
            if (header) {
                header.insertAdjacentHTML('beforebegin', countdownHTML);
            }
        }
    }
}

// Initialize countdown on page load
window.addEventListener('load', addCountdown);

// Console Easter Egg
console.log('%c🎉 Happy Birthday! 🎉', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cMade with ❤️ for celebrating special moments', 'font-size: 14px; color: #764ba2;');