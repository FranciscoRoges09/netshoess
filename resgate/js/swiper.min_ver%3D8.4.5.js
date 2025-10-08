/*
 * Script de Inicialização do Carrossel Swiper
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o elemento com a classe .swiper
    const swiper = new Swiper('.swiper', {
      // Configurações do Carrossel
      
      loop: true, // Faz o carrossel deslizar infinitamente
      speed: 1000, // Velocidade da transição em 1 segundo
      
      // Avanço automático
      autoplay: {
        delay: 4000, // Espera 4 segundos
        disableOnInteraction: false, // Continua rodando mesmo após o usuário interagir
      },

      // Paginação (os pontos)
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navegação (as setas)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});