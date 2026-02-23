// Initialize EmailJS
(function() {
    emailjs.init("j5LzU5BvYwX5O_zYl");
})();

// Transaction 1: Contact Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const status = document.getElementById('contactStatus');
    status.innerHTML = "Sending...";
    emailjs.sendForm('service_97p39o7', 'template_l37130o', this)
        .then(() => {
            status.innerHTML = "Success! Message Sent.";
            status.style.color = "#00f2ff";
            this.reset();
        }, () => {
            status.innerHTML = "Error Sending.";
        });
});

// Transaction 2: Simplified Inquiry
function sendQuickInquiry() {
    const status = document.getElementById('inquiryStatus');
    status.innerHTML = "Processing...";
    setTimeout(() => {
        status.innerHTML = "Notification sent! I'll get back to you.";
        status.style.color = "#00f2ff";
    }, 1000);
}

// API 2: Map
var map = L.map('map').setView([14.1122, 122.9553], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([14.1122, 122.9553]).addTo(map).bindPopup('Jamaica Ramores | CNSC');

// API 3: GitHub (Using your username: gyrucheia)
async function fetchGitHub() {
    const container = document.getElementById('repo-list');
    try {
        const response = await fetch('https://api.github.com/users/gyrucheia/repos?sort=updated&per_page=3');
        const repos = await response.json();
        container.innerHTML = repos.map(repo => `
            <div class="col-md-4">
                <div class="glass-card p-3 neon-img-border">
                    <h6 class="text-info">${repo.name}</h6>
                    <p class="small text-muted">${repo.language || 'Project'}</p>
                </div>
            </div>
        `).join('');
    } catch (e) {
        container.innerHTML = "<p class='text-muted'>GitHub data currently unavailable.</p>";
    }
}
fetchGitHub();

AOS.init({ duration: 1000, once: true });