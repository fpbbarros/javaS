class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document); //OK

    this._inputData = $('#data');  //OK
    this._inputQuantidade = $('#quantidade'); //OK
    this._inputValor = $('#valor'); //OK
    
    this._listaNegociacoes = new ListaNegociacoes(); //OK
    this._negociacoesView = new NegociacoesView($('.negociacoesView')); //OK
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem);

  }

  adiciona(event) {
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = 'Negociacão adcionada com sucesso!';
    this._mensagemView.update(this._mensagem);
    this._limpaFormulario();
  };

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  };

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  };
}

