document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation on scroll
    const fadeIns = document.querySelectorAll('.fade-in-section');
    if (fadeIns.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        fadeIns.forEach(section => observer.observe(section));
    }

    // Scroll-to-top button
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Modal logic mapping
    const imgModal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    
    if (imgModal && modalImg) {
        // Find specific images for projects in both pages
        const projectImgs = document.querySelectorAll('.project-card img, .project-img');

        projectImgs.forEach(img => {
            img.addEventListener('click', (e) => {
                // Prevent default in case it's in a link (like in index.html)
                e.preventDefault(); 
                modalImg.src = img.src;
                imgModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        imgModal.addEventListener('click', () => {
            imgModal.style.display = 'none';
            document.body.style.overflow = '';
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imgModal.style.display === 'flex') {
                imgModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        setTimeout(() => window.scrollTo(0, 0), 0);
    }
});
