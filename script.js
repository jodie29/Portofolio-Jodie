// 1. TOGGLE MENU (Mobile)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.textContent = '☰'; 
    });
});


// 2. DARK MODE TOGGLE
const themeToggle = document.getElementById('theme-toggle');

// Fungsi untuk mengatur tema dan ikon (simbol unicode)
function setTheme(isDark) {
    if (isDark) {
        document.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        themeToggle.textContent = '☀️'; // Simbol Matahari
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
        themeToggle.textContent = '🌙'; // Simbol Bulan
    }
}

// Cek preferensi saat memuat halaman
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-theme') {
    setTheme(true);
} else {
    setTheme(false); 
}

themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-theme');
    setTheme(isDark);
});


// 3. PROJECT FILTERING
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Atur status aktif pada tombol
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});