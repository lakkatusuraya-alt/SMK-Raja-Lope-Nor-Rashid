document.addEventListener('DOMContentLoaded', () => {
    
    // --- Pengendali Hamburger Menu Responsif ---
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Tutup menu paparan telefon pintar apabila pautan diklik
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- Ucapan Dinamik Berdasarkan Waktu Sistem ---
    const greetingElement = document.getElementById('welcomeGreeting');
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greetingMsg = "Selamat Datang ke Hub SMKRLNR";

        if (currentHour < 12) {
            greetingMsg = "Selamat Pagi! Selamat Datang ke Hub SMKRLNR";
        } else if (currentHour < 14) {
            greetingMsg = "Selamat Tengah Hari! Selamat Datang ke Hub SMKRLNR";
        } else if (currentHour < 19) {
            greetingMsg = "Selamat Petang! Selamat Datang ke Hub SMKRLNR";
        } else {
            greetingMsg = "Selamat Malam! Selamat Datang ke Hub SMKRLNR";
        }
        greetingElement.textContent = greetingMsg;
    }

    // --- Pengendali Hantaran Borang Kelab Kod ---
    const joinForm = document.getElementById('joinForm');
    const feedback = document.getElementById('formFeedback');

    if (joinForm && feedback) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Menghentikan muat semula halaman (page refresh)

            const name = document.getElementById('studentName').value.trim();
            const email = document.getElementById('studentEmail').value.trim();
            const track = document.getElementById('trackPreference').value;

            // Beri maklum balas sukses kepada pelajar
            feedback.textContent = `Terima kasih, ${name}! Permohonan anda untuk fokus ${track.toUpperCase()} telah berjaya dihantar secara simulasi.`;
            feedback.className = "success";
            feedback.classList.remove('hidden');

            // Set semula borang input
            joinForm.reset();

            // Sorokkan semula notifikasi maklum balas selepas 6 saat
            setTimeout(() => {
                feedback.classList.add('hidden');
            }, 6000);
        });
    }
});