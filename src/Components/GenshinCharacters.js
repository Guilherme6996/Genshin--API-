// Importa os hooks useState e useEffect da biblioteca React
import React, { useState, useEffect } from 'react';
// Importa a biblioteca Axios para realizar requisições HTTP
import axios from 'axios';
// Importa o arquivo CSS para estilização do componente
import '../styles/GenshinCharacters.css';

// Cria um objeto que mapeia nomes de personagens (em letras minúsculas) aos caminhos das imagens locais
const imageMap = {
  arlecchino: '/images/arlecchino.png',
  diluc: '/images/diluc.png',
  hutao: '/images/hutao.png',
  klee: '/images/klee.png',
  xiangling: '/images/xiangling.png',
  wriothesley: '/images/wriothesley.png',
  ganyu: '/images/ganyu.png',
  charlotte: '/images/charlotte.png',
  chongyun: '/images/chongyun.png',
  rosaria: '/images/rosaria.png',
  "yae miko": '/images/yaemiko.png',
  fischl: '/images/fischl.png',
  lisa: '/images/lisa.png',
  "raiden shogun": '/images/raidenshogun.png',
  clorinde: '/images/clorinde.png',
  venti: '/images/venti.png',
  lynette: '/images/lynette.png',
  faruzan: '/images/faruzan.png',
  jean: '/images/jean.png',
  wanderer: '/images/wanderer.png',
  barbara: '/images/barbara.png',
  mualani: '/images/mualani.png',
  furina: '/images/furina.png',
  xingqiu: '/images/xingqiu.png',
  neuvillette: '/images/neuvillette.png',
  kinich: '/images/kinich.png',
  kirara: '/images/kirara.png',
  collei: '/images/collei.png',
  yaoyao: '/images/yaoyao.png',
  tighnari: '/images/tighnari.png',
  yunjin: '/images/yunjin.png',
  ningguang: '/images/ningguang.png',
  gorou: '/images/gorou.png',
  albedo: '/images/albedo.png',
  zhongli: '/images/zhongli.png',
  noelle: '/images/noelle.png',
  yelan: '/images/yelan.png',
  yoimiya: '/images/yoimiya.png',
  beidou: '/images/beidou.png',
  kaeya: '/images/kaeya.png',
  nahida: '/images/nahida.png',
  shenhe: '/images/shenhe.png',
};

// Declaração do componente funcional GenshinCharacters
const GenshinCharacters = () => {
  // Estado para armazenar os personagens obtidos do JSON
  const [characters, setCharacters] = useState([]);
  // Estado que armazena o texto digitado na busca
  const [search, setSearch] = useState('');
  // Estado que armazena o elemento selecionado no filtro (Pyro, Hydro, etc)
  const [selectedElement, setSelectedElement] = useState('');

  // Hook useEffect que é executado quando o componente é montado
  useEffect(() => {
    // Faz uma requisição GET para buscar os dados do JSON de personagens
    axios.get('/data/characters.json')
      .then(response => {
        // Atualiza o estado com os dados retornados
        setCharacters(response.data);
      })
      .catch(error => {
        // Em caso de erro na requisição, exibe no console
        console.error('Erro ao buscar os personagens:', error);
      });
  }, []); // Array vazio garante que o efeito será executado apenas uma vez

  // Filtra os personagens com base na busca e no filtro de elemento
  const filteredCharacters = characters
    .filter(character =>
      // Verifica se o nome do personagem inclui o texto da busca (case insensitive)
      character.name.toLowerCase().includes(search.toLowerCase()) &&
      // Verifica se o elemento corresponde ao filtro (ou se o filtro está vazio)
      (selectedElement === '' || character.element.toLowerCase() === selectedElement.toLowerCase())
    )
    // Ordena os personagens em ordem alfabética pelo nome
    .sort((a, b) => a.name.localeCompare(b.name));

  // Retorna o JSX (estrutura visual) do componente
  return (
    <div className="container">
      {/* Título principal */}
      <h1>Veja seus personagens favoritos</h1>

      {/* Seção de filtros */}
      <div className="filters">
        {/* Campo de busca por nome */}
        <input
          type="text"
          placeholder="Pesquisar personagem..."
          value={search} // Valor atual do input
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado ao digitar
          className="search-bar"
        />

        {/* Select dropdown para filtrar por elemento */}
        <select
          value={selectedElement} // Valor selecionado
          onChange={(e) => setSelectedElement(e.target.value)} // Atualiza o estado ao mudar opção
          className="element-filter"
        >
          {/* Opções do filtro de elementos */}
          <option value="">Todos os Elementos</option>
          <option value="pyro">Pyro</option>
          <option value="hydro">Hydro</option>
          <option value="cryo">Cryo</option>
          <option value="electro">Electro</option>
          <option value="anemo">Anemo</option>
          <option value="geo">Geo</option>
          <option value="dendro">Dendro</option>
        </select>
      </div>

      {/* Lista dos personagens filtrados */}
      <div className="character-list">
        {/* Verifica se há personagens para exibir */}
        {filteredCharacters.length > 0 ? (
          // Mapeia os personagens filtrados para renderizar os cartões
          filteredCharacters.map((character) => (
            <div
              key={character.name} // Usa o nome como chave única
              className={`character-card ${character.element?.toLowerCase()}`} // Aplica classe com o nome do elemento (para estilização)
            >
              {/* Imagem do personagem - tenta usar imagem local, senão usa a do JSON */}
              <img
                src={imageMap[character.name.toLowerCase()] || character.image}
                alt={character.name}
                className="character-image"
              />
              {/* Nome do personagem */}
              <h2>{character.name}</h2>
              {/* Exibe o elemento e o tipo de arma */}
              <p>Elemento: {character.element}</p>
              <p>Tipo de Arma: {character.weapon}</p>
            </div>
          ))
        ) : (
          // Caso nenhum personagem seja encontrado
          <p>Nenhum personagem encontrado.</p>
        )}
      </div>
    </div>
  );
};

// Exporta o componente para ser utilizado em outros arquivos da aplicação
export default GenshinCharacters;
