/* ===============================================
FUNCIONALIDADE: MENU HAMBÚRGUER
Requisitos: Funcionalidades interativas.
===============================================
*/

// 'DOMContentLoaded' garante que o script só rode
// depois que todo o HTML foi carregado.
document.addEventListener('DOMContentLoaded', function() {

  // 1. Encontre os elementos no HTML
  const botaoHamburguer = document.getElementById('menu-hamburguer');
  const listaMenu = document.getElementById('menu-lista');

  // 2. Verifique se os elementos existem (evita erros)
  if (botaoHamburguer && listaMenu) {
    
    // 3. Adicione o "escutador de clique" no botão
    botaoHamburguer.addEventListener('click', function() {
      
      // 4.  Adiciona ou Remove a classe '.menu-aberto'
      listaMenu.classList.toggle('menu-aberto');
      
      // Adiciona ou Remove a classe '.ativo' no botão (para animar o X)
      botaoHamburguer.classList.toggle('ativo');

      // 5. Acessibilidade: Atualiza o 'aria-expanded'
      const estaAberto = listaMenu.classList.contains('menu-aberto');
      botaoHamburguer.setAttribute('aria-expanded', estaAberto);
      botaoHamburguer.setAttribute('aria-label', estaAberto ? 'Fechar menu' : 'Abrir menu');
    });
  }
});