import React from 'react';

import { Container, Condition, Row, HeartIcon, DispatchTag, PriceCard, PriceRow, InstallementsInfo, StockStatus, MethodCard, CheckIcon, Actions, Button, Benefits, ShieldIcon } from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta branca sem marca</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando Normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fractions">99</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallementsInfo>em 3x de R$ 33,33</InstallementsInfo>
      </PriceCard>

      <StockStatus>Status disponível</StockStatus>

      <MethodCard>

        <CheckIcon />

        <div>
         <span className="title">Frete Grátis</span>
         <span className="details">Beneficio Lorem Ipsum Mussum</span>
         <a href="#" className="more">
            Ver mais opções
         </a>

        </div>

      </MethodCard>

      <Actions >
        <Button solid >Comprar Agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra garantida, receba o produto que está esperando ou devolvemos o dinheiro.
          </p>
        </li>
      </Benefits>


    </Container>
  );
};

export default ProductAction;
