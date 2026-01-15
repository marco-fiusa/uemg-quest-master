// questions.js
// =======================================
// BANCO DE QUESTÕES – UEMG QUEST MASTER
// 30 questões por matéria (10F / 10M / 10D)
// =======================================

export const QUESTIONS = [

/* =====================================================
   MATEMÁTICA
===================================================== */
// ---------- FÁCIL ----------
{
  subject:"Matemática", level:"facil",
  q:"Quanto é 10% de 200?",
  options:["10","20","30","40"],
  correct:1,
  explanation:"10% é a décima parte. 200 ÷ 10 = 20."
},
{
  subject:"Matemática", level:"facil",
  q:"Resolva: x + 5 = 12",
  options:["5","6","7","8"],
  correct:2,
  explanation:"Isolando x: x = 12 − 5 = 7."
},
{
  subject:"Matemática", level:"facil",
  q:"A média de 4 e 6 é:",
  options:["4","5","6","7"],
  correct:1,
  explanation:"(4 + 6) ÷ 2 = 5."
},
{
  subject:"Matemática", level:"facil",
  q:"Quanto é 50% de 80?",
  options:["20","30","40","50"],
  correct:2,
  explanation:"50% é a metade. Metade de 80 é 40."
},
{
  subject:"Matemática", level:"facil",
  q:"2² é igual a:",
  options:["2","3","4","5"],
  correct:2,
  explanation:"2² = 2 × 2 = 4."
},
{
  subject:"Matemática", level:"facil",
  q:"Qual número vem depois de 9?",
  options:["9","10","11","12"],
  correct:1,
  explanation:"A sequência natural segue 9 → 10."
},
{
  subject:"Matemática", level:"facil",
  q:"Quanto é 3 + 7?",
  options:["8","9","10","11"],
  correct:2,
  explanation:"3 + 7 = 10."
},
{
  subject:"Matemática", level:"facil",
  q:"O dobro de 6 é:",
  options:["6","10","12","14"],
  correct:2,
  explanation:"Dobro é multiplicar por 2: 6 × 2 = 12."
},
{
  subject:"Matemática", level:"facil",
  q:"Qual é o maior número?",
  options:["3","7","1","5"],
  correct:1,
  explanation:"7 é o maior valor apresentado."
},
{
  subject:"Matemática", level:"facil",
  q:"10 − 4 é:",
  options:["4","5","6","7"],
  correct:2,
  explanation:"10 − 4 = 6."
},

// ---------- MODERADA ----------
{
  subject:"Matemática", level:"moderada",
  q:"Resolva: 2x = 14",
  options:["5","6","7","8"],
  correct:2,
  explanation:"Divida ambos os lados por 2: x = 7."
},
{
  subject:"Matemática", level:"moderada",
  q:"Quanto é 25% de 200?",
  options:["25","40","50","60"],
  correct:2,
  explanation:"25% é 1/4. 200 ÷ 4 = 50."
},
{
  subject:"Matemática", level:"moderada",
  q:"O valor de x em x − 3 = 10 é:",
  options:["7","10","13","14"],
  correct:2,
  explanation:"x = 10 + 3 = 13."
},
{
  subject:"Matemática", level:"moderada",
  q:"A área de um quadrado de lado 4 é:",
  options:["8","12","16","20"],
  correct:2,
  explanation:"Área = lado² → 4² = 16."
},
{
  subject:"Matemática", level:"moderada",
  q:"5² é:",
  options:["10","20","25","30"],
  correct:2,
  explanation:"5² = 5 × 5 = 25."
},
{
  subject:"Matemática", level:"moderada",
  q:"Qual é a raiz quadrada de 49?",
  options:["5","6","7","8"],
  correct:2,
  explanation:"7 × 7 = 49."
},
{
  subject:"Matemática", level:"moderada",
  q:"Quanto é 3 × (4 + 2)?",
  options:["12","14","18","20"],
  correct:2,
  explanation:"Primeiro parênteses: 6. Depois 3 × 6 = 18."
},
{
  subject:"Matemática", level:"moderada",
  q:"Qual fração equivale a 0,5?",
  options:["1/4","1/3","1/2","2/3"],
  correct:2,
  explanation:"0,5 = metade = 1/2."
},
{
  subject:"Matemática", level:"moderada",
  q:"10³ é:",
  options:["10","100","1000","10000"],
  correct:2,
  explanation:"10³ = 10 × 10 × 10 = 1000."
},
{
  subject:"Matemática", level:"moderada",
  q:"Se x = 5, quanto vale 2x + 1?",
  options:["9","10","11","12"],
  correct:2,
  explanation:"2 × 5 + 1 = 11."
},

// ---------- DIFÍCIL ----------
{
  subject:"Matemática", level:"dificil",
  q:"Se o dobro de um número menos 4 é 10, esse número é:",
  options:["5","6","7","8"],
  correct:2,
  explanation:"2x − 4 = 10 → 2x = 14 → x = 7."
},
{
  subject:"Matemática", level:"dificil",
  q:"Qual é 15% de 200?",
  options:["20","25","30","35"],
  correct:2,
  explanation:"10% = 20, 5% = 10 → 15% = 30."
},
{
  subject:"Matemática", level:"dificil",
  q:"A soma dos ângulos internos de um triângulo é:",
  options:["90°","180°","270°","360°"],
  correct:1,
  explanation:"Todo triângulo soma 180°."
},
{
  subject:"Matemática", level:"dificil",
  q:"Se x² = 16, x pode ser:",
  options:["4","−4","4 ou −4","8"],
  correct:2,
  explanation:"Quadrado de 4 e de −4 resulta em 16."
},
{
  subject:"Matemática", level:"dificil",
  q:"Qual é a raiz de 81?",
  options:["7","8","9","10"],
  correct:2,
  explanation:"9 × 9 = 81."
},
{
  subject:"Matemática", level:"dificil",
  q:"Se 3x = 27, x é:",
  options:["6","7","8","9"],
  correct:3,
  explanation:"27 ÷ 3 = 9."
},
{
  subject:"Matemática", level:"dificil",
  q:"Quanto é (2 + 3)²?",
  options:["10","15","25","30"],
  correct:2,
  explanation:"(5)² = 25."
},
{
  subject:"Matemática", level:"dificil",
  q:"Se um número é múltiplo de 2 e 5, ele termina em:",
  options:["2","4","5","0"],
  correct:3,
  explanation:"Múltiplo de 2 e 5 termina em 0."
},
{
  subject:"Matemática", level:"dificil",
  q:"O perímetro de um quadrado de lado 6 é:",
  options:["12","18","24","30"],
  correct:2,
  explanation:"Perímetro = 4 × lado = 24."
},
{
  subject:"Matemática", level:"dificil",
  q:"Qual número é primo?",
  options:["4","6","8","7"],
  correct:3,
  explanation:"7 é divisível apenas por 1 e por ele mesmo."
},

// ==================================================
// PORTUGUÊS – FÁCIL (10)
// ==================================================
{
  subject:"Português", level:"facil",
  q:"A finalidade principal de um texto informativo é:",
  options:["Convencer","Informar","Emocionar","Divertir"],
  correct:1,
  explanation:"Texto informativo tem como objetivo transmitir informações."
},
{
  subject:"Português", level:"facil",
  q:"Sinônimo de 'feliz' é:",
  options:["Triste","Alegre","Bravo","Cansado"],
  correct:1,
  explanation:"Alegre tem o mesmo sentido de feliz."
},
{
  subject:"Português", level:"facil",
  q:"Antônimo de 'claro' é:",
  options:["Limpo","Escuro","Branco","Aberto"],
  correct:1,
  explanation:"Escuro é o oposto de claro."
},
{
  subject:"Português", level:"facil",
  q:"Uma frase que termina com ponto de interrogação é:",
  options:["Afirmativa","Exclamativa","Imperativa","Interrogativa"],
  correct:3,
  explanation:"Ponto de interrogação indica pergunta."
},
{
  subject:"Português", level:"facil",
  q:"Plural de 'cidadão' é:",
  options:["Cidadões","Cidadãos","Cidadães","Cidadons"],
  correct:1,
  explanation:"Plural correto: cidadãos."
},
{
  subject:"Português", level:"facil",
  q:"Qual palavra está escrita corretamente?",
  options:["Excessão","Exceção","Ecessão","Exeção"],
  correct:1,
  explanation:"A forma correta é exceção."
},
{
  subject:"Português", level:"facil",
  q:"A sílaba tônica de 'café' é:",
  options:["ca","fé","caf","é"],
  correct:1,
  explanation:"A sílaba mais forte é 'fé'."
},
{
  subject:"Português", level:"facil",
  q:"Qual é um substantivo?",
  options:["Correr","Bonito","Casa","Rápido"],
  correct:2,
  explanation:"Casa nomeia um ser → substantivo."
},
{
  subject:"Português", level:"facil",
  q:"Verbos indicam:",
  options:["Objetos","Qualidades","Ações","Lugares"],
  correct:2,
  explanation:"Verbos expressam ações, estados ou fenômenos."
},
{
  subject:"Português", level:"facil",
  q:"A palavra 'menino' é:",
  options:["Verbo","Adjetivo","Substantivo","Advérbio"],
  correct:2,
  explanation:"Menino nomeia um ser → substantivo."
},

// ==================================================
// PORTUGUÊS – MODERADA (10)
// ==================================================
{
  subject:"Português", level:"moderada",
  q:"Interpretação de texto exige principalmente:",
  options:["Decorar frases","Opinião pessoal","Entender ideias implícitas","Conhecer gramática"],
  correct:2,
  explanation:"Vestibulares cobram o que está implícito no texto."
},
{
  subject:"Português", level:"moderada",
  q:"Em textos, palavras como 'portanto' indicam:",
  options:["Exemplo","Conclusão","Dúvida","Contradição"],
  correct:1,
  explanation:"Portanto indica conclusão."
},
{
  subject:"Português", level:"moderada",
  q:"A função do pronome é:",
  options:["Nomear","Substituir o substantivo","Indicar ação","Qualificar"],
  correct:1,
  explanation:"Pronome substitui ou acompanha o substantivo."
},
{
  subject:"Português", level:"moderada",
  q:"Coesão textual está relacionada a:",
  options:["Tema","Ligação entre frases","Opinião","Ortografia"],
  correct:1,
  explanation:"Coesão liga as partes do texto."
},
{
  subject:"Português", level:"moderada",
  q:"Uma metáfora é:",
  options:["Comparação explícita","Comparação implícita","Repetição","Contradição"],
  correct:1,
  explanation:"Metáfora é comparação implícita."
},
{
  subject:"Português", level:"moderada",
  q:"Qual alternativa NÃO apresenta erro?",
  options:["A gente vamos","Houveram problemas","Faz dois anos","Há dois anos"],
  correct:3,
  explanation:"'Há dois anos' indica tempo decorrido."
},
{
  subject:"Português", level:"moderada",
  q:"Texto argumentativo tem como objetivo:",
  options:["Narrar","Descrever","Convencer","Informar"],
  correct:2,
  explanation:"Argumentação busca convencer o leitor."
},
{
  subject:"Português", level:"moderada",
  q:"Conjunções servem para:",
  options:["Nomear","Ligar orações","Indicar tempo","Caracterizar"],
  correct:1,
  explanation:"Conjunções conectam ideias."
},
{
  subject:"Português", level:"moderada",
  q:"Em 'Ele chegou cansado', 'cansado' é:",
  options:["Substantivo","Verbo","Adjetivo","Advérbio"],
  correct:2,
  explanation:"Adjetivo caracteriza o sujeito."
},
{
  subject:"Português", level:"moderada",
  q:"A linguagem formal é usada:",
  options:["Em conversas informais","Em provas e textos oficiais","Em gírias","Em memes"],
  correct:1,
  explanation:"Vestibular cobra linguagem formal."
},

// ==================================================
// PORTUGUÊS – DIFÍCIL (10)
// ==================================================
{
  subject:"Português", level:"dificil",
  q:"Em interpretação, alternativas com 'sempre' ou 'nunca' costumam:",
  options:["Estar corretas","Ser exageradas","Ser neutras","Ser literais"],
  correct:1,
  explanation:"Termos absolutos são pegadinhas comuns."
},
{
  subject:"Português", level:"dificil",
  q:"Paráfrase significa:",
  options:["Copiar o texto","Reescrever mantendo o sentido","Mudar o tema","Contradizer"],
  correct:1,
  explanation:"Paráfrase mantém o sentido com outras palavras."
},
{
  subject:"Português", level:"dificil",
  q:"Ironia ocorre quando:",
  options:["Diz o oposto do que parece","Explica","Enumera","Compara"],
  correct:0,
  explanation:"Ironia diz o contrário do sentido literal."
},
{
  subject:"Português", level:"dificil",
  q:"Função conativa da linguagem foca no:",
  options:["Emissor","Mensagem","Receptor","Código"],
  correct:2,
  explanation:"Conativa tenta influenciar o receptor."
},
{
  subject:"Português", level:"dificil",
  q:"Texto dissertativo-argumentativo exige:",
  options:["Narrativa","Opinião sem base","Tese + argumentos","Diálogo"],
  correct:2,
  explanation:"Redação cobra tese e argumentos."
},
{
  subject:"Português", level:"dificil",
  q:"Ambiguidade ocorre quando:",
  options:["Há clareza","Há duplo sentido","Há erro","Há exagero"],
  correct:1,
  explanation:"Ambiguidade gera dois sentidos."
},
{
  subject:"Português", level:"dificil",
  q:"Em 'Vende-se casas', o erro está em:",
  options:["Verbo","Plural","Concordância","Pontuação"],
  correct:2,
  explanation:"O correto é 'Vendem-se casas'."
},
{
  subject:"Português", level:"dificil",
  q:"Texto injuntivo tem como função:",
  options:["Narrar","Convencer","Instruir","Descrever"],
  correct:2,
  explanation:"Injuntivo orienta ações."
},
{
  subject:"Português", level:"dificil",
  q:"A norma-padrão é usada:",
  options:["Sempre","Nunca","Em contextos formais","Apenas na fala"],
  correct:2,
  explanation:"Norma-padrão é exigida em provas."
},
{
  subject:"Português", level:"dificil",
  q:"Sentido conotativo é:",
  options:["Literal","Figurado","Técnico","Objetivo"],
  correct:1,
  explanation:"Conotativo é sentido figurado."
},
// ==================================================
// FÍSICA – FÁCIL (10)
// ==================================================
{
  subject:"Física", level:"facil",
  q:"A unidade de força no SI é:",
  options:["Joule (J)","Newton (N)","Watt (W)","Pascal (Pa)"],
  correct:1,
  explanation:"Força no SI é medida em Newton (N). Joule é energia, Watt é potência e Pascal é pressão."
},
{
  subject:"Física", level:"facil",
  q:"Se a força resultante sobre um corpo é zero, ele:",
  options:["Sempre acelera","Fica parado obrigatoriamente","Mantém seu estado de movimento","Aumenta sua massa"],
  correct:2,
  explanation:"Pela 1ª Lei de Newton (inércia), resultante zero → aceleração zero. Então ele pode ficar em repouso OU em movimento retilíneo uniforme."
},
{
  subject:"Física", level:"facil",
  q:"A velocidade média é dada por:",
  options:["Δt/Δs","Δs/Δt","s·t","s/t²"],
  correct:1,
  explanation:"Velocidade média = variação do espaço / variação do tempo (Δs/Δt)."
},
{
  subject:"Física", level:"facil",
  q:"Um corpo em queda livre (desprezando o ar) tem aceleração aproximadamente:",
  options:["1 m/s²","5 m/s²","10 m/s²","100 m/s²"],
  correct:2,
  explanation:"A aceleração da gravidade na Terra é cerca de 9,8 m/s², arredondada para 10 m/s² em vestibulares."
},
{
  subject:"Física", level:"facil",
  q:"Corrente elétrica é:",
  options:["Energia em movimento","Carga elétrica em movimento","Tensão acumulada","Potência guardada"],
  correct:1,
  explanation:"Corrente elétrica é o fluxo de cargas elétricas (normalmente elétrons) através de um condutor."
},
{
  subject:"Física", level:"facil",
  q:"A unidade de energia no SI é:",
  options:["Newton","Joule","Watt","Ampère"],
  correct:1,
  explanation:"Energia no SI é medida em Joule (J)."
},
{
  subject:"Física", level:"facil",
  q:"Potência é:",
  options:["Energia por tempo","Força por área","Massa por volume","Velocidade por tempo"],
  correct:0,
  explanation:"Potência é a taxa de transferência de energia: P = E/Δt."
},
{
  subject:"Física", level:"facil",
  q:"Em um circuito simples, a tensão é medida em:",
  options:["Ampère","Ohm","Volt","Watt"],
  correct:2,
  explanation:"Tensão elétrica (diferença de potencial) é medida em Volts (V)."
},
{
  subject:"Física", level:"facil",
  q:"A resistência elétrica é medida em:",
  options:["Ohm","Volt","Joule","Newton"],
  correct:0,
  explanation:"Resistência elétrica é medida em Ohm (Ω)."
},
{
  subject:"Física", level:"facil",
  q:"Um espelho plano forma imagem:",
  options:["Real e invertida","Virtual e direita","Real e direita","Virtual e invertida"],
  correct:1,
  explanation:"Espelho plano forma imagem virtual (não projeta) e direita (não inverte verticalmente)."
},

// ==================================================
// FÍSICA – MODERADA (10)
// ==================================================
{
  subject:"Física", level:"moderada",
  q:"Um corpo de massa 2 kg sofre aceleração de 3 m/s². A força resultante é:",
  options:["2 N","3 N","5 N","6 N"],
  correct:3,
  explanation:"Pela 2ª Lei de Newton: F = m·a = 2·3 = 6 N."
},
{
  subject:"Física", level:"moderada",
  q:"Um carro percorre 120 km em 2 h. Sua velocidade média é:",
  options:["30 km/h","40 km/h","60 km/h","80 km/h"],
  correct:2,
  explanation:"v = Δs/Δt = 120/2 = 60 km/h."
},
{
  subject:"Física", level:"moderada",
  q:"Lei de Ohm: V = R·I. Se V=12 V e R=3 Ω, a corrente é:",
  options:["1 A","2 A","3 A","4 A"],
  correct:3,
  explanation:"I = V/R = 12/3 = 4 A."
},
{
  subject:"Física", level:"moderada",
  q:"Um corpo de 4 kg está sob força de 20 N. A aceleração é:",
  options:["2 m/s²","4 m/s²","5 m/s²","10 m/s²"],
  correct:2,
  explanation:"a = F/m = 20/4 = 5 m/s²."
},
{
  subject:"Física", level:"moderada",
  q:"A energia cinética de um corpo é dada por:",
  options:["m·g·h","(1/2)·m·v²","F·d","P·t"],
  correct:1,
  explanation:"Energia cinética: Ec = (1/2) m v². mgh é energia potencial gravitacional."
},
{
  subject:"Física", level:"moderada",
  q:"Um aparelho de 1000 W ligado por 2 h consome energia de:",
  options:["0,5 kWh","1 kWh","2 kWh","1002 kWh"],
  correct:2,
  explanation:"1000 W = 1 kW. Energia = P·t = 1 kW·2 h = 2 kWh."
},
{
  subject:"Física", level:"moderada",
  q:"A pressão é definida por:",
  options:["F·A","F/A","A/F","m·g"],
  correct:1,
  explanation:"Pressão: P = F/A. Quanto menor a área, maior a pressão para a mesma força."
},
{
  subject:"Física", level:"moderada",
  q:"Um objeto de 2 kg está a 5 m de altura (g=10). Energia potencial é:",
  options:["10 J","50 J","100 J","250 J"],
  correct:2,
  explanation:"Ep = mgh = 2·10·5 = 100 J."
},
{
  subject:"Física", level:"moderada",
  q:"Um corpo recebe 200 J em 10 s. A potência média é:",
  options:["10 W","20 W","100 W","2000 W"],
  correct:1,
  explanation:"P = E/Δt = 200/10 = 20 W."
},
{
  subject:"Física", level:"moderada",
  q:"Em MRU, a aceleração é:",
  options:["Positiva","Negativa","Zero","Variável"],
  correct:2,
  explanation:"No Movimento Retilíneo Uniforme, velocidade é constante, portanto aceleração é zero."
},

// ==================================================
// FÍSICA – DIFÍCIL (10)
// ==================================================
{
  subject:"Física", level:"dificil",
  q:"Se a velocidade de um corpo dobra, a energia cinética:",
  options:["Dobra","Triplica","Quadruplica","Não muda"],
  correct:2,
  explanation:"Ec ∝ v². Se v dobra, v² fica 4 vezes maior → Ec quadruplica."
},
{
  subject:"Física", level:"dificil",
  q:"Um resistor de 6 Ω em paralelo com outro de 3 Ω tem resistência equivalente:",
  options:["9 Ω","2 Ω","3 Ω","4 Ω"],
  correct:1,
  explanation:"Em paralelo: 1/Req = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → Req = 2 Ω."
},
{
  subject:"Física", level:"dificil",
  q:"Dois resistores 2 Ω e 4 Ω em série têm resistência equivalente:",
  options:["2 Ω","4 Ω","6 Ω","8 Ω"],
  correct:2,
  explanation:"Em série soma direto: Req = 2 + 4 = 6 Ω."
},
{
  subject:"Física", level:"dificil",
  q:"Um corpo cai de 45 m (g=10) a partir do repouso. O tempo de queda é:",
  options:["2 s","3 s","4 s","5 s"],
  correct:1,
  explanation:"Queda: h = (1/2) g t² → 45 = 5 t² → t²=9 → t=3 s."
},
{
  subject:"Física", level:"dificil",
  q:"Um corpo de 10 kg em superfície sem atrito recebe força de 30 N. Em 4 s, o Δv é:",
  options:["3 m/s","6 m/s","12 m/s","30 m/s"],
  correct:1,
  explanation:"a=F/m=30/10=3 m/s². Δv = a·t = 3·4 = 12 m/s. (Atenção!)"
},
{
  subject:"Física", level:"dificil",
  q:"Corrigindo a anterior: para 10 kg e 30 N, em 4 s, o Δv é:",
  options:["3 m/s","6 m/s","12 m/s","30 m/s"],
  correct:2,
  explanation:"a = 30/10 = 3 m/s². Δv = 3·4 = 12 m/s. (Essa é a conta correta.)"
},
{
  subject:"Física", level:"dificil",
  q:"A potência elétrica pode ser calculada por:",
  options:["P = V/I","P = V·I","P = I/R","P = R/V"],
  correct:1,
  explanation:"Potência elétrica: P = V·I. Também pode ser P = I²R ou P = V²/R."
},
{
  subject:"Física", level:"dificil",
  q:"Uma lâmpada 60 W ligada em 120 V tem corrente aproximada:",
  options:["0,25 A","0,5 A","1 A","2 A"],
  correct:1,
  explanation:"P = V·I → I = P/V = 60/120 = 0,5 A."
},
{
  subject:"Física", level:"dificil",
  q:"Se a pressão atmosférica aumenta, a temperatura de ebulição da água:",
  options:["Diminui","Aumenta","Some","Não muda"],
  correct:1,
  explanation:"Quanto maior a pressão externa, maior a temperatura necessária para ferver."
},
{
  subject:"Física", level:"dificil",
  q:"Em uma lente convergente, objeto além do foco forma imagem:",
  options:["Sempre virtual","Real e invertida","Virtual e maior","Real e direita"],
  correct:1,
  explanation:"Para lente convergente com objeto fora do foco: imagem real e invertida (podendo variar o tamanho)."
},

// ==================================================
// QUÍMICA – FÁCIL (10)
// ==================================================
{
  subject:"Química", level:"facil",
  q:"pH menor que 7 indica solução:",
  options:["Básica","Neutra","Ácida","Salina"],
  correct:2,
  explanation:"pH < 7 é ácido; pH = 7 é neutro; pH > 7 é básico."
},
{
  subject:"Química", level:"facil",
  q:"A água (H₂O) é um exemplo de:",
  options:["Elemento","Mistura","Composto","Metal"],
  correct:2,
  explanation:"H₂O tem dois elementos quimicamente ligados → composto."
},
{
  subject:"Química", level:"facil",
  q:"Na tabela periódica, o número atômico (Z) representa:",
  options:["Nêutrons","Prótons","Elétrons + nêutrons","Massa"],
  correct:1,
  explanation:"Z = número de prótons no núcleo (define o elemento)."
},
{
  subject:"Química", level:"facil",
  q:"Uma ligação iônica ocorre por:",
  options:["Compartilhamento de elétrons","Transferência de elétrons","Fusão nuclear","Quebra do núcleo"],
  correct:1,
  explanation:"Ligação iônica: um doa elétron e outro recebe, formando íons."
},
{
  subject:"Química", level:"facil",
  q:"NaCl é formado por:",
  options:["Dois ametais","Metal e ametal","Dois metais","Gases nobres"],
  correct:1,
  explanation:"Sódio (metal) + cloro (ametal) → ligação iônica."
},
{
  subject:"Química", level:"facil",
  q:"O símbolo do oxigênio é:",
  options:["Ox","O","Og","Oi"],
  correct:1,
  explanation:"Símbolo químico do oxigênio é O."
},
{
  subject:"Química", level:"facil",
  q:"Uma mistura homogênea tem:",
  options:["Uma fase","Duas fases","Sempre sólido","Sempre líquido"],
  correct:0,
  explanation:"Homogênea apresenta apenas uma fase visível."
},
{
  subject:"Química", level:"facil",
  q:"A unidade de quantidade de matéria no SI é:",
  options:["Kg","Mol","L","Pa"],
  correct:1,
  explanation:"Quantidade de matéria é medida em mol."
},
{
  subject:"Química", level:"facil",
  q:"Combustão completa do carbono produz:",
  options:["CO","CO₂","CH₄","H₂"],
  correct:1,
  explanation:"Combustão completa produz dióxido de carbono (CO₂)."
},
{
  subject:"Química", level:"facil",
  q:"Ácido clorídrico é representado por:",
  options:["H₂SO₄","HCl","NaOH","NaCl"],
  correct:1,
  explanation:"HCl é o ácido clorídrico."
},

// ==================================================
// QUÍMICA – MODERADA (10)
// ==================================================
{
  subject:"Química", level:"moderada",
  q:"Ligação covalente ocorre quando há:",
  options:["Transferência de elétrons","Compartilhamento de elétrons","Perda de prótons","Fusão de núcleos"],
  correct:1,
  explanation:"Entre ametais ocorre compartilhamento → ligação covalente."
},
{
  subject:"Química", level:"moderada",
  q:"Se um átomo tem Z=17, ele é:",
  options:["Sódio","Cloro","Oxigênio","Carbono"],
  correct:1,
  explanation:"Z=17 corresponde ao cloro (Cl)."
},
{
  subject:"Química", level:"moderada",
  q:"Uma base (Arrhenius) em água libera:",
  options:["H⁺","OH⁻","Na⁺","Cl⁻"],
  correct:1,
  explanation:"Base libera íons hidróxido (OH⁻) em solução aquosa."
},
{
  subject:"Química", level:"moderada",
  q:"A fórmula do hidróxido de sódio é:",
  options:["NaCl","NaOH","HCl","H₂O"],
  correct:1,
  explanation:"NaOH é a soda cáustica."
},
{
  subject:"Química", level:"moderada",
  q:"Separar areia e água pode ser feito por:",
  options:["Destilação","Filtração","Cromatografia","Sublimação"],
  correct:1,
  explanation:"Areia é sólido insolúvel → filtração separa sólido do líquido."
},
{
  subject:"Química", level:"moderada",
  q:"A concentração comum (g/L) é:",
  options:["massa do soluto / volume da solução","volume do soluto / massa da solução","massa do solvente / volume","número de mol / pressão"],
  correct:0,
  explanation:"Concentração comum: C = m/V (em g/L)."
},
{
  subject:"Química", level:"moderada",
  q:"Quando o pH aumenta, a solução fica:",
  options:["Mais ácida","Mais básica","Mais neutra sempre","Sem mudança"],
  correct:1,
  explanation:"pH maior indica menor acidez e maior basicidade."
},
{
  subject:"Química", level:"moderada",
  q:"O sal de cozinha (NaCl) em água forma mistura:",
  options:["Heterogênea","Homogênea","Sempre sólida","Sempre gasosa"],
  correct:1,
  explanation:"O sal se dissolve e a solução fica uniforme → homogênea."
},
{
  subject:"Química", level:"moderada",
  q:"Em reações, o que se conserva é:",
  options:["Número de mol sempre","Massa total","Temperatura","Volume total"],
  correct:1,
  explanation:"Lei de Lavoisier: massa se conserva (em sistema fechado)."
},
{
  subject:"Química", level:"moderada",
  q:"Uma reação exotérmica:",
  options:["Absorve calor","Libera calor","Não envolve energia","Congela tudo"],
  correct:1,
  explanation:"Exotérmica libera energia para o ambiente (calor)."
},

// ==================================================
// QUÍMICA – DIFÍCIL (10)
// ==================================================
{
  subject:"Química", level:"dificil",
  q:"Um átomo neutro com Z=11 tem quantos elétrons?",
  options:["11","10","12","22"],
  correct:0,
  explanation:"Átomo neutro: nº de elétrons = nº de prótons = Z. Então tem 11 elétrons."
},
{
  subject:"Química", level:"dificil",
  q:"Se um átomo tem 13 prótons e 14 nêutrons, seu número de massa (A) é:",
  options:["1","13","14","27"],
  correct:3,
  explanation:"A = prótons + nêutrons = 13 + 14 = 27."
},
{
  subject:"Química", level:"dificil",
  q:"Se 1 mol tem 6,02×10²³ partículas, 2 mol têm:",
  options:["6,02×10²³","1,204×10²⁴","3,01×10²³","12,04×10²³"],
  correct:1,
  explanation:"2 mol é o dobro: 2·6,02×10²³ = 1,204×10²⁴."
},
{
  subject:"Química", level:"dificil",
  q:"Na tabela periódica, elementos do mesmo grupo têm:",
  options:["Mesmo número de prótons","Mesmo número de elétrons de valência","Mesma massa","Mesma eletronegatividade sempre"],
  correct:1,
  explanation:"Mesmo grupo → mesma quantidade de elétrons na camada de valência → comportamento químico parecido."
},
{
  subject:"Química", level:"dificil",
  q:"Aumentando a temperatura, a velocidade das reações geralmente:",
  options:["Diminui","Aumenta","Some","Fica constante"],
  correct:1,
  explanation:"Temperatura maior → mais colisões eficazes → reação mais rápida (cinética química)."
},
{
  subject:"Química", level:"dificil",
  q:"Uma solução 2 mol/L significa:",
  options:["2 mol de solvente por litro","2 mol de soluto por litro de solução","2 g por litro","2 mol por kg"],
  correct:1,
  explanation:"Molaridade: M = mol do soluto / litro da solução."
},
{
  subject:"Química", level:"dificil",
  q:"O que caracteriza uma oxidação?",
  options:["Ganho de elétrons","Perda de elétrons","Ganho de prótons","Perda de nêutrons"],
  correct:1,
  explanation:"Oxidação = perda de elétrons (LEO). Redução = ganho (GER)."
},
{
  subject:"Química", level:"dificil",
  q:"Em neutralização, ácido + base formam:",
  options:["Metal","Sal + água","Água + gás","Apenas sal"],
  correct:1,
  explanation:"Neutralização típica: ácido + base → sal + água."
},
{
  subject:"Química", level:"dificil",
  q:"Quanto maior a eletronegatividade, maior a tendência de:",
  options:["Perder elétrons","Atrair elétrons","Virar gás nobre","Ser metal"],
  correct:1,
  explanation:"Eletronegatividade mede a atração por elétrons em ligações químicas."
},
{
  subject:"Química", level:"dificil",
  q:"Catalisador em uma reação:",
  options:["Aumenta energia de ativação","Diminui energia de ativação","É consumido completamente","Impede a reação"],
  correct:1,
  explanation:"Catalisador cria um caminho alternativo com menor energia de ativação e não é consumido no final."
},

// ==================================================
// BIOLOGIA – FÁCIL (10)
// ==================================================
{
  subject:"Biologia", level:"facil",
  q:"A organela responsável pela respiração celular (ATP) é:",
  options:["Núcleo","Mitocôndria","Ribossomo","Lisossomo"],
  correct:1,
  explanation:"Mitocôndria produz ATP na respiração celular."
},
{
  subject:"Biologia", level:"facil",
  q:"O DNA fica principalmente no:",
  options:["Citoplasma","Núcleo","Lisossomo","Membrana"],
  correct:1,
  explanation:"Em células eucarióticas, o DNA fica no núcleo."
},
{
  subject:"Biologia", level:"facil",
  q:"Fotossíntese ocorre em qual organela?",
  options:["Mitocôndria","Cloroplasto","Núcleo","Ribossomo"],
  correct:1,
  explanation:"Cloroplasto realiza fotossíntese em plantas e algas."
},
{
  subject:"Biologia", level:"facil",
  q:"Seres vivos que produzem seu próprio alimento são:",
  options:["Heterótrofos","Autótrofos","Decompositores","Parasitas"],
  correct:1,
  explanation:"Autótrofos produzem matéria orgânica (ex: plantas)."
},
{
  subject:"Biologia", level:"facil",
  q:"O sangue é classificado como:",
  options:["Tecido epitelial","Tecido conjuntivo","Tecido muscular","Tecido nervoso"],
  correct:1,
  explanation:"Sangue é um tecido conjuntivo especializado."
},
{
  subject:"Biologia", level:"facil",
  q:"A unidade básica dos seres vivos é:",
  options:["Molécula","Célula","Órgão","Tecido"],
  correct:1,
  explanation:"A célula é a unidade estrutural e funcional da vida."
},
{
  subject:"Biologia", level:"facil",
  q:"Os ribossomos fazem:",
  options:["Digestão","Síntese de proteínas","Respiração","Armazenamento de DNA"],
  correct:1,
  explanation:"Ribossomos produzem proteínas."
},
{
  subject:"Biologia", level:"facil",
  q:"Vacinas estimulam principalmente:",
  options:["Digestão","Memória imunológica","Respiração","Visão"],
  correct:1,
  explanation:"Vacina ativa o sistema imune e cria memória para resposta mais rápida."
},
{
  subject:"Biologia", level:"facil",
  q:"A água é importante para as células porque:",
  options:["Diminui reações","É solvente e participa do metabolismo","Substitui oxigênio","Evita nutrição"],
  correct:1,
  explanation:"Água é solvente e meio das reações bioquímicas."
},
{
  subject:"Biologia", level:"facil",
  q:"A função do coração é:",
  options:["Filtrar sangue","Bombear sangue","Produzir hormônios","Fazer digestão"],
  correct:1,
  explanation:"O coração bombeia o sangue pelo corpo."
},

// ==================================================
// BIOLOGIA – MODERADA (10)
// ==================================================
{
  subject:"Biologia", level:"moderada",
  q:"O processo de divisão celular para crescimento e regeneração é:",
  options:["Meiose","Mitose","Fecundação","Mutação"],
  correct:1,
  explanation:"Mitose gera células geneticamente iguais para crescimento e reparo."
},
{
  subject:"Biologia", level:"moderada",
  q:"A meiose tem como principal função:",
  options:["Crescimento","Produzir gametas","Cicatrização","Digestão"],
  correct:1,
  explanation:"Meiose forma gametas com metade do número de cromossomos."
},
{
  subject:"Biologia", level:"moderada",
  q:"Na cadeia alimentar, produtores são:",
  options:["Carnívoros","Plantas e algas","Fungos","Detritívoros"],
  correct:1,
  explanation:"Produtores são autótrofos que fazem fotossíntese."
},
{
  subject:"Biologia", level:"moderada",
  q:"O que é ecologia?",
  options:["Estudo das células","Estudo das relações dos seres vivos com o ambiente","Estudo de rochas","Estudo de vírus apenas"],
  correct:1,
  explanation:"Ecologia analisa interações entre seres vivos e o meio."
},
{
  subject:"Biologia", level:"moderada",
  q:"A respiração celular ocorre principalmente:",
  options:["No núcleo","Na mitocôndria","No cloroplasto","No ribossomo"],
  correct:1,
  explanation:"A mitocôndria transforma energia dos nutrientes em ATP."
},
{
  subject:"Biologia", level:"moderada",
  q:"O que é um gene?",
  options:["Um carboidrato","Um trecho de DNA com informação","Uma célula","Um órgão"],
  correct:1,
  explanation:"Gene é uma sequência de DNA que codifica uma característica/proteína."
},
{
  subject:"Biologia", level:"moderada",
  q:"O sistema ABO de sangue é determinado por:",
  options:["Apenas ambiente","Genes e antígenos","Somente dieta","Somente idade"],
  correct:1,
  explanation:"Tipos sanguíneos dependem de genes que definem antígenos na hemácia."
},
{
  subject:"Biologia", level:"moderada",
  q:"Bactérias são:",
  options:["Eucariontes","Procariontes","Sempre multicelulares","Fungos"],
  correct:1,
  explanation:"Bactérias são procariontes: sem núcleo organizado."
},
{
  subject:"Biologia", level:"moderada",
  q:"Decompositores no ecossistema são principalmente:",
  options:["Plantas","Animais herbívoros","Fungos e bactérias","Peixes"],
  correct:2,
  explanation:"Fungos e bactérias reciclam matéria orgânica."
},
{
  subject:"Biologia", level:"moderada",
  q:"A fotossíntese produz:",
  options:["CO₂ e água","Glicose e O₂","Somente ATP","Somente proteínas"],
  correct:1,
  explanation:"Fotossíntese: CO₂ + H₂O + luz → glicose + O₂."
},

// ==================================================
// BIOLOGIA – DIFÍCIL (10)
// ==================================================
{
  subject:"Biologia", level:"dificil",
  q:"A osmose é o movimento de:",
  options:["Soluto do mais para o menos concentrado","Água do meio menos concentrado para o mais concentrado","Água do mais para o menos concentrado","Elétrons no citoplasma"],
  correct:1,
  explanation:"Osmose: água atravessa membrana indo do meio hipotônico (menos solutos) para o hipertônico (mais solutos)."
},
{
  subject:"Biologia", level:"dificil",
  q:"Mutação genética é:",
  options:["Mudança no DNA","Mudança no pH","Mudança no clima","Mudança no músculo"],
  correct:0,
  explanation:"Mutação é alteração no DNA. Pode ser neutra, prejudicial ou vantajosa."
},
{
  subject:"Biologia", level:"dificil",
  q:"Seleção natural favorece:",
  options:["Sempre os mais fortes","Os mais adaptados ao ambiente","Os maiores","Os mais rápidos sempre"],
  correct:1,
  explanation:"Seleção natural favorece quem se adapta melhor ao ambiente, aumentando chance de sobreviver e reproduzir."
},
{
  subject:"Biologia", level:"dificil",
  q:"Na respiração aeróbia, o aceptor final de elétrons é:",
  options:["CO₂","O₂","N₂","Glicose"],
  correct:1,
  explanation:"Na cadeia respiratória, o oxigênio é o aceptor final, formando água."
},
{
  subject:"Biologia", level:"dificil",
  q:"Um indivíduo heterozigoto para um gene Aa possui:",
  options:["Dois alelos iguais","Dois alelos diferentes","Nenhum alelo","Três alelos"],
  correct:1,
  explanation:"Heterozigoto tem alelos diferentes (A e a)."
},
{
  subject:"Biologia", level:"dificil",
  q:"Mitose resulta em:",
  options:["4 células haploides","2 células idênticas","2 células diferentes","1 célula haploide"],
  correct:1,
  explanation:"Mitose gera 2 células com o mesmo material genético da célula-mãe."
},
{
  subject:"Biologia", level:"dificil",
  q:"Meiose aumenta a variabilidade genética devido a:",
  options:["Replicação do DNA","Crossing-over e segregação independente","Somente mitose","Somente mutações"],
  correct:1,
  explanation:"Crossing-over (troca de partes) e segregação independente misturam genes, aumentando variabilidade."
},
{
  subject:"Biologia", level:"dificil",
  q:"Um antibiótico atua contra:",
  options:["Vírus","Bactérias","Proteínas do corpo","Células humanas diretamente"],
  correct:1,
  explanation:"Antibióticos agem em bactérias. Vírus não são afetados por antibióticos."
},
{
  subject:"Biologia", level:"dificil",
  q:"O efeito estufa intensificado impacta a biodiversidade porque:",
  options:["Diminui o sol","Altera clima e habitats","Elimina oxigênio","Aumenta a água potável"],
  correct:1,
  explanation:"Mudanças climáticas alteram habitats, causando migração, extinção e desequilíbrios ecológicos."
},
{
  subject:"Biologia", level:"dificil",
  q:"Cadeia alimentar: o nível com maior energia é:",
  options:["Predadores de topo","Consumidores secundários","Produtores","Consumidores primários"],
  correct:2,
  explanation:"A energia entra pelos produtores (fotossíntese). A cada nível, há perda de energia."
},

// ==================================================
// GEOGRAFIA – FÁCIL (10)
// ==================================================
{
  subject:"Geografia", level:"facil",
  q:"Globalização pode ser entendida como:",
  options:["Isolamento entre países","Integração econômica e cultural","Fim das cidades","Retorno ao feudalismo"],
  correct:1,
  explanation:"Globalização é aumento de conexões: comércio, tecnologia, cultura e circulação de informações."
},
{
  subject:"Geografia", level:"facil",
  q:"O Brasil está localizado principalmente no:",
  options:["Hemisfério Norte","Hemisfério Sul","Hemisfério Oriental","Polo Norte"],
  correct:1,
  explanation:"A maior parte do território brasileiro está no Hemisfério Sul."
},
{
  subject:"Geografia", level:"facil",
  q:"O clima predominante na Amazônia é:",
  options:["Desértico","Equatorial","Polar","Mediterrâneo"],
  correct:1,
  explanation:"A Amazônia tem clima equatorial: quente e úmido com chuvas abundantes."
},
{
  subject:"Geografia", level:"facil",
  q:"O efeito estufa é:",
  options:["Sempre ruim","Fenômeno natural que aquece a Terra","Apenas causado por carros","Uma chuva ácida"],
  correct:1,
  explanation:"O efeito estufa natural mantém a Terra habitável. O problema é sua intensificação por poluentes."
},
{
  subject:"Geografia", level:"facil",
  q:"Desmatamento pode aumentar:",
  options:["Biodiversidade","Erosão do solo","Terremotos","Nevascas"],
  correct:1,
  explanation:"Sem cobertura vegetal, o solo fica exposto e erosiona com chuva e vento."
},
{
  subject:"Geografia", level:"facil",
  q:"Capital de Minas Gerais é:",
  options:["Uberlândia","Belo Horizonte","Juiz de Fora","Montes Claros"],
  correct:1,
  explanation:"A capital de Minas Gerais é Belo Horizonte."
},
{
  subject:"Geografia", level:"facil",
  q:"Um recurso natural renovável é:",
  options:["Petróleo","Carvão","Energia solar","Urânio"],
  correct:2,
  explanation:"Energia solar é renovável. Petróleo, carvão e urânio são não renováveis."
},
{
  subject:"Geografia", level:"facil",
  q:"O relevo brasileiro se caracteriza por:",
  options:["Altas montanhas jovens","Predomínio de planaltos e depressões","Grandes desertos","Geleiras"],
  correct:1,
  explanation:"O Brasil tem relevo antigo e desgastado, com planaltos e depressões predominando."
},
{
  subject:"Geografia", level:"facil",
  q:"Migração é:",
  options:["Crescimento natural","Movimento de pessoas entre lugares","Mudança climática","Fenômeno geológico"],
  correct:1,
  explanation:"Migração é deslocamento de pessoas entre regiões ou países."
},
{
  subject:"Geografia", level:"facil",
  q:"Urbanização é:",
  options:["Crescimento do campo","Crescimento das cidades","Formação de rios","Aumento de florestas"],
  correct:1,
  explanation:"Urbanização é aumento da população e estrutura nas áreas urbanas."
},

// ==================================================
// GEOGRAFIA – MODERADA (10)
// ==================================================
{
  subject:"Geografia", level:"moderada",
  q:"Uma consequência comum da urbanização rápida é:",
  options:["Mais áreas verdes","Aumento de favelas e déficit de infraestrutura","Fim do trânsito","Redução da poluição sempre"],
  correct:1,
  explanation:"Urbanização acelerada sem planejamento gera moradia precária, trânsito, saneamento insuficiente e desigualdade."
},
{
  subject:"Geografia", level:"moderada",
  q:"O bioma característico do centro do Brasil é:",
  options:["Caatinga","Cerrado","Pampa","Pantanal sempre"],
  correct:1,
  explanation:"O Cerrado é o bioma típico do Brasil Central (MG, GO, TO, DF e partes de outros estados)."
},
{
  subject:"Geografia", level:"moderada",
  q:"A industrialização tende a concentrar-se:",
  options:["Em áreas isoladas","Perto de infraestrutura e mercado consumidor","Apenas no campo","Somente no Norte"],
  correct:1,
  explanation:"Indústrias buscam logística (rodovias/portos), energia, mão de obra e proximidade do mercado."
},
{
  subject:"Geografia", level:"moderada",
  q:"O aquecimento global está associado principalmente ao aumento de:",
  options:["Oxigênio","CO₂ e CH₄","Nitrogênio","Hélio"],
  correct:1,
  explanation:"CO₂ e CH₄ são gases do efeito estufa ligados à intensificação do aquecimento global."
},
{
  subject:"Geografia", level:"moderada",
  q:"Agronegócio se relaciona com:",
  options:["Produção rural integrada a indústria e exportação","Apenas agricultura familiar","Somente pecuária","Sem tecnologia"],
  correct:0,
  explanation:"Agronegócio integra produção, tecnologia, logística, indústria e comércio (muito ligado à exportação)."
},
{
  subject:"Geografia", level:"moderada",
  q:"O IDH considera principalmente:",
  options:["Somente renda","Educação, renda e longevidade","Somente população","Somente clima"],
  correct:1,
  explanation:"IDH combina renda, educação e expectativa de vida."
},
{
  subject:"Geografia", level:"moderada",
  q:"A desertificação é favorecida por:",
  options:["Excesso de vegetação","Manejo inadequado do solo e seca","Geleiras","Furacões"],
  correct:1,
  explanation:"Uso inadequado do solo + clima seco acelera perda de fertilidade e avanço de áreas áridas."
},
{
  subject:"Geografia", level:"moderada",
  q:"O setor terciário da economia envolve:",
  options:["Agricultura","Indústria","Serviços e comércio","Mineração"],
  correct:2,
  explanation:"Setor terciário = serviços e comércio (bancos, educação, saúde, transporte, varejo etc.)."
},
{
  subject:"Geografia", level:"moderada",
  q:"Poluição hídrica pode causar:",
  options:["Aumento de oxigênio","Eutrofização","Formação de gelo","Fim dos rios"],
  correct:1,
  explanation:"Eutrofização: excesso de nutrientes → algas crescem → consumo de oxigênio → morte de peixes."
},
{
  subject:"Geografia", level:"moderada",
  q:"A principal matriz elétrica do Brasil é:",
  options:["Carvão","Hidrelétrica","Nuclear","Eólica apenas"],
  correct:1,
  explanation:"O Brasil historicamente depende muito de hidrelétricas (embora eólica e solar cresçam)."
},

// ==================================================
// GEOGRAFIA – DIFÍCIL (10)
// ==================================================
{
  subject:"Geografia", level:"dificil",
  q:"A globalização pode aumentar desigualdades porque:",
  options:["Todos enriquecem igualmente","Empresas e capital se concentram em certos lugares","Acaba com tecnologia","Garante salários iguais"],
  correct:1,
  explanation:"A circulação de capital e tecnologia não é igual: centros econômicos se fortalecem e periferias podem ficar dependentes."
},
{
  subject:"Geografia", level:"dificil",
  q:"O conceito de 'rede urbana' refere-se a:",
  options:["Somente internet","Conjunto de cidades conectadas por fluxos e hierarquia","Somente estradas","Somente capitais"],
  correct:1,
  explanation:"Rede urbana envolve hierarquia e fluxos entre cidades: comércio, serviços, transporte e informação."
},
{
  subject:"Geografia", level:"dificil",
  q:"Uma característica de países desenvolvidos é:",
  options:["Baixo IDH","Alta natalidade","Alta expectativa de vida e serviços fortes","Economia apenas agrícola"],
  correct:2,
  explanation:"Países desenvolvidos tendem a ter IDH alto, serviços avançados e maior expectativa de vida."
},
{
  subject:"Geografia", level:"dificil",
  q:"A expansão agrícola na Amazônia está ligada a:",
  options:["Apenas turismo","Desmatamento e conflito fundiário","Aumento de geleiras","Fim de estradas"],
  correct:1,
  explanation:"Avanço agropecuário muitas vezes envolve desmatamento, grilagem e conflitos por terra."
},
{
  subject:"Geografia", level:"dificil",
  q:"O termo 'migrante pendular' descreve quem:",
  options:["Muda de país para sempre","Vai e volta diariamente (trabalho/estudo)","Não se desloca","Faz turismo anual"],
  correct:1,
  explanation:"Migração pendular: deslocamento frequente (geralmente diário) entre casa e trabalho/estudo."
},
{
  subject:"Geografia", level:"dificil",
  q:"Chuvas orográficas ocorrem quando:",
  options:["Ar frio desce sempre","Ar úmido sobe por barreira de relevo e condensa","Não há relevo","Chove só no mar"],
  correct:1,
  explanation:"Ar úmido sobe ao encontrar montanhas → resfria → condensa → chove no lado de barlavento."
},
{
  subject:"Geografia", level:"dificil",
  q:"O problema da ilhas de calor urbanas ocorre por:",
  options:["Mais árvores","Muito concreto/asfalto e pouca vegetação","Mais rios","Mais neve"],
  correct:1,
  explanation:"Asfalto e concreto absorvem e liberam calor, e a falta de vegetação reduz resfriamento por evapotranspiração."
},
{
  subject:"Geografia", level:"dificil",
  q:"A relação entre mineração e impactos ambientais inclui:",
  options:["Sempre melhora do solo","Risco de contaminação e degradação","Fim da água","Aumento de florestas"],
  correct:1,
  explanation:"Mineração pode causar contaminação, destruição de habitats, alteração de relevo e risco de acidentes."
},
{
  subject:"Geografia", level:"dificil",
  q:"A matriz energética mundial ainda depende fortemente de:",
  options:["Solar","Petróleo e carvão","Apenas eólica","Apenas nuclear"],
  correct:1,
  explanation:"Globalmente, combustíveis fósseis ainda dominam a matriz energética."
},
{
  subject:"Geografia", level:"dificil",
  q:"Risco ambiental e vulnerabilidade social se conectam porque:",
  options:["Pobres sempre moram em locais seguros","Quem tem menos recursos tende a viver em áreas de risco","Não existe relação","Só ocorre no campo"],
  correct:1,
  explanation:"Populações vulneráveis muitas vezes ocupam encostas, margens de rios e áreas sem infraestrutura, aumentando risco."
},

// ==================================================
// HISTÓRIA – FÁCIL (10)
// ==================================================
{
  subject:"História", level:"facil",
  q:"A Independência do Brasil ocorreu em:",
  options:["1808","1822","1888","1889"],
  correct:1,
  explanation:"A Independência foi proclamada em 1822."
},
{
  subject:"História", level:"facil",
  q:"A Proclamação da República ocorreu em:",
  options:["1822","1888","1889","1930"],
  correct:2,
  explanation:"A República foi proclamada em 1889."
},
{
  subject:"História", level:"facil",
  q:"A abolição da escravidão no Brasil ocorreu em:",
  options:["1822","1888","1889","1808"],
  correct:1,
  explanation:"Lei Áurea (1888) aboliu oficialmente a escravidão."
},
{
  subject:"História", level:"facil",
  q:"A Primeira Guerra Mundial ocorreu entre:",
  options:["1914-1918","1939-1945","1808-1822","1889-1930"],
  correct:0,
  explanation:"Primeira Guerra: 1914 a 1918."
},
{
  subject:"História", level:"facil",
  q:"A Segunda Guerra Mundial ocorreu entre:",
  options:["1914-1918","1939-1945","1929-1933","1964-1985"],
  correct:1,
  explanation:"Segunda Guerra: 1939 a 1945."
},
{
  subject:"História", level:"facil",
  q:"Getúlio Vargas chegou ao poder em:",
  options:["1889","1930","1964","2002"],
  correct:1,
  explanation:"Vargas chegou ao poder com a Revolução de 1930."
},
{
  subject:"História", level:"facil",
  q:"A capital do Brasil foi transferida para Brasília em:",
  options:["1500","1822","1960","1988"],
  correct:2,
  explanation:"Brasília foi inaugurada em 1960 e se tornou a capital."
},
{
  subject:"História", level:"facil",
  q:"O período da ditadura militar no Brasil começou em:",
  options:["1930","1945","1964","1989"],
  correct:2,
  explanation:"Golpe de 1964 iniciou a ditadura militar."
},
{
  subject:"História", level:"facil",
  q:"A Constituição Federal atual do Brasil é de:",
  options:["1967","1988","1946","1891"],
  correct:1,
  explanation:"A Constituição vigente é a de 1988."
},
{
  subject:"História", level:"facil",
  q:"O descobrimento (chegada portuguesa) ao Brasil ocorreu em:",
  options:["1492","1500","1530","1822"],
  correct:1,
  explanation:"A chegada de Cabral ocorreu em 1500."
},

// ==================================================
// HISTÓRIA – MODERADA (10)
// ==================================================
{
  subject:"História", level:"moderada",
  q:"O Estado Novo (1937-1945) foi marcado por:",
  options:["Democracia plena","Autoritarismo e censura","Monarquia","Voto feminino proibido"],
  correct:1,
  explanation:"No Estado Novo, Vargas centralizou poder, censurou imprensa e restringiu liberdades."
},
{
  subject:"História", level:"moderada",
  q:"A Guerra Fria foi um conflito principalmente:",
  options:["Direto com batalhas entre EUA e URSS","Ideológico e político entre EUA e URSS","Entre Brasil e Argentina","Entre Europa e África"],
  correct:1,
  explanation:"Foi uma disputa ideológica, econômica e militar indireta entre EUA (capitalismo) e URSS (socialismo)."
},
{
  subject:"História", level:"moderada",
  q:"A Revolução Industrial começou primeiro em:",
  options:["Brasil","EUA","Inglaterra","China"],
  correct:2,
  explanation:"Iniciou na Inglaterra no século XVIII, com máquinas e indústria têxtil."
},
{
  subject:"História", level:"moderada",
  q:"O Iluminismo defendia:",
  options:["Poder absoluto do rei","Razão e ciência","Feudalismo","Teocracia"],
  correct:1,
  explanation:"Iluminismo valorizou razão, liberdade, crítica ao absolutismo e direitos individuais."
},
{
  subject:"História", level:"moderada",
  q:"A República Velha no Brasil (1889-1930) foi marcada por:",
  options:["Ditadura militar","Política do café com leite e coronelismo","Estado Novo","Diretas Já"],
  correct:1,
  explanation:"Domínio das oligarquias (SP e MG) e poder local dos coronéis."
},
{
  subject:"História", level:"moderada",
  q:"A Crise de 1929 afetou principalmente:",
  options:["Economia agrícola medieval","Economia mundial e capitalismo","Apenas a Europa feudal","Somente a URSS"],
  correct:1,
  explanation:"Quebra da bolsa de NY gerou recessão global, desemprego e crise do modelo liberal clássico."
},
{
  subject:"História", level:"moderada",
  q:"A Inconfidência Mineira (1789) se relaciona com:",
  options:["Abolição da escravidão","Movimento separatista e insatisfação com impostos","Independência de 1822","República de 1889"],
  correct:1,
  explanation:"O movimento criticava a exploração portuguesa e a cobrança de impostos como a derrama."
},
{
  subject:"História", level:"moderada",
  q:"A Era Napoleônica influenciou o Brasil porque:",
  options:["Criou a república no Brasil","Levou a família real a vir para o Brasil","Aboliu a escravidão no Brasil","Fundou Brasília"],
  correct:1,
  explanation:"As guerras na Europa levaram a corte portuguesa a se transferir para o Brasil (1808)."
},
{
  subject:"História", level:"moderada",
  q:"A escravidão africana no Brasil foi ligada principalmente a:",
  options:["Trabalho industrial","Trabalho agrícola e mineração","Trabalho apenas intelectual","Somente comércio urbano leve"],
  correct:1,
  explanation:"Foi base econômica em engenhos de açúcar, mineração e grandes lavouras (café)."
},
{
  subject:"História", level:"moderada",
  q:"O período do 'milagre econômico' ocorreu durante:",
  options:["República Velha","Ditadura militar","Estado Novo","Colônia"],
  correct:1,
  explanation:"Foi durante a ditadura (anos 1968-1973), com crescimento alto, mas também desigualdade e repressão."
},

// ==================================================
// HISTÓRIA – DIFÍCIL (10)
// ==================================================
{
  subject:"História", level:"dificil",
  q:"A ditadura militar brasileira ocorreu no contexto internacional da:",
  options:["Primeira Guerra","Segunda Guerra","Guerra Fria","Guerra do Paraguai"],
  correct:2,
  explanation:"A Guerra Fria incentivou políticas anticomunistas na América Latina, influenciando golpes e ditaduras."
},
{
  subject:"História", level:"dificil",
  q:"O AI-5 (1968) é associado a:",
  options:["Abertura política","Aumento da censura e repressão","Independência","Fim da ditadura"],
  correct:1,
  explanation:"O AI-5 endureceu o regime: censura, cassações, suspensão de direitos e repressão mais forte."
},
{
  subject:"História", level:"dificil",
  q:"O mercantilismo defendia:",
  options:["Livre mercado total","Intervenção do Estado e acumulação de metais","Socialismo","Feudalismo"],
  correct:1,
  explanation:"Mercantilismo: Estado forte, balança comercial favorável e metalismo (acúmulo de ouro/prata)."
},
{
  subject:"História", level:"dificil",
  q:"A Revolução Francesa (1789) teve como uma de suas causas:",
  options:["Excesso de democracia","Desigualdade social e crise financeira","Industrialização avançada","Guerra Fria"],
  correct:1,
  explanation:"A França tinha privilégios para o clero e nobreza, alta carga sobre o 3º Estado e crise econômica."
},
{
  subject:"História", level:"dificil",
  q:"Na Colônia, o pacto colonial significava:",
  options:["Comércio livre com qualquer país","Exclusividade comercial com a metrópole","Fim de impostos","Independência econômica"],
  correct:1,
  explanation:"A colônia deveria vender e comprar principalmente da metrópole, limitando autonomia econômica."
},
{
  subject:"História", level:"dificil",
  q:"O coronelismo se relaciona com:",
  options:["Poder local e controle de votos","Fim do voto","Ditadura moderna","Socialismo"],
  correct:0,
  explanation:"Coronéis controlavam votos e poder local, usando clientelismo e coerção, especialmente na República Velha."
},
{
  subject:"História", level:"dificil",
  q:"A política do café com leite representava:",
  options:["Revezamento de poder entre SP e MG","Controle do Nordeste","Domínio militar","Fim de oligarquias"],
  correct:0,
  explanation:"Revezamento entre elites de São Paulo (café) e Minas Gerais (leite/pecuária)."
},
{
  subject:"História", level:"dificil",
  q:"O New Deal foi uma resposta:",
  options:["Ao fim da ditadura","À Crise de 1929 nos EUA","À Revolução Francesa","À Guerra do Paraguai"],
  correct:1,
  explanation:"New Deal: conjunto de políticas de intervenção do Estado para reativar economia após 1929."
},
{
  subject:"História", level:"dificil",
  q:"A industrialização brasileira acelerou no século XX com:",
  options:["Política de substituição de importações","Volta ao feudalismo","Fim das cidades","Proibição de fábricas"],
  correct:0,
  explanation:"Crises externas estimularam produzir internamente (substituir importações), impulsionando indústria."
},
{
  subject:"História", level:"dificil",
  q:"A Constituição de 1988 é conhecida como:",
  options:["Carta do Estado Novo","Constituição Cidadã","Lei Áurea","AI-5"],
  correct:1,
  explanation:"É chamada Constituição Cidadã por ampliar direitos sociais e civis após a ditadura."
},

// ==================================================
// INGLÊS – FÁCIL (10)
// ==================================================
{
  subject:"Inglês", level:"facil",
  q:"What is the meaning of 'good'?",
  options:["Ruim","Bom","Grande","Lento"],
  correct:1,
  explanation:"'Good' significa 'bom'."
},
{
  subject:"Inglês", level:"facil",
  q:"Choose the correct: I ___ a student.",
  options:["am","is","are","be"],
  correct:0,
  explanation:"Com 'I' usamos 'am': I am a student."
},
{
  subject:"Inglês", level:"facil",
  q:"The plural of 'child' is:",
  options:["Childs","Children","Childes","Childrens"],
  correct:1,
  explanation:"Plural irregular: child → children."
},
{
  subject:"Inglês", level:"facil",
  q:"'House' means:",
  options:["Carro","Casa","Rua","Escola"],
  correct:1,
  explanation:"House = casa."
},
{
  subject:"Inglês", level:"facil",
  q:"Choose the correct: She ___ happy.",
  options:["am","is","are","be"],
  correct:1,
  explanation:"Com 'she', usamos 'is': She is happy."
},
{
  subject:"Inglês", level:"facil",
  q:"'Yesterday' refers to:",
  options:["Amanhã","Hoje","Ontem","Semana que vem"],
  correct:2,
  explanation:"Yesterday = ontem."
},
{
  subject:"Inglês", level:"facil",
  q:"The opposite of 'hot' is:",
  options:["Cold","Warm","Big","Fast"],
  correct:0,
  explanation:"Hot = quente; cold = frio."
},
{
  subject:"Inglês", level:"facil",
  q:"Choose: They ___ students.",
  options:["am","is","are","be"],
  correct:2,
  explanation:"Com 'they', usamos 'are'."
},
{
  subject:"Inglês", level:"facil",
  q:"'Because' indicates:",
  options:["Contraste","Causa","Conclusão","Exemplo"],
  correct:1,
  explanation:"Because indica causa: 'porque'."
},
{
  subject:"Inglês", level:"facil",
  q:"What is 'book'?",
  options:["Caneta","Livro","Mesa","Sapato"],
  correct:1,
  explanation:"Book = livro."
},

// ==================================================
// INGLÊS – MODERADA (10)
// ==================================================
{
  subject:"Inglês", level:"moderada",
  q:"Choose the correct: I have lived here ___ 2020.",
  options:["for","since","during","from"],
  correct:1,
  explanation:"'Since' usa ponto inicial (2020). 'For' usa duração (two years)."
},
{
  subject:"Inglês", level:"moderada",
  q:"Choose: If it ___, we will stay home.",
  options:["rain","rains","rained","raining"],
  correct:1,
  explanation:"First conditional: If + present simple → will + verb. Então: If it rains..."
},
{
  subject:"Inglês", level:"moderada",
  q:"The sentence in passive voice of 'They built the house' is:",
  options:["The house was built","The house is built","The house built","The house was build"],
  correct:0,
  explanation:"Passiva no passado: was/were + past participle. Built é particípio de build."
},
{
  subject:"Inglês", level:"moderada",
  q:"Choose: She doesn’t like ___ early.",
  options:["wake up","wakes up","waking up","to waking"],
  correct:2,
  explanation:"Após 'like', é comum usar gerúndio: like + V-ing → waking up."
},
{
  subject:"Inglês", level:"moderada",
  q:"What does 'however' express?",
  options:["Causa","Contraste","Tempo","Lugar"],
  correct:1,
  explanation:"However = porém/entretanto → contraste."
},
{
  subject:"Inglês", level:"moderada",
  q:"Choose: He is ___ than his brother.",
  options:["tall","taller","the tallest","more tall"],
  correct:1,
  explanation:"Comparativo curto: tall → taller."
},
{
  subject:"Inglês", level:"moderada",
  q:"Choose the correct question: ___ you like coffee?",
  options:["Do","Does","Did","Done"],
  correct:0,
  explanation:"Com 'you', usamos 'Do'."
},
{
  subject:"Inglês", level:"moderada",
  q:"Meaning of 'to improve' is:",
  options:["Piorar","Melhorar","Parar","Ignorar"],
  correct:1,
  explanation:"Improve = melhorar."
},
{
  subject:"Inglês", level:"moderada",
  q:"Choose: I ___ see you tomorrow.",
  options:["am","will","was","have"],
  correct:1,
  explanation:"Futuro simples: will + verbo base → will see."
},
{
  subject:"Inglês", level:"moderada",
  q:"In 'I’m going to study', 'going to' indicates:",
  options:["Passado","Plano/Intenção","Condição","Comparação"],
  correct:1,
  explanation:"'Going to' indica intenção/plano futuro."
},

// ==================================================
// INGLÊS – DIFÍCIL (10)
// ==================================================
{
  subject:"Inglês", level:"dificil",
  q:"Choose: Hardly ___ when the phone rang.",
  options:["I slept","did I sleep","I did sleep","sleep I"],
  correct:1,
  explanation:"Com 'hardly' no início, ocorre inversão: Hardly did I sleep..."
},
{
  subject:"Inglês", level:"dificil",
  q:"Choose the best meaning of 'despite':",
  options:["Porque","Apesar de","Portanto","Enquanto"],
  correct:1,
  explanation:"Despite = apesar de (contraste)."
},
{
  subject:"Inglês", level:"dificil",
  q:"Which option is a synonym of 'increase'?",
  options:["Decrease","Raise","Hide","Break"],
  correct:1,
  explanation:"Increase = aumentar. Synonym: raise."
},
{
  subject:"Inglês", level:"dificil",
  q:"Choose the correct: She had ___ finished when I arrived.",
  options:["already","yet","still","never"],
  correct:0,
  explanation:"Past perfect frequentemente usa 'already' para ação concluída antes de outra no passado."
},
{
  subject:"Inglês", level:"dificil",
  q:"Choose: The more you practice, the ___ you get.",
  options:["good","better","best","well"],
  correct:1,
  explanation:"Estrutura: the more..., the better... (comparativo)."
},
{
  subject:"Inglês", level:"dificil",
  q:"Meaning of 'to figure out' is:",
  options:["Desenhar","Descobrir/entender","Fugir","Empurrar"],
  correct:1,
  explanation:"Figure out = descobrir, entender, resolver."
},
{
  subject:"Inglês", level:"dificil",
  q:"Choose: I wish I ___ more time.",
  options:["have","had","will have","am having"],
  correct:1,
  explanation:"Wish (presente) + passado simples para desejo irreal: I wish I had..."
},
{
  subject:"Inglês", level:"dificil",
  q:"Choose: He said he ___ call me later.",
  options:["will","would","can","must"],
  correct:1,
  explanation:"Reported speech: will → would. Então: he would call."
},
{
  subject:"Inglês", level:"dificil",
  q:"The correct form is: 'Neither ___ I.'",
  options:["do","does","did","am"],
  correct:0,
  explanation:"'Neither do I' = 'eu também não'. Usa 'do' no presente."
},
{
  subject:"Inglês", level:"dificil",
  q:"Choose the best connector: 'He studied a lot; ___, he failed.'",
  options:["therefore","however","because","so"],
  correct:1,
  explanation:"A frase pede contraste: estudou muito, porém falhou → however."
},

// ==================================================
// ESPANHOL – FÁCIL (10)  (Perguntas em espanhol / explicação em português)
// ==================================================
{
  subject:"Espanhol", level:"facil",
  q:"En la frase “Todavía no llegué”, “todavía” significa:",
  options:["todavia","aún (ainda)","nunca","siempre"],
  correct:1,
  explanation:"Em espanhol, 'todavía' = 'ainda'. A frase significa: 'Ainda não cheguei'."
},
{
  subject:"Espanhol", level:"facil",
  q:"La palabra “embarazada” significa:",
  options:["Embaraçada","Grávida","Envergonhada","Cansada"],
  correct:1,
  explanation:"Falso cognato clássico: 'embarazada' = grávida (não 'embaraçada')."
},
{
  subject:"Espanhol", level:"facil",
  q:"La palabra “apellido” es:",
  options:["Apelido","Sobrenome","Nome","Documento"],
  correct:1,
  explanation:"'Apellido' = sobrenome. 'Apelido' em espanhol é 'apodo'."
},
{
  subject:"Espanhol", level:"facil",
  q:"“Muy” se usa para:",
  options:["Comparar","Intensificar","Negar","Perguntar"],
  correct:1,
  explanation:"'Muy' intensifica: muy bueno = muito bom."
},
{
  subject:"Espanhol", level:"facil",
  q:"“Pero” indica:",
  options:["Causa","Contraste","Conclusão","Exemplo"],
  correct:1,
  explanation:"'Pero' = 'mas/porém', dá contraste."
},
{
  subject:"Espanhol", level:"facil",
  q:"“Ahora” significa:",
  options:["Ontem","Hoje","Agora","Amanhã"],
  correct:2,
  explanation:"'Ahora' = agora."
},
{
  subject:"Espanhol", level:"facil",
  q:"“Gracias” significa:",
  options:["Por favor","Obrigado","Desculpa","Olá"],
  correct:1,
  explanation:"'Gracias' = obrigado."
},
{
  subject:"Espanhol", level:"facil",
  q:"“Libro” significa:",
  options:["Livro","Lírio","Liberar","Lobo"],
  correct:0,
  explanation:"Cognato verdadeiro: libro = livro."
},
{
  subject:"Espanhol", level:"facil",
  q:"“Ropa” significa:",
  options:["Roupa","Ropa (comida)","Rato","Rosa"],
  correct:0,
  explanation:"'Ropa' = roupa."
},
{
  subject:"Espanhol", level:"facil",
  q:"“Hombre” significa:",
  options:["Homem","Ombro","Fome","Hábito"],
  correct:0,
  explanation:"Cognato verdadeiro: hombre = homem."
},

// ==================================================
// ESPANHOL – MODERADA (10)
// ==================================================
{
  subject:"Espanhol", level:"moderada",
  q:"La palabra “rato” en español significa:",
  options:["Rato (animal)","Un momento / un tiempo","Una comida","Un trabajo"],
  correct:1,
  explanation:"Falso cognato: 'rato' = um tempo/um instante. Animal (rato) = 'ratón'."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“Oficina” en español significa:",
  options:["Oficina (lugar de trabajo)","Oficina mecánica sempre","Fábrica","Escola"],
  correct:0,
  explanation:"Em espanhol, 'oficina' é escritório. Oficina mecânica costuma ser 'taller'."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“Asistir” significa:",
  options:["Assistir (ver TV)","Ajudar","Comparecer","Escrever"],
  correct:2,
  explanation:"Falso cognato: 'asistir' = comparecer/ir a um lugar. 'Assistir (ver)' = 'ver/mirar'."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“Estoy de acuerdo” significa:",
  options:["Estou cansado","Concordo","Estou atrasado","Discordo"],
  correct:1,
  explanation:"Expressão comum: 'estoy de acuerdo' = concordo."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“Aunque” geralmente indica:",
  options:["Causa","Concessão (apesar de)","Conclusão","Tempo"],
  correct:1,
  explanation:"'Aunque' = embora/apesar de → concessão."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“Actualmente” significa:",
  options:["Atualmente (agora)","Atualmente = de fato?","Antigamente","Talvez"],
  correct:0,
  explanation:"Cognato verdadeiro aqui: 'actualmente' = atualmente/hoje em dia."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“Salir” significa:",
  options:["Sair","Subir","Dormir","Sentar"],
  correct:0,
  explanation:"'Salir' = sair."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“Pedir” significa:",
  options:["Pedir","Perder","Pagar","Parar"],
  correct:0,
  explanation:"'Pedir' = pedir/solicitar."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“La gente” significa:",
  options:["A gente (nós)","As pessoas","Agentes","A gentileza"],
  correct:1,
  explanation:"Falso cognato: 'la gente' = as pessoas. 'A gente' (nós) não é tradução direta."
},
{
  subject:"Espanhol", level:"moderada",
  q:"“Sin embargo” significa:",
  options:["Portanto","No entanto","Porque","Por exemplo"],
  correct:1,
  explanation:"'Sin embargo' = no entanto/porém (contraste)."
},

// ==================================================
// ESPANHOL – DIFÍCIL (10)
// ==================================================
{
  subject:"Espanhol", level:"dificil",
  q:"En interpretación, si dos opciones dicen casi lo mismo, normalmente:",
  options:["Las dos son correctas","La más larga es correcta","Probablemente las dos son incorrectas","Da igual"],
  correct:2,
  explanation:"Macete de prova: duas alternativas quase iguais costumam ser armadilhas; a correta tende a ser única e precisa."
},
{
  subject:"Espanhol", level:"dificil",
  q:"“De hecho” significa:",
  options:["De fato","De noite","Deitado","De novo"],
  correct:0,
  explanation:"Expressão muito cobrada: 'de hecho' = de fato/na verdade."
},
{
  subject:"Espanhol", level:"dificil",
  q:"“Sensible” en español significa:",
  options:["Sensível","Sensato","Sensacional","Sentimental"],
  correct:1,
  explanation:"Falso cognato: 'sensible' (espanhol) = sensato/razoável. 'Sensível' é 'sensible' em alguns contextos, mas em prova costuma cair como 'sensato'."
},
{
  subject:"Espanhol", level:"dificil",
  q:"“Pretender” en español significa:",
  options:["Pretender (fingir)","Ter intenção","Apertar","Proteger"],
  correct:1,
  explanation:"Falso cognato: 'pretender' = ter intenção/tentar. Fingir = 'fingir'."
},
{
  subject:"Espanhol", level:"dificil",
  q:"“Constipado” en español significa:",
  options:["Constipado (resfriado)","Com prisão de ventre","Com febre alta","Com alergia"],
  correct:0,
  explanation:"Em espanhol, 'constipado' geralmente = resfriado. (Pegadinha: em português pode confundir com intestino preso.)"
},
{
  subject:"Espanhol", level:"dificil",
  q:"“Éxito” significa:",
  options:["Êxito (sucesso)","Êxodo","Exato","Exílio"],
  correct:0,
  explanation:"Cognato verdadeiro: éxito = sucesso."
},
{
  subject:"Espanhol", level:"dificil",
  q:"“Alquiler” significa:",
  options:["Aluguel","Alimento","Alívio","Alcance"],
  correct:0,
  explanation:"Alquiler = aluguel."
},
{
  subject:"Espanhol", level:"dificil",
  q:"“Tener en cuenta” significa:",
  options:["Ter em conta/considerar","Ter dinheiro","Ter tempo","Ter medo"],
  correct:0,
  explanation:"Expressão: tener en cuenta = considerar/levar em consideração."
},
{
  subject:"Espanhol", level:"dificil",
  q:"“Luego” significa mais frequentemente:",
  options:["Logo/depois","Agora","Nunca","Sempre"],
  correct:0,
  explanation:"'Luego' costuma significar depois/mais tarde (às vezes 'logo', dependendo do contexto)."
},
{
  subject:"Espanhol", level:"dificil",
  q:"“A lo mejor” significa:",
  options:["Talvez","Com certeza","Nunca","Por isso"],
  correct:0,
  explanation:"Expressão muito cobrada: 'a lo mejor' = talvez."
},

];
