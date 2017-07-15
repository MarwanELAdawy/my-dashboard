import React, {Component} from 'react';
import styled from 'styled-components';

import './main.css';
import getRandomImage from '../apis/Unsplash';

// Styled Components
let Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

let AppContainer = styled.div`min-width: 1100px;`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: ''
    };
  }

  componentDidMount() {
    // Calling Unsplash api and getting a random photo
    getRandomImage().then(image => {
      let body = document.getElementsByTagName('body');
      body[0].style.backgroundImage = `url(${image})`;
    });
  }

  render() {
    return (
      <Body>
        <AppContainer>
          <h1>Good Mornining, Muhammad</h1>
        </AppContainer>
      </Body>
    );
  }
}

export default App;
