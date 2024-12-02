/* Este trecho de código usa a função querySelectorAll para selecionar todos os elementos HTML que possuem a classe .panel.*/
const panels = document.querySelectorAll('.panel'); /*const panels -> Define uma constante chamada panels, que armazenará o resultado da seleção de elementos.
É usada aqui a palavra-chave const proque a variável não será reatribuida. No entanto, os elementos dentro de panels podem ser manipulados.
document.querySelectorAll('.panel'); -> É um método da DOM (Document Object Model) que retorna uma NodeList contendo todos os elementos que correspondem ao selector
CSS especificado.
.panel -> Um selector CSS que representa elementos com a classe panel. No HTML que possuem a classe panel. No HTML, isso significa elementos marcados como 
<div class="panel">, <section class="panel"> etc.
*/

/* Este trecho de código manipula interações em elementos DOM com a classe .panel. Adiciona funcionalidades de clique para que apenas um painel tenha a classe active por vez */
panels.forEach(panel => { /* Itera por cada elemento do NodeList retornado por querySelectorAll('.panel'); 
    O método forEach executra uma função para cada panel (cada elemento da lista de painéis)*/ 
    panel.addEventListener('click', () => { /* Adiciona um ouvinte de evento a cada painel 
        O evento click é disparado quando o painel é clicado e a função é fornecida (callback) é executada. */
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() { /* Remove a classe active de todos os paineis, garantindo que nenhum painel permanece "ativo" antes de ativar o painel atual */
    panels.forEach(panel => {
        panel.classList.remove('active'); /* Adiciona a classe ative ao painel que foi clicado. Isso faz com que o painel receba estilos definidos pelo CSS 
        para a classe active */
    });
}
