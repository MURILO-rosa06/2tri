const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResulatdo = document.querySelector(".texto-Resultado");

const perguntas = [
    {
    enunciado: "Segundo a lei 9.605/98, fazer mal ao meio ambiente é punido com ?",
    alternativas: [
        {
texto:"A Lei nº9.605/98 se aplica a todo o território brasileiro",
afirmacao: "você entende sobre as leis"
        },
        {
        texto: "não sei",
        afirmação: "você não conhece as leis"
        }
]
  },
  {
    enunciado: "Todos nós sabemos da importância de frear o Aquecimento Global, seus causadores são:",
    alternativas: [
        {
texto: "As grandes empresas que vem desde a Revolução Industrial afetando a camada de ozõnio",
afirmacao: "Você acredita que os únicos responsáveeis pelo aquecimento global são as empresas"
        },
        {
texto:"A culpa é toda do ser humano",
afirmacao:"você acredita que todos são culpados pelo aquecimento global"
        }
]
  },
  {
    enunciado: "Controlar, conter e combater são funções da Fiscalização Ambiental: ",
    alternativas: [
        {
texto: "A fiscalização ambiental ocorre pelo Ibama",
afimacao: "Você entende sobre a fiscalização ambiental"
        },
        {
texto: "A fiscalização ambiental ocorre pelo Saneamento Básico",
afirmacao: "você não entende sobre fiscalização"
        }
]
  }
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";
    
    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }
    
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }
    
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }
    
    function mostraResultado() {
        caixaPerguntas.textContent = "Olha só o que pensamos sobre você...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    
    mostraPergunta();