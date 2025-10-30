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
  /* ===============================================
  ENTREGA III - FUNCIONALIDADE: MÁSCARAS DE FORMULÁRIO
  Requisitos: Verificação de consistência de dados em formulários.
  ===============================================
  */

  // 1. Encontrar os campos do formulário
  const inputCPF = document.getElementById('cpf');
  const inputTelefone = document.getElementById('telefone');
  const inputCEP = document.getElementById('cep');

  // 2. Função Auxiliar para aplicar a máscara
  // (maxLength = tamanho máximo do campo)
  // (pattern = o formato que quero, ex: "XXX.XXX.XXX-XX")
  const aplicarMascara = (input, pattern, maxLength) => {
    // Pega o valor atual, removendo tudo que NÃO for número
    let valor = input.value.replace(/\D/g, ''); 
    let valorMascarado = '';

    // Limita o tamanho máximo
    if (valor.length > maxLength) {
      valor = valor.substring(0, maxLength);
    }

    // Itera sobre o padrão (pattern) e o valor (só números)
    let i = 0;
    let j = 0;
    while (i < pattern.length && j < valor.length) {
      if (pattern[i] === 'X') {
        // Se o padrão pede um número ('X'), nós o adicionamos
        valorMascarado += valor[j];
        j++;
      } else {
        // Se o padrão pede um caractere especial ('.', '-', '(', ')', ' '),
        // nós o adicionamos
        valorMascarado += pattern[i];
      }
      i++;
    }
    // Define o valor do input como o valor mascarado
    input.value = valorMascarado;
  };

  // 3. Adicionar os "escutadores de input"
  
  // Máscara de CPF (XXX.XXX.XXX-XX)
  if (inputCPF) {
    inputCPF.addEventListener('input', () => {
      // O 'X' representa onde um número deve ir
      aplicarMascara(inputCPF, 'XXX.XXX.XXX-XX', 11);
    });
  }

  // Máscara de Telefone ((XX) XXXXX-XXXX)
  if (inputTelefone) {
    inputTelefone.addEventListener('input', () => {
      aplicarMascara(inputTelefone, '(XX) XXXXX-XXXX', 11);
    });
  }

  // Máscara de CEP (XXXXX-XXX)
  if (inputCEP) {
    inputCEP.addEventListener('input', () => {
      aplicarMascara(inputCEP, 'XXXXX-XXX', 8);
    });
  }

}); // <-- FECHAMENTO DO DOMCONTENTLOADED.