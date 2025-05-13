document.addEventListener('DOMContentLoaded',()=>{

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');
  const links = mobileMenu.querySelectorAll('a');

  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;

    // Toggle menu visibility
    mobileMenu.classList.toggle('hidden');

    // Animation hamburger → croix
    if (menuOpen) {
      line1.classList.add('rotate-45', 'top-2.5');
      line2.classList.add('opacity-0');
      line3.classList.add('-rotate-45', 'top-2.5');
    } else {
      line1.classList.remove('rotate-45', 'top-2.5');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-rotate-45', 'top-2.5');
    }
  });

  // Fermer menu quand on clique sur un lien
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      line1.classList.remove('rotate-45', 'top-2.5');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-rotate-45', 'top-2.5');
      menuOpen = false;
    });
  });

  // Scroll doux
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });


  const ctx = document.getElementById('bitcoinChart').getContext('2d');

  const bitcoinChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
      datasets: [{
        label: 'Prix du Bitcoin (en USD)',
        data: [57000, 64000, 69000, 83000, 98000, 102000],
        backgroundColor: 'rgba(234, 179, 8, 0.1)', // Jaune pâle
        borderColor: 'rgba(234, 179, 8, 1)', // Jaune Tailwind
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3, // courbe douce
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: { color: '#ccc' },
          grid: { color: '#333' }
        },
        y: {
          ticks: { color: '#ccc' },
          grid: { color: '#333' }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#fff'
          }
        }
      }
    }
  });



  const faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');

      // Ferme les autres réponses
      document.querySelectorAll('.faq-toggle').forEach(btn => {
        if (btn !== toggle) {
          btn.nextElementSibling.classList.add('hidden');
          btn.querySelector('i').classList.remove('rotate-180');
        }
      });

      // Toggle actuel
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });







})
