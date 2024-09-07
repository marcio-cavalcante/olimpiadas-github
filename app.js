function pesquisar() {

    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Linha para depuração, mostra o elemento no console
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada elemento (dado) no array 'dados'
    for (let dado of dados) {
      // Concatena HTML para cada resultado, formatando os dados do objeto
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais info.</a>
        </div>
      `;
    }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }