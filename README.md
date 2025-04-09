Documentação API Genshin 

1. O Componente React 

O componente GenshinCharacters é responsável por mostrar os personagens. Ele usa hooks do React, como useState e useEffect, para gerenciar dados e fazer a requisição da API. 

 

2. O que a Gente Importa? 

js 

Copiar 

import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import '../styles/GenshinCharacters.css'; 
 

Aqui, a gente importa: 

React: Biblioteca principal para trabalhar com o React. 

useState: Usado para guardar as informações, tipo a lista de personagens ou o que o usuário está buscando. 

useEffect: Serve para fazer a requisição à API quando o componente for carregado. 

axios: Uma biblioteca para facilitar o processo de pedir dados para a API. 

'../styles/GenshinCharacters.css': O arquivo CSS que cuida do visual. 

 

3. Mapeando as Imagens 

A constante imageMap tem uma lista dos personagens e as imagens correspondentes a cada um deles. Ela serve para mostrar a imagem certa de acordo com o nome do personagem. 

js 

Copiar 

const imageMap = { 
  arlecchino: '/images/arlecchino.png', 
  diluc: '/images/diluc.png', 
  ... 
}; 
 

 

4. Requisição dos Dados 

Usamos o useEffect para carregar os personagens assim que o componente for montado. A requisição é feita para um arquivo JSON fictício, e a resposta é guardada no estado do componente. 

js 

Copiar 

useEffect(() => { 
  axios.get('/data/characters.json') 
    .then(response => { 
      setCharacters(response.data); 
    }) 
    .catch(error => { 
      console.error('Erro ao buscar os personagens:', error); 
    }); 
}, []); 
 

 

5. Como Funciona o Filtro? 

A gente permite que o usuário filtre os personagens tanto pelo nome quanto pelo elemento (Pyro, Hydro, etc.). Aqui está a lógica: 

js 

Copiar 

const filteredCharacters = characters 
  .filter(character => 
    character.name.toLowerCase().includes(search.toLowerCase()) && 
    (selectedElement === '' || character.element.toLowerCase() === selectedElement.toLowerCase()) 
  ) 
  .sort((a, b) => a.name.localeCompare(b.name)); 
 

O nome é filtrado conforme o que o usuário digita na busca. 

O filtro de elemento é feito dependendo do que o usuário escolher no dropdown (como Pyro ou Hydro). 

A lista é ordenada alfabeticamente por nome. 

 

6. Exibindo os Personagens 

Depois que a lista de personagens é filtrada, a gente exibe as informações de cada um na tela: 

js 

Copiar 

{filteredCharacters.length > 0 ? ( 
  filteredCharacters.map((character) => ( 
    <div 
      key={character.name} 
      className={`character-card ${character.element?.toLowerCase()}`} 
    > 
      <img 
        src={imageMap[character.name.toLowerCase()] || character.image} 
        alt={character.name} 
        className="character-image" 
      /> 
      <h2>{character.name}</h2> 
      <p>Elemento: {character.element}</p> 
      <p>Tipo de Arma: {character.weapon}</p> 
    </div> 
  )) 
) : ( 
  <p>Nenhum personagem encontrado.</p> 
)} 
 

Aqui a gente pega os personagens filtrados e mostra: 

A imagem do personagem (com base no nome ou na imagem que vem da API). 

O nome do personagem. 

O elemento (como Pyro, Hydro). 

O tipo de arma (como espada, arco). 

 

7. Estilos e Aparência 

O arquivo GenshinCharacters.css cuida da aparência dos personagens na tela. Aqui estão algumas coisas que ele faz: 

Cartões dos personagens: Eles têm fundo escuro, bordas arredondadas e uma sombra legal. Quando você passa o mouse, o cartão dá um efeito de zoom. 

Imagens: As imagens dos personagens se ajustam bem no cartão, também com bordas arredondadas. 

Efeito por elemento: Dependendo do tipo de elemento, o cartão do personagem ganha uma cor diferente no fundo. 

 

8. Conclusão 

Esse componente de Genshin Impact permite que a gente veja os personagens do jogo de uma forma bem legal e interativa. Dá pra buscar personagens pelo nome, filtrar por elemento e ver as informações deles, tudo com uma aparência bem estilosa. A gente usou React e fez a requisição para uma API fictícia para pegar os dados. 

 
