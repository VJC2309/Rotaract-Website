const content = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');

const pages = {
  home: `
    <section id="home">
      <h2>Welcome to Rotaract Club</h2>
      <p>Rotaract is a global movement of young leaders who are committed to making a difference in their communities. Join us for service, fellowship, and fun!</p>
      <img src="weblogo.png" alt="Rotaract Logo" class="club-logo">
    </section>
    <section id="contact-bar" style="max-width:1000px;margin:1.2rem auto 0 auto;padding:0.5rem 1rem;background:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(180,0,45,0.07);text-align:center;font-size:1.08rem;display:flex;justify-content:center;gap:2.5rem;align-items:center;">
      <div><strong>Contact:</strong> +91 98765 43210, +91 91234 56789</div>
    </section>
    <section id="contact-details" style="max-width:700px;margin:2.5rem auto 0 auto;padding:2rem 1.5rem;background:rgba(255,255,255,0.98);border-radius:16px;box-shadow:0 4px 18px rgba(180,0,45,0.08);border:2px solid #f8f9fa;text-align:center;">
      <h3 style="color:#b4002d;margin-bottom:1rem;font-size:1.4rem;">Contact Us</h3>
      <div style="margin-bottom:0.7rem;font-size:1.08rem;"><strong>Email:</strong> <a href="mailto:info.rotaractclub@email.com" style="color:#b4002d;text-decoration:none;">info.rotaractclub@email.com</a></div>
      <div style="font-size:1.08rem;"><strong>Phone:</strong> +91 90000 12345</div>
    </section>
  `,
  events: `
    <section id="events">
      <h2>Upcoming Events</h2>
      <ul id="events-list">
        <li><strong>Community Clean-Up</strong> - May 20, 2025 <button class="register-event-btn" data-event="Community Clean-Up - May 20, 2025">Register</button></li>
        <li><strong>Leadership Workshop</strong> - June 5, 2025 <button class="register-event-btn" data-event="Leadership Workshop - June 5, 2025">Register</button></li>
        <li><strong>Charity Run</strong> - July 10, 2025 <button class="register-event-btn" data-event="Charity Run - July 10, 2025">Register</button></li>
        <li><strong>Rotaract Orientation</strong> - August 1, 2025 <button class="register-event-btn" data-event="Rotaract Orientation - August 1, 2025">Register</button></li>
        <li><strong>Blood Donation Camp</strong> - August 25, 2025 <button class="register-event-btn" data-event="Blood Donation Camp - August 25, 2025">Register</button></li>
        <li><strong>Inter-Club Debate</strong> - September 10, 2025 <button class="register-event-btn" data-event="Inter-Club Debate - September 10, 2025">Register</button></li>
      </ul>
    </section>
  `,
  members: `
    <section id="members">
      <h2>Meet Our Members</h2>
      <div class="members-list">
        <div class="member-card">
          <img src="l3.jpeg" alt="Riya Mehra">
          <div class="member-info">
            <h3>Riya Mehra</h3>
            <p>President</p>
          </div>
        </div>
        <div class="member-card">
          <img src="l2.jpg" alt="Geeta Patel">
          <div class="member-info">
            <h3>Geeta Patel</h3>
            <p>Vice President</p>
          </div>
        </div>
        <div class="member-card">
          <img src="g1.jpeg" alt="Gaurav Singh">
          <div class="member-info">
            <h3>Gaurav Singh</h3>
            <p>Community Service Director</p>
          </div>
        </div>
        <div class="member-card">
          <img src="g2.jpeg" alt="Arjun Srivastav">
          <div class="member-info">
            <h3>Arjun Srivastav</h3>
            <p>Events Coordinator</p>
          </div>
        </div>
      </div>
      <div class="founders-group" style="text-align:center;margin-top:2.5rem;">
        <div style="font-weight:bold;font-size:1.25rem;margin-bottom:0.7rem;">Founders of the Club</div>
        <img src="group.jpg" alt="Founders of the Club" style="max-width:100%;border-radius:14px;box-shadow:0 4px 24px rgba(180,0,45,0.13);margin:auto;">
      </div>
    </section>
  `,
  volunteering: `
    <section id="volunteering">
      <h2>Volunteering Highlights</h2>
      <article>
        <h3>Food Drive Success</h3>
        <p>Our club collected over 500kg of food for local shelters last month. Thank you to all volunteers! <br><strong>Lead Volunteer: Geeta Patel</strong></p>
      </article>
      <article>
        <h3>Tree Planting Day</h3>
        <p>We planted 200 trees in the city park, helping to make our community greener and cleaner. <br><strong>Lead Volunteer: Riya Mehra</strong></p>
      </article>
      <ul id="volunteering-activities">
        <li><strong>Beach Clean-Up</strong> - August 5, 2025 <br><span>Lead Volunteer: Arjun Sriwastav</span> <button class="enroll-vol-btn" data-activity="Beach Clean-Up - August 5, 2025">Enroll</button></li>
        <li><strong>Senior Center Visit</strong> - August 20, 2025 <br><span>Lead Volunteer: Krishna Bhardwaj</span> <button class="enroll-vol-btn" data-activity="Senior Center Visit - August 20, 2025">Enroll</button></li>
        <li><strong>Book Donation Drive</strong> - September 12, 2025 <br><span>Lead Volunteer: Geeta Patel</span> <button class="enroll-vol-btn" data-activity="Book Donation Drive - September 12, 2025">Enroll</button></li>
      </ul>
    </section>
  `,
  donate: `
    <section id="donation-panel">
      <div class="donation-bg"></div>
      <div class="donation-content">
        <h2>Support Our Cause</h2>
        <p>Your donation helps us provide food, education, and hope to those in need. Every contribution makes a difference.</p>
        <button class="donate-btn">Donate Now</button>
      </div>
    </section>
  `,
  admin: `
    <section id="admin-panel">
      <h2>Admin Panel</h2>
      <p>Welcome, Admin! Here you can manage events, view registrations, and more.</p>
      <div style="margin-top:2rem;">
        <button style="padding:0.7rem 1.5rem;margin:0.5rem 0.5rem 0 0;background:#b4002d;color:#fff;border:none;border-radius:8px;font-weight:600;">Manage Events</button>
        <button style="padding:0.7rem 1.5rem;margin:0.5rem 0.5rem 0 0;background:#b4002d;color:#fff;border:none;border-radius:8px;font-weight:600;">View Registrations</button>
        <button style="padding:0.7rem 1.5rem;margin:0.5rem 0.5rem 0 0;background:#b4002d;color:#fff;border:none;border-radius:8px;font-weight:600;">Settings</button>
      </div>
    </section>
  `,
  announcements: `
    <section id="announcement-panel">
      <h2>Upcoming Tournaments</h2>
      <ul class="announcement-list">
        <li>
          <span class="sport">Cricket Tournament</span>
          <span class="date">July 15, 2025</span>
        </li>
        <li>
          <span class="sport">Basketball Championship</span>
          <span class="date">August 2, 2025</span>
        </li>
        <li>
          <span class="sport">Pickleball Open</span>
          <span class="date">August 18, 2025</span>
        </li>
        <li>
          <span class="sport">Football League</span>
          <span class="date">September 5, 2025</span>
        </li>
        <li>
          <span class="sport">Badminton Doubles</span>
          <span class="date">September 20, 2025</span>
        </li>
      </ul>
    </section>
  `
};

