class Negociacao {

    constructor(data, quantidade, valor){

        //Metodos Privados, somente a propria classe pode acessa-los
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // O get nos permite criar um metodo, 
    // Que temos acesso de somente Leitura
    // Desta forma, o metodo se parece com uma propriedade,
    // Porem, não é possivel atribuir valores ao mesmo
    get volume(){
        return this.quantidade * this.valor;
    }

    //Metodos acessadores
    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}