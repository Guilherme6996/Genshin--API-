// Importa os hooks useState e useEffect do React
import React, { useState, useEffect } from 'react';
// Importa a biblioteca Axios para fazer requisições HTTP
import axios from 'axios';
// Importa o arquivo CSS para estilização do componente
import '../styles/GenshinCharacters.css';

// Mapeia os nomes dos personagens (em letras minúsculas) para os caminhos das imagens correspondentes
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

// Componente principal
const GenshinCharacters = () => {
  // Estado para armazenar os personagens carregados do JSON
  const [characters, setCharacters] = useState([]);
  // Estado para controlar a barra de pesquisa
  const [search, setSearch] = useState('');
  // Estado para controlar o filtro por elemento
  const [selectedElement, setSelectedElement] = useState('');

  // useEffect é executado uma vez ao montar o componente, carregando os dados do arquivo JSON
  useEffect(() => {
    axios.get('/data/characters.json') // Caminho do JSON com os dados dos personagens
      .then(response => {
        setCharacters(response.data); // Salva os dados no estado
      })
      .catch(error => {
        console.error('Erro ao buscar os personagens:', error); // Exibe erro no console, caso ocorra
      });
  }, []);

  // Filtra os personagens com base na busca e no elemento selecionado
  const filteredCharacters = characters
    .filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedElement === '' || character.element.toLowerCase() === selectedElement.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name)); // Ordena os personagens por nome

  // JSX que será renderizado na tela
  return (
    <div className="container">
      <h1>Veja seus personagens favoritos</h1>

      {/* Filtros de busca */}
      <div className="filters">
        <input
          type="text"
          placeholder="Pesquisar personagem..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <select
          value={selectedElement}
          onChange={(e) => setSelectedElement(e.target.value)}
          className="element-filter"
        >
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

      {/* Lista de personagens filtrados */}
      <div className="character-list">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <div
              key={character.name}
              className={`character-card ${character.element?.toLowerCase()}`} // Classe dinâmica com base no elemento
            >
              <img
                src={imageMap[character.name.toLowerCase()] || character.image} // Usa imagem mapeada ou a imagem do JSON
                alt={character.name}
                className="character-image"
              />
              <h2>{character.name}</h2>
              <p>Elemento: {character.element}</p>
              <p>Tipo de Arma: {character.weapon}</p>
            </div>
          ))
        ) : (
          <p>Nenhum personagem encontrado.</p> // Caso nenhum personagem atenda aos filtros
        )}
      </div>
    </div>
  );
};

// Exporta o componente para ser utilizado em outros lugares da aplicação
export default GenshinCharacters;