// Replace setupEventButtons with setupRegisterButtons
function setupRegisterButtons() {
  const registerButtons = document.querySelectorAll('.register-event-btn');
  if (!registerButtons.length) return;
  registerButtons.forEach(btn => {
    btn.onclick = function() {
      window.open('https://docs.google.com/forms/d/1v7mYI1tdt-Vg4x5x91rGELZE6grWB_VM79_15n6M3ms/viewform', '_blank');
    };
  });
}

function setupEnrollButtons() {
  const enrollButtons = document.querySelectorAll('.enroll-vol-btn');
  if (!enrollButtons.length) return;
  enrollButtons.forEach(btn => {
    btn.onclick = function() {
      window.open('https://docs.google.com/forms/d/1v7mYI1tdt-Vg4x5x91rGELZE6grWB_VM79_15n6M3ms/viewform', '_blank');
    };
  });
}

// Update loadPage to call setupRegisterButtons after loading events page
function loadPage(page) {
  content.innerHTML = pages[page] || pages.home;
  navLinks.forEach(link => link.classList.remove('active'));
  document.getElementById('nav-' + page).classList.add('active');
  
  // Handle home page animations
  if (page === 'home') {
    const sections = content.querySelectorAll('section');
    const logo = content.querySelector('.club-logo');
    
    // Reset and animate sections
    sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      setTimeout(() => {
        section.style.transition = 'all 0.8s ease-out';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, index * 200);
    });
    
    // Animate logo if it exists
    if (logo) {
      logo.style.opacity = '0';
      logo.style.transform = 'scale(0.8) rotate(-10deg)';
      setTimeout(() => {
        logo.style.transition = 'all 1s ease-out';
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1) rotate(0deg)';
      }, 600);
    }
  }
  
  if (page === 'events') setupRegisterButtons();
  if (page === 'volunteering') setupEnrollButtons();
}

// --- Admin/Visitor Access Logic ---
let isAdmin = false;

const adminLoginBtn = document.getElementById('admin-login-btn');
const logoutBtn = document.getElementById('logout-btn');
const adminPanelNav = document.getElementById('admin-panel-nav');
const adminLoginModal = document.getElementById('admin-login-modal');
const adminLoginForm = document.getElementById('admin-login-form');
const adminLoginError = document.getElementById('admin-login-error');

function showVisitorUI() {
  isAdmin = false;
  if (adminLoginBtn) adminLoginBtn.style.display = '';
  if (logoutBtn) logoutBtn.style.display = 'none';
  if (adminPanelNav) adminPanelNav.style.display = 'none';
}

function showAdminUI() {
  isAdmin = true;
  if (adminLoginBtn) adminLoginBtn.style.display = 'none';
  if (logoutBtn) logoutBtn.style.display = '';
  if (adminPanelNav) adminPanelNav.style.display = '';
}

// Show admin login modal
if (adminLoginBtn) {
  adminLoginBtn.onclick = function() {
    if (adminLoginModal) {
      adminLoginModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      if (adminLoginError) adminLoginError.style.display = 'none';
      document.getElementById('admin-username').value = '';
      document.getElementById('admin-password').value = '';
    }
  };
}
// Hide admin modal on successful login
if (logoutBtn) {
  logoutBtn.onclick = function() {
    showVisitorUI();
    loadPage('home');
  };
}
// Admin login form logic
if (adminLoginForm) {
  adminLoginForm.onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value;
    if (username === 'rotaractadmin' && password === 'secure2025') {
      if (adminLoginModal) adminLoginModal.style.display = 'none';
      document.body.style.overflow = '';
      showAdminUI();
      loadPage('admin');
    } else {
      if (adminLoginError) {
        adminLoginError.textContent = 'Invalid admin username or password.';
        adminLoginError.style.display = 'block';
      }
    }
  };
}
// Hide admin modal if clicked outside content
if (adminLoginModal) {
  adminLoginModal.onclick = function(e) {
    if (e.target === adminLoginModal) {
      adminLoginModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };
}

// --- Admin Panel Page ---
pages.admin = `
  <section id="admin-panel">
    <h2>Admin Panel</h2>
    <p>Welcome, Admin! Here you can manage events, view registrations, and more.</p>
    <div style="margin-top:2rem;">
      <button style="padding:0.7rem 1.5rem;margin:0.5rem 0.5rem 0 0;background:#b4002d;color:#fff;border:none;border-radius:8px;font-weight:600;">Manage Events</button>
      <button style="padding:0.7rem 1.5rem;margin:0.5rem 0.5rem 0 0;background:#b4002d;color:#fff;border:none;border-radius:8px;font-weight:600;">View Registrations</button>
      <button style="padding:0.7rem 1.5rem;margin:0.5rem 0.5rem 0 0;background:#b4002d;color:#fff;border:none;border-radius:8px;font-weight:600;">Settings</button>
    </div>
  </section>
`;

// --- Sample registration data (replace with your actual data source)
const registrations = [
  { name: "John Doe", email: "john@example.com", phone: "1234567890", event: "Blood Donation" },
  { name: "Jane Smith", email: "jane@example.com", phone: "9876543210", event: "Tree Plantation" }
];

// --- Function to render registration table
function renderRegistrationTable() {
  let html = `
    <h2>Registered People</h2>
    <table border="1" cellpadding="8" style="width:100%;border-collapse:collapse;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
  `;
  if (registrations.length === 0) {
    html += `<tr><td colspan="4" style="text-align:center;">No registrations found.</td></tr>`;
  } else {
    registrations.forEach(reg => {
      html += `
        <tr>
          <td>${reg.name}</td>
          <td>${reg.email}</td>
          <td>${reg.phone}</td>
          <td>${reg.event}</td>
        </tr>
      `;
    });
  }
  html += `
      </tbody>
    </table>
  `;
  document.getElementById('content').innerHTML = html;
}

// Example: Call this function when admin clicks "View Registration"
// You should add an event listener for your admin panel navigation
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'view-registration-btn') {
    renderRegistrationTable();
  }
});

