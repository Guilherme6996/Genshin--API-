Genshin Impact Characters Viewer
Este projeto é um visualizador interativo de personagens do jogo Genshin Impact, feito em React. Ele exibe dados de personagens com imagens e permite filtragem por nome e elemento (como Pyro, Hydro, Cryo etc).

🚀 Funcionalidades
Listagem de personagens com imagens e informações (nome, elemento e arma)

Filtro por nome e elemento

Estilização dinâmica por tipo de elemento com animações e cores temáticas

Dados carregados de um arquivo JSON local

Imagens carregadas do projeto secundário (pasta pública)

🧠 Estrutura do Projeto
perl
Copiar
Editar
my-project/
├── public/
│   ├── data/
│   │   └── characters.json       # Arquivo com dados dos personagens
│   └── images/
│       └── nome-do-personagem.png # Imagens locais dos personagens
├── src/
│   ├── components/
│   │   └── GenshinCharacters.jsx # Componente principal
│   ├── styles/
│   │   └── GenshinCharacters.css # Estilos específicos para o componente
│   └── App.jsx
├── package.json
└── README.md
🧩 Tecnologias Usadas
React: Framework de interface

Axios: Para requisições HTTP

CSS: Estilização personalizada com efeitos animados

JSON: Dados locais dos personagens

📦 Instalação e Execução
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm start
Acesse http://localhost:3000 no navegador para ver o app rodando.

📄 Explicação do Código
🔧 GenshinCharacters.jsx
Utiliza useState e useEffect do React.

Busca dados do arquivo JSON localizado em /public/data/characters.json.

Usa imageMap para associar nomes de personagens a imagens locais.

Permite busca por nome e filtro por elemento.

Renderiza os personagens em "cards" estilizados com cores e animações.

🖼️ imageMap
Um objeto JavaScript que associa os nomes (em minúsculo) dos personagens aos caminhos das imagens locais (em /public/images/).

📁 characters.json
Estrutura esperada:

json
Copiar
Editar
[
  {
    "name": "Diluc",
    "element": "Pyro",
    "weapon": "Claymore",
    "image": "https://link-exemplo.com/diluc.png"
  },
  ...
]
Mesmo que o JSON traga um link da imagem, o sistema prioriza as imagens locais se disponíveis.

🎨 Estilização
O arquivo GenshinCharacters.css aplica:

Layout em grid responsivo

Cores específicas por elemento (como fogo, gelo, água)

Animações suaves e interativas ao passar o mouse

Sombras, gradientes e filtros visuais

❗ Observações
As imagens devem estar na pasta /public/images/ com nomes em minúsculo (ex: diluc.png).

O JSON deve ser mantido em /public/data/characters.json.

📬 Contribuições
Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir novos recursos!

📘 Licença
Este projeto é licenciado sob a licença MIT.

Se quiser, posso gerar esse arquivo automaticamente com formatação Markdown para você colar direto no README.md. Deseja isso?







Você disse:
tire a parte do json 


O ChatGPT disse:
Claro! Aqui está a versão do README.md sem a parte que explica o characters.json, mantendo todas as outras instruções e explicações:

🌌 Genshin Impact Characters Viewer
Este projeto é um visualizador interativo de personagens do jogo Genshin Impact, feito em React. Ele exibe dados de personagens com imagens e permite filtragem por nome e elemento (como Pyro, Hydro, Cryo etc).

🚀 Funcionalidades
Listagem de personagens com imagens e informações (nome, elemento e arma)

Filtro por nome e elemento

Estilização dinâmica por tipo de elemento com animações e cores temáticas

Dados carregados localmente

Imagens carregadas do projeto secundário (pasta pública)

🧠 Estrutura do Projeto
perl
Copiar
Editar
my-project/
├── public/
│   ├── data/
│   │   └── characters.json       # Arquivo com dados dos personagens
│   └── images/
│       └── nome-do-personagem.png # Imagens locais dos personagens
├── src/
│   ├── components/
│   │   └── GenshinCharacters.jsx # Componente principal
│   ├── styles/
│   │   └── GenshinCharacters.css # Estilos específicos para o componente
│   └── App.jsx
├── package.json
└── README.md
🧩 Tecnologias Usadas
React: Framework de interface

Axios: Para requisições HTTP

CSS: Estilização personalizada com efeitos animados

📦 Instalação e Execução
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm start
Acesse http://localhost:3000 no navegador para ver o app rodando.

📄 Explicação do Código
🔧 GenshinCharacters.jsx
Utiliza useState e useEffect do React.

Usa imageMap para associar nomes de personagens a imagens locais.

Permite busca por nome e filtro por elemento.

Renderiza os personagens em "cards" estilizados com cores e animações.

🖼️ imageMap
Um objeto JavaScript que associa os nomes (em minúsculo) dos personagens aos caminhos das imagens locais (em /public/images/).

Mesmo que o sistema preveja imagem de fallback via JSON, ele prioriza as imagens locais se disponíveis.

🎨 Estilização
O arquivo GenshinCharacters.css aplica:

Layout em grid responsivo

Cores específicas por elemento (como fogo, gelo, água)

Animações suaves e interativas ao passar o mouse

Sombras, gradientes e filtros visuais

❗ Observações
As imagens devem estar na pasta /public/images/ com nomes em minúsculo (ex: diluc.png).

📬 Contribuições
Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir novos recursos!

📘 Licença
Este projeto é licenciado sob a licença MIT.

