import Questao from "@/core/interfaces/Questao";

const listaDeQuestoes: Questao[] = [
    {
        id: 1,
        enunciado: "Em que ano ocorreu a Revolução Francesa?",
        categoria: "historia",
        respostas: [
            { valor: "1789", certa: true, revelada: false },
            { valor: "1812", certa: false, revelada: false },
            { valor: "1603", certa: false, revelada: false },
            { valor: "1848", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 2,
        enunciado: "Quem foi o primeiro imperador do Brasil?",
        categoria: "historia",
        respostas: [
            { valor: "Dom Pedro I", certa: true, revelada: false },
            { valor: "Dom João VI", certa: false, revelada: false },
            { valor: "Dom Pedro II", certa: false, revelada: false },
            { valor: "Getúlio Vargas", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 3,
        enunciado: "Qual das guerras abaixo ficou conhecida como a 'Grande Guerra'?",
        categoria: "historia",
        respostas: [
            { valor: "Primeira Guerra Mundial", certa: true, revelada: false },
            { valor: "Segunda Guerra Mundial", certa: false, revelada: false },
            { valor: "Guerra Fria", certa: false, revelada: false },
            { valor: "Guerra Civil Americana", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 4,
        enunciado: "Quem foi o líder da Revolução Russa de 1917?",
        categoria: "historia",
        respostas: [
            { valor: "Vladimir Lenin", certa: true, revelada: false },
            { valor: "Josef Stalin", certa: false, revelada: false },
            { valor: "Leon Trotsky", certa: false, revelada: false },
            { valor: "Mikhail Gorbachev", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 5,
        enunciado: "Em que ano o Muro de Berlim foi derrubado?",
        categoria: "historia",
        respostas: [
            { valor: "1989", certa: true, revelada: false },
            { valor: "1975", certa: false, revelada: false },
            { valor: "1991", certa: false, revelada: false },
            { valor: "1961", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 6,
        enunciado: "Qual civilização construiu Machu Picchu?",
        categoria: "historia",
        respostas: [
            { valor: "Inca", certa: true, revelada: false },
            { valor: "Asteca", certa: false, revelada: false },
            { valor: "Maya", certa: false, revelada: false },
            { valor: "Olmeca", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 7,
        enunciado: "Quem foi o primeiro presidente dos Estados Unidos?",
        categoria: "historia",
        respostas: [
            { valor: "George Washington", certa: true, revelada: false },
            { valor: "Thomas Jefferson", certa: false, revelada: false },
            { valor: "Abraham Lincoln", certa: false, revelada: false },
            { valor: "John Adams", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 8,
        enunciado: "Quem foi responsável pela unificação da Alemanha em 1871?",
        categoria: "historia",
        respostas: [
            { valor: "Otto von Bismarck", certa: true, revelada: false },
            { valor: "Napoleão Bonaparte", certa: false, revelada: false },
            { valor: "Frederico II", certa: false, revelada: false },
            { valor: "Kaiser Wilhelm II", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 9,
        enunciado: "Qual império dominou grande parte da Europa, Ásia e norte da África no século I d.C.?",
        categoria: "historia",
        respostas: [
            { valor: "Império Romano", certa: true, revelada: false },
            { valor: "Império Otomano", certa: false, revelada: false },
            { valor: "Império Mongol", certa: false, revelada: false },
            { valor: "Império Persa", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 10,
        enunciado: "Qual evento marcou o início da Idade Média?",
        categoria: "historia",
        respostas: [
            { valor: "Queda do Império Romano do Ocidente", certa: true, revelada: false },
            { valor: "Revolução Francesa", certa: false, revelada: false },
            { valor: "Descobrimento da América", certa: false, revelada: false },
            { valor: "Primeira Cruzada", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 11,
        enunciado: "Qual é a capital do Japão?",
        categoria: "geografia",
        respostas: [
            { valor: "Tóquio", certa: true, revelada: false },
            { valor: "Pequim", certa: false, revelada: false },
            { valor: "Seul", certa: false, revelada: false },
            { valor: "Bangkok", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 12,
        enunciado: "Qual é o maior continente do mundo em termos de área?",
        categoria: "geografia",
        respostas: [
            { valor: "Ásia", certa: true, revelada: false },
            { valor: "África", certa: false, revelada: false },
            { valor: "América do Norte", certa: false, revelada: false },
            { valor: "Europa", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 13,
        enunciado: "Em que país está localizada a Grande Muralha da China?",
        categoria: "geografia",
        respostas: [
            { valor: "China", certa: true, revelada: false },
            { valor: "Japão", certa: false, revelada: false },
            { valor: "Índia", certa: false, revelada: false },
            { valor: "Rússia", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 14,
        enunciado: "Qual é o nome do maior oceano do planeta?",
        categoria: "geografia",
        respostas: [
            { valor: "Pacífico", certa: true, revelada: false },
            { valor: "Atlântico", certa: false, revelada: false },
            { valor: "Índico", certa: false, revelada: false },
            { valor: "Ártico", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 15,
        enunciado: "Qual é o país mais populoso do mundo?",
        categoria: "geografia",
        respostas: [
            { valor: "China", certa: true, revelada: false },
            { valor: "Índia", certa: false, revelada: false },
            { valor: "Estados Unidos", certa: false, revelada: false },
            { valor: "Brasil", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 16,
        enunciado: "Em que continente está localizado o Egito?",
        categoria: "geografia",
        respostas: [
            { valor: "África", certa: true, revelada: false },
            { valor: "Ásia", certa: false, revelada: false },
            { valor: "Europa", certa: false, revelada: false },
            { valor: "Oceania", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 17,
        enunciado: "Qual é a capital da França?",
        categoria: "geografia",
        respostas: [
            { valor: "Paris", certa: true, revelada: false },
            { valor: "Roma", certa: false, revelada: false },
            { valor: "Londres", certa: false, revelada: false },
            { valor: "Berlim", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 18,
        enunciado: "Qual é o maior rio do mundo?",
        categoria: "geografia",
        respostas: [
            { valor: "Amazonas", certa: true, revelada: false },
            { valor: "Nilo", certa: false, revelada: false },
            { valor: "Yangtsé", certa: false, revelada: false },
            { valor: "Mississippi", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 19,
        enunciado: "Qual é o ponto mais alto da Terra?",
        categoria: "geografia",
        respostas: [
            { valor: "Monte Everest", certa: true, revelada: false },
            { valor: "K2", certa: false, revelada: false },
            { valor: "Makalu", certa: false, revelada: false },
            { valor: "Kangchenjunga", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 20,
        enunciado: "Em qual continente fica o deserto do Saara?",
        categoria: "geografia",
        respostas: [
            { valor: "África", certa: true, revelada: false },
            { valor: "Ásia", certa: false, revelada: false },
            { valor: "América do Sul", certa: false, revelada: false },
            { valor: "Oceania", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 21,
        enunciado: "Quem ganhou a Copa do Mundo de 2014?",
        categoria: "esportes",
        respostas: [
            { valor: "Alemanha", certa: true, revelada: false },
            { valor: "Brasil", certa: false, revelada: false },
            { valor: "Argentina", certa: false, revelada: false },
            { valor: "França", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 22,
        enunciado: "Qual jogador de futebol é conhecido como 'O Rei do Futebol'?",
        categoria: "esportes",
        respostas: [
            { valor: "Pelé", certa: true, revelada: false },
            { valor: "Cristiano Ronaldo", certa: false, revelada: false },
            { valor: "Messi", certa: false, revelada: false },
            { valor: "Maradona", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 23,
        enunciado: "Qual time é conhecido como 'o maior campeão da NFL'?",
        categoria: "esportes",
        respostas: [
            { valor: "New England Patriots", certa: true, revelada: false },
            { valor: "Dallas Cowboys", certa: false, revelada: false },
            { valor: "Pittsburgh Steelers", certa: false, revelada: false },
            { valor: "San Francisco 49ers", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 24,
        enunciado: "Em que cidade foi realizada a Olimpíada de 2008?",
        categoria: "esportes",
        respostas: [
            { valor: "Pequim", certa: true, revelada: false },
            { valor: "Londres", certa: false, revelada: false },
            { valor: "Rio de Janeiro", certa: false, revelada: false },
            { valor: "Tóquio", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 25,
        enunciado: "Quem é o jogador de tênis com mais títulos de Grand Slam?",
        categoria: "esportes",
        respostas: [
            { valor: "Novak Djokovic", certa: true, revelada: false },
            { valor: "Roger Federer", certa: false, revelada: false },
            { valor: "Rafael Nadal", certa: false, revelada: false },
            { valor: "Pete Sampras", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 26,
        enunciado: "Qual país venceu a Copa do Mundo de Futebol de 1998?",
        categoria: "esportes",
        respostas: [
            { valor: "França", certa: true, revelada: false },
            { valor: "Brasil", certa: false, revelada: false },
            { valor: "Alemanha", certa: false, revelada: false },
            { valor: "Argentina", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 27,
        enunciado: "Qual time de futebol tem o maior número de títulos da Liga dos Campeões da UEFA?",
        categoria: "esportes",
        respostas: [
            { valor: "Real Madrid", certa: true, revelada: false },
            { valor: "Barcelona", certa: false, revelada: false },
            { valor: "Milan", certa: false, revelada: false },
            { valor: "Bayern de Munique", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 28,
        enunciado: "Qual é o nome do famoso estádio de futebol em Barcelona?",
        categoria: "esportes",
        respostas: [
            { valor: "Camp Nou", certa: true, revelada: false },
            { valor: "Santiago Bernabéu", certa: false, revelada: false },
            { valor: "Old Trafford", certa: false, revelada: false },
            { valor: "Anfield", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 29,
        enunciado: "Em qual esporte Michael Jordan é considerado uma lenda?",
        categoria: "esportes",
        respostas: [
            { valor: "Basquete", certa: true, revelada: false },
            { valor: "Futebol", certa: false, revelada: false },
            { valor: "Tênis", certa: false, revelada: false },
            { valor: "Fórmula 1", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 30,
        enunciado: "Quem venceu o Super Bowl LIV (2020)?",
        categoria: "esportes",
        respostas: [
            { valor: "Kansas City Chiefs", certa: true, revelada: false },
            { valor: "San Francisco 49ers", certa: false, revelada: false },
            { valor: "New England Patriots", certa: false, revelada: false },
            { valor: "Green Bay Packers", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 31,
        enunciado: "Quem é conhecido como o pai da teoria da relatividade?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Albert Einstein", certa: true, revelada: false },
            { valor: "Isaac Newton", certa: false, revelada: false },
            { valor: "Galileu Galilei", certa: false, revelada: false },
            { valor: "Nikola Tesla", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 32,
        enunciado: "Qual é o nome do primeiro computador eletrônico digital do mundo?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "ENIAC", certa: true, revelada: false },
            { valor: "IBM PC", certa: false, revelada: false },
            { valor: "Apple I", certa: false, revelada: false },
            { valor: "Altair 8800", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 33,
        enunciado: "Quem desenvolveu a teoria da evolução das espécies?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Charles Darwin", certa: true, revelada: false },
            { valor: "Gregor Mendel", certa: false, revelada: false },
            { valor: "Marie Curie", certa: false, revelada: false },
            { valor: "Louis Pasteur", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 34,
        enunciado: "Qual é a principal unidade de medida de energia no Sistema Internacional?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Joule", certa: true, revelada: false },
            { valor: "Caloria", certa: false, revelada: false },
            { valor: "Watt", certa: false, revelada: false },
            { valor: "Ampère", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 35,
        enunciado: "Qual é o elemento químico com o símbolo O?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Oxigênio", certa: true, revelada: false },
            { valor: "Ouro", certa: false, revelada: false },
            { valor: "Ósmio", certa: false, revelada: false },
            { valor: "Oganessônio", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 36,
        enunciado: "Qual foi o nome do primeiro satélite artificial lançado pela União Soviética?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Sputnik", certa: true, revelada: false },
            { valor: "Vanguard", certa: false, revelada: false },
            { valor: "Apollo", certa: false, revelada: false },
            { valor: "Explorer", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 37,
        enunciado: "Quem inventou a lâmpada elétrica?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Thomas Edison", certa: true, revelada: false },
            { valor: "Nikola Tesla", certa: false, revelada: false },
            { valor: "Michael Faraday", certa: false, revelada: false },
            { valor: "Alexander Graham Bell", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 38,
        enunciado: "Qual é a substância química mais abundante na Terra?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Água", certa: true, revelada: false },
            { valor: "Oxigênio", certa: false, revelada: false },
            { valor: "Silício", certa: false, revelada: false },
            { valor: "Carbono", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 39,
        enunciado: "Em qual área da ciência se estuda a matéria e suas transformações?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Química", certa: true, revelada: false },
            { valor: "Física", certa: false, revelada: false },
            { valor: "Biologia", certa: false, revelada: false },
            { valor: "Geologia", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 40,
        enunciado: "Qual é o nome do projeto que enviou o primeiro ser humano à Lua?",
        categoria: "ciencia-tecnologia",
        respostas: [
            { valor: "Apollo 11", certa: true, revelada: false },
            { valor: "Mercury", certa: false, revelada: false },
            { valor: "Gemini", certa: false, revelada: false },
            { valor: "Apollo 13", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 41,
        enunciado: "Quem interpretou o personagem de Jack Dawson no filme Titanic?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Leonardo DiCaprio", certa: true, revelada: false },
            { valor: "Brad Pitt", certa: false, revelada: false },
            { valor: "Johnny Depp", certa: false, revelada: false },
            { valor: "Tom Hanks", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 42,
        enunciado: "Qual filme ganhou o Oscar de Melhor Filme em 2020?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Parasita", certa: true, revelada: false },
            { valor: "1917", certa: false, revelada: false },
            { valor: "Coringa", certa: false, revelada: false },
            { valor: "Era uma vez em... Hollywood", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 43,
        enunciado: "Qual série popular tem como personagem principal o detetive Sherlock Holmes?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Sherlock", certa: true, revelada: false },
            { valor: "The Mentalist", certa: false, revelada: false },
            { valor: "True Detective", certa: false, revelada: false },
            { valor: "Castle", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 44,
        enunciado: "Em qual cidade se passa o filme 'O Lobo de Wall Street'?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Nova York", certa: true, revelada: false },
            { valor: "Los Angeles", certa: false, revelada: false },
            { valor: "Chicago", certa: false, revelada: false },
            { valor: "Miami", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 45,
        enunciado: "Quem é o autor da saga de livros Harry Potter?",
        categoria: "entretenimento",
        respostas: [
            { valor: "J.K. Rowling", certa: true, revelada: false },
            { valor: "J.R.R. Tolkien", certa: false, revelada: false },
            { valor: "George R.R. Martin", certa: false, revelada: false },
            { valor: "C.S. Lewis", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 46,
        enunciado: "Qual cantor é conhecido pelo apelido de 'Rei do Pop'?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Michael Jackson", certa: true, revelada: false },
            { valor: "Elvis Presley", certa: false, revelada: false },
            { valor: "Prince", certa: false, revelada: false },
            { valor: "David Bowie", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 47,
        enunciado: "Qual foi o nome do personagem principal em 'Vingadores: Ultimato'?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Tony Stark", certa: true, revelada: false },
            { valor: "Steve Rogers", certa: false, revelada: false },
            { valor: "Thor", certa: false, revelada: false },
            { valor: "Bruce Banner", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 48,
        enunciado: "Quem ganhou o prêmio de Melhor Ator no Oscar de 2016?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Leonardo DiCaprio", certa: true, revelada: false },
            { valor: "Matthew McConaughey", certa: false, revelada: false },
            { valor: "Eddie Redmayne", certa: false, revelada: false },
            { valor: "Bradley Cooper", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 49,
        enunciado: "Qual é o nome do super-herói que é interpretado por Robert Downey Jr. no Universo Cinematográfico Marvel?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Homem de Ferro", certa: true, revelada: false },
            { valor: "Capitão América", certa: false, revelada: false },
            { valor: "Thor", certa: false, revelada: false },
            { valor: "Hulk", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 50,
        enunciado: "Quem ganhou a primeira edição do Big Brother Brasil?",
        categoria: "entretenimento",
        respostas: [
            { valor: "Kléber Bambam", certa: true, revelada: false },
            { valor: "Dhomini", certa: false, revelada: false },
            { valor: "Rodolffo", certa: false, revelada: false },
            { valor: "Marcos Harter", certa: false, revelada: false }
        ],
        acertou: false
    }, {
        id: 51,
        enunciado: "Qual número falta na sequência: 2, 4, 8, 16, ___?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "32", certa: true, revelada: false },
            { valor: "24", certa: false, revelada: false },
            { valor: "64", certa: false, revelada: false },
            { valor: "48", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 52,
        enunciado: "Se você tem 2 pães e divide com 3 amigos, quantos pães cada um recebe?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "Meia fatia de pão", certa: true, revelada: false },
            { valor: "1 fatia de pão", certa: false, revelada: false },
            { valor: "2 fatias de pão", certa: false, revelada: false },
            { valor: "Nada", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 53,
        enunciado: "Qual é a próxima letra dessa sequência: A, C, E, G, I, ___?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "K", certa: true, revelada: false },
            { valor: "L", certa: false, revelada: false },
            { valor: "J", certa: false, revelada: false },
            { valor: "H", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 54,
        enunciado: "O que vem a seguir? 1, 1, 2, 3, 5, 8, ___?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "13", certa: true, revelada: false },
            { valor: "10", certa: false, revelada: false },
            { valor: "12", certa: false, revelada: false },
            { valor: "15", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 55,
        enunciado: "O que é mais pesado: um quilo de ferro ou um quilo de algodão?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "Pesam o mesmo", certa: true, revelada: false },
            { valor: "O ferro", certa: false, revelada: false },
            { valor: "O algodão", certa: false, revelada: false },
            { valor: "Nenhum dos dois", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 56,
        enunciado: "Se você tem 3 maçãs e tira 2, quantas maçãs você tem?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "2 maçãs", certa: true, revelada: false },
            { valor: "1 maçã", certa: false, revelada: false },
            { valor: "Nenhuma maçã", certa: false, revelada: false },
            { valor: "3 maçãs", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 57,
        enunciado: "Eu sou leve como uma pena, mas nem o homem mais forte pode me segurar. O que sou?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "O sopro", certa: true, revelada: false },
            { valor: "A água", certa: false, revelada: false },
            { valor: "A luz", certa: false, revelada: false },
            { valor: "A fumaça", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 58,
        enunciado: "Qual palavra é escrita incorretamente em todos os dicionários?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "Incorretamente", certa: true, revelada: false },
            { valor: "Errado", certa: false, revelada: false },
            { valor: "Impreciso", certa: false, revelada: false },
            { valor: "Confuso", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 59,
        enunciado: "O que tem um pescoço, mas não tem cabeça?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "Uma garrafa", certa: true, revelada: false },
            { valor: "Uma cobra", certa: false, revelada: false },
            { valor: "Uma pessoa", certa: false, revelada: false },
            { valor: "Uma flor", certa: false, revelada: false }
        ],
        acertou: false
    },
    {
        id: 60,
        enunciado: "Qual é o próximo número da sequência: 3, 9, 27, 81, ___?",
        categoria: "desafios-mente",
        respostas: [
            { valor: "243", certa: true, revelada: false },
            { valor: "162", certa: false, revelada: false },
            { valor: "108", certa: false, revelada: false },
            { valor: "72", certa: false, revelada: false }
        ],
        acertou: false
    }
]


export {
    listaDeQuestoes
}