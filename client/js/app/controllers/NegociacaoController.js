class NegociacaoController {

    // É atraves deste intermedio (a classe), que vou capturar as ações do usuario..
    constructor(){

        //Atribui o document.querySelector ao $, para ficar mais tranquilo a codificao
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(

            //Spread operator, permite esparrama os itens de um array em sequencia
            ...this._inputData.value
            .split('-')
            .map((item, i) => item - i % 2))
        
         let negociacao = new Negociacao(
             data,
             this._inputQuantidade.value,
             this._inputValor.value
         );

         console.log(negociacao)
    }
}