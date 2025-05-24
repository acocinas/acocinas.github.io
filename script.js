const bubbles = document.querySelectorAll('.bubble');
const infoPanel = document.getElementById('info');

bubbles.forEach(bubble => {
  bubble.addEventListener('click', () => {
    const contentType = bubble.getAttribute('data-content');
    let content = '';
    switch(contentType) {
      case 'sobreMi':
        content = 'Desarrollador Backend con experiencia en Java, Spring Boot, MySQL... Adaptable, comunicativo y orientado a resultados.';
        break;
      case 'skills':
        content = 'Java, Spring Boot, MySQL, MongoDB, API REST, JUnit, Postman, Git, Maven, WebFlux, R2DBC...';
        break;
      case 'experiencia':
        content = 'Soficat Xerox (Asesor Comercial), Amazon (Asociado Logístico), As de Pikas (Gerente).';
        break;
      case 'contacto':
        content = '📧 alcogar79@gmail.com | 🔗 LinkedIn: alfonso-cocinas | 🐙 GitHub: acocinas';
        break;
    }
    infoPanel.innerHTML = content;
    infoPanel.classList.add('active');
  });
});

