// Translation Data
const translations = {
    es: {
        "nav-start": "Inicio",
        "nav-trajectory": "Trayectoria",
        "nav-services": "Servicios",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "hero-tag": "Docente Técnico & Research Engineer",
        "hero-title": "¿Buscas una <span class='text-gradient'>solución digital</span> que funcione?",
        "hero-desc": "Convierto tus ideas en plataformas web eficientes, seguras y diseñadas para el éxito. <span class='text-accent-cyan font-medium'>Docente Técnico</span> con Máster en Investigación, operando desde Guayaquil para el mundo.",
        "hero-btn-projects": "Ver Proyectos",
        "traj-title": "Excelencia <span class='text-accent-cyan'>Académica</span>",
        "traj-subtitle": "Formación de cuarto nivel dedicada a la investigación y la tecnología.",
        "traj-post": "Postgrado",
        "traj-msc": "Master en Educación Superior Universitaria e Investigación",
        "traj-msc-desc": "Especializado en metodologías de investigación científica y pedagogía avanzada para el entorno universitario tecnológico.",
        "traj-msc-level": "Título de Cuarto Nivel",
        "traj-degree": "Grado",
        "traj-lic": "Licenciatura en Educación y Sistemas Multimedia",
        "traj-lic-desc": "Fundamentos sólidos en el desarrollo de ecosistemas digitales, diseño multimedia y educación técnica especializada.",
        "traj-lic-level": "Título Profesional",
        "serv-title": "Servicios <span class='text-accent-cyan text-gradient'>Especializados</span>",
        "serv-subtitle": "Soluciones digitales integrales diseñadas para potenciar tu presencia y eficiencia operativa.",
        "serv-1-title": "Desarrollo Web & Apps",
        "serv-1-desc": "Sitios modernos, responsivos y aplicaciones a medida con enfoque en UX/UI y rendimiento SEO.",
        "serv-2-title": "Seguridad & Redes",
        "serv-2-desc": "Instalación de CCTV avanzado, configuración de redes corporativas y soporte técnico especializado.",
        "serv-3-title": "IA & Automatización",
        "serv-3-desc": "Implementación de agentes de IA para procesos empresariales y CRM personalizados para gestión de clientes.",
        "cert-title": "Certificaciones <span class='text-accent-cyan'>Premium</span>",
        "cert-subtitle": "Formación validada por líderes mundiales en tecnología."
    },
    en: {
        "nav-start": "Home",
        "nav-trajectory": "Trajectory",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-tag": "Technical Teacher & Research Engineer",
        "hero-title": "Looking for a <span class='text-gradient'>digital solution</span> that works?",
        "hero-desc": "I turn your ideas into efficient, secure web platforms designed for success. <span class='text-accent-cyan font-medium'>Technical Teacher</span> with a Master's in Research, operating from Guayaquil for the world.",
        "hero-btn-projects": "View Projects",
        "traj-title": "Academic <span class='text-accent-cyan'>Excellence</span>",
        "traj-subtitle": "Fourth-level training dedicated to research and technology.",
        "traj-post": "Postgraduate",
        "traj-msc": "Master in Higher University Education and Research",
        "traj-msc-desc": "Specialized in scientific research methodologies and advanced pedagogy for the technological university environment.",
        "traj-msc-level": "Fourth Level Degree",
        "traj-degree": "Undergraduate",
        "traj-lic": "Bachelor in Education and Multimedia Systems",
        "traj-lic-desc": "Solid foundations in the development of digital ecosystems, multimedia design, and specialized technical education.",
        "traj-lic-level": "Professional Degree",
        "serv-title": "Specialized <span class='text-accent-cyan text-gradient'>Services</span>",
        "serv-subtitle": "Comprehensive digital solutions designed to boost your presence and operational efficiency.",
        "serv-1-title": "Web & App Development",
        "serv-1-desc": "Modern, responsive sites and custom applications with a focus on UX/UI and SEO performance.",
        "serv-2-title": "Security & Networks",
        "serv-2-desc": "Advanced CCTV installation, corporate network configuration, and specialized technical support.",
        "serv-3-title": "AI & Automation",
        "serv-3-desc": "Implementation of AI agents for business processes and custom CRM for customer management.",
        "cert-title": "Premium <span class='text-accent-cyan'>Certifications</span>",
        "cert-subtitle": "Training validated by world leaders in technology."
    }
};

let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    const btn = document.getElementById('lang-toggle');
    const btnMobile = document.getElementById('lang-toggle-mobile');
    if(btn) btn.textContent = currentLang === 'es' ? 'ENGLISH' : 'ESPAÑOL';
    if(btnMobile) btnMobile.textContent = currentLang === 'es' ? 'EN' : 'ES';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Translation Events
    const langBtn = document.getElementById('lang-toggle');
    const langBtnMobile = document.getElementById('lang-toggle-mobile');
    if(langBtn) langBtn.addEventListener('click', toggleLanguage);
    if(langBtnMobile) langBtnMobile.addEventListener('click', toggleLanguage);

    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize AOS Animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }

    // Swiper Tech Carousel
    if (typeof Swiper !== 'undefined') {
        new Swiper(".techSwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
            },
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Scroll Top Button
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.remove('opacity-0', 'invisible');
            } else {
                scrollTopBtn.classList.add('opacity-0', 'invisible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
