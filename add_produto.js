function adicionarItem(){
    var produtos = document.getElementById('Produto_add').value;
    var quantidade = document.getElementById('quant_add').value;
    var li_produto = document.getElementById('lista_PRODUTO');
    var li_quantidade = document.getElementById('lista_QUANTIDADE'); 
    var itens = [];




    const saveLista = (text) => {

        
        // criando a tag "li"
        const lista_produto = document.createElement("li");
        //dando uma lass a essa tag
        lista_produto.classList.add("lista_PRODUTO");
        //criando tap "p"
        const produto = document.createElement("p");
        //dando um texto a tap "p"
        produto.innerText= text[0];
        //adcionado a tag "li" um valor
        lista_produto.appendChild(produto);
        //adcionado o valor de li na pagina lista visual
        lista_PRODUTOS.appendChild (lista_produto);
        
        localStorage
        
        

        const lista_quatidade = document.createElement("li");
        lista_quatidade.classList.add("lista_QUANTIDADE");
        const quantidade = document.createElement("p");
        quantidade.innerText= text[1];
        lista_quatidade.appendChild(quantidade);
        lista_QUANTIDADES.appendChild (lista_quatidade);
        

        


    
        const botao_quant = document.createElement("button");
        botao_quant.classList.add("edit");
        botao_quant.innerHTML = '<i class="fa-solid fa-pen"></i>';
        lista_quatidade.appendChild(botao_quant);
        
        const botao_produto = document.createElement("button");
        botao_produto.classList.add("edit");
        botao_produto.innerHTML = '<i class="fa-solid fa-pen"></i>';
        lista_produto.appendChild(botao_produto);
        

    }


    if (produtos == '' || quantidade == ''){
        alert('Preencha os espaços vazio');
    }else{
        document.getElementById('Produto_add').value = '';
        document.getElementById('quant_add').value = '';
        itens.push(produtos, quantidade);
        saveLista (itens);
    }
    
}
