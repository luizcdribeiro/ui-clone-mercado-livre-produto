import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction'

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>

      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt"/>
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com Mussum Ipsum</p>
        <p className="description">Receba o produto ou devolvemos o seu dinheiro</p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição do produto</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed suscipit enim. Nulla lacinia nibh gravida consectetur tempus. Integer molestie pharetra sem suscipit egestas. Sed condimentum, nisl sed sollicitudin condimentum, dolor erat hendrerit velit, sed maximus erat leo quis dui. Praesent sit amet malesuada neque. Donec pulvinar condimentum pulvinar. Fusce blandit massa non lectus interdum sollicitudin. Donec sit amet vehicula nulla. Sed sed sem a tellus suscipit venenatis nec ultrices nisi. Aenean malesuada laoreet nibh at aliquam. Curabitur ornare neque et quam tempus feugiat. Duis et pretium massa. Aenean non lorem eget purus lacinia varius. Quisque gravida laoreet dapibus.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Casamentiss faiz malandris se pirulitá. Detraxit consequat et quo num tendi nada. Mé faiz elementum girarzis, nisi eros vermeio.

      Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Per aumento de cachacis, eu reclamis.

      Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Quem num gosta di mim que vai caçá sua turmis! A ordem dos tratores não altera o pão duris. Si num tem leite então bota uma pinga aí cumpadi!

    </p>
  </Description>
)

export default Product;