// --- Override login modal logic for admin ---
document.addEventListener('DOMContentLoaded', () => {
  // Default: visitor UI
  showVisitorUI();
  // Always set hash to #home on load
  location.hash = '#home';
  loadPage('home');
});

// --- Restrict admin panel access ---
window.addEventListener('hashchange', () => {
  const page = location.hash.replace('#', '') || 'home';
  if (page === 'admin' && !isAdmin) {
    alert('Admin access only. Please login as admin.');
    loadPage('home');
    return;
  }
  loadPage(page);
}); 

// --- Rotaract Club FAQ Chatbot Assistant ---
(function() {
  const faqs = [
    {
      q: /what is rotaract|about rotaract|rotaract club/i,
      a: "Rotaract is a global movement of young leaders who are committed to service, leadership, and fellowship. Our club organizes events, volunteering, and personal development activities."
    },
    {
      q: /how to join|become.*member|join.*club/i,
      a: "To join the Rotaract Club, simply contact us via the email or phone on the home page, or attend one of our events! New members are always welcome."
    },
    {
      q: /who can join|age limit|eligibility/i,
      a: "Anyone aged 18-30 with a passion for service and leadership can join Rotaract."
    },
    {
      q: /what activities|what events|what do you do/i,
      a: "We organize community service, professional development, sports, and social events. Check our Events and Announcements sections for details!"
    },
    {
      q: /fees|cost|membership fee/i,
      a: "Membership fees are minimal and go towards club activities and community projects. Contact us for current rates."
    },
    {
      q: /meeting|when.*meet|where.*meet/i,
      a: "We meet monthly at our local community center. Details are shared with members and on our website."
    },
    {
      q: /contact|email|phone/i,
      a: "You can contact us at info.rotaractclub@email.com or +91 90000 12345."
    },
    {
      q: /who is president|club president/i,
      a: "Our current club president is Riya Mehra."
    },
    {
      q: /volunteer|volunteering/i,
      a: "We have many volunteering opportunities! Check the Volunteering section for upcoming activities."
    },
    {
      q: /donate|how to donate/i,
      a: "Thank you for your interest in supporting us! Visit the Donate section to make a contribution."
    }
  ];
  const defaultAnswer = "I'm here to help with questions about the Rotaract Club! Try asking about joining, events, volunteering, or contact info.";

  const widget = document.getElementById('chatbot-widget');
  const toggle = document.getElementById('chatbot-toggle');
  const windowEl = document.getElementById('chatbot-window');
  const close = document.getElementById('chatbot-close');
  const messages = document.getElementById('chatbot-messages');
  const form = document.getElementById('chatbot-form');
  const input = document.getElementById('chatbot-input');

  if (!widget) return;

  function appendMessage(text, sender) {
    const div = document.createElement('div');
    div.className = 'chatbot-message ' + sender;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function getAnswer(q) {
    for (const f of faqs) {
      if (f.q.test(q)) return f.a;
    }
    return defaultAnswer;
  }

  toggle.onclick = function() {
    windowEl.style.display = 'flex';
    setTimeout(() => input.focus(), 200);
  };
  close.onclick = function() {
    windowEl.style.display = 'none';
  };
  form.onsubmit = function(e) {
    e.preventDefault();
    const userQ = input.value.trim();
    if (!userQ) return;
    appendMessage(userQ, 'user');
    input.value = '';
    setTimeout(() => {
      appendMessage(getAnswer(userQ), 'bot');
    }, 400);
  };
})();