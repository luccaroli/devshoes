import React from 'react';
import { MdShoppingCart } from 'react-icons/md'

import { ProductList } from './styles';


function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adaption-easy-v2-masculino/06/KTM-0100-006/KTM-0100-006_zoom2.jpg?ts=1584370742&ims=326x" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$ 192,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adaption-easy-v2-masculino/06/KTM-0100-006/KTM-0100-006_zoom2.jpg?ts=1584370742&ims=326x" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$ 192,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adaption-easy-v2-masculino/06/KTM-0100-006/KTM-0100-006_zoom2.jpg?ts=1584370742&ims=326x" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$ 192,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adaption-easy-v2-masculino/06/KTM-0100-006/KTM-0100-006_zoom2.jpg?ts=1584370742&ims=326x" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$ 192,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adaption-easy-v2-masculino/06/KTM-0100-006/KTM-0100-006_zoom2.jpg?ts=1584370742&ims=326x" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$ 192,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adaption-easy-v2-masculino/06/KTM-0100-006/KTM-0100-006_zoom2.jpg?ts=1584370742&ims=326x" alt="Tênis"/>
        <strong>Tênis Nike</strong>
        <span>R$ 192,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  )
}

export default Home;