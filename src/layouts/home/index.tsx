import React from 'react';

import { Container, Info, Buttons, Button, RoundedButton } from './styles';

const Home: React.FC = () => (
  <Container>
    <section>
      <Info>
        <p>Olá, eu sou o</p>
        <h1>Ton Cabral</h1>
        <h2>Desenvolvedor web e mobile</h2>
      </Info>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de
        mula manquis sem cabeça. Nec orci ornare consequat. Praesent lacinia
        ultrices consectetur.
      </p>

      <Buttons>
        <Button expand="block">Download CV</Button>
        <RoundedButton expand="block">Contato</RoundedButton>
      </Buttons>
    </section>
    <section></section>
  </Container>
);

export default Home;
