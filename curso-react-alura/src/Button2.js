import React from 'react';
import styled from 'styled-components';

//dizendo que queremos mudar a cor de background caso a exista a propriedade primary
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

//componente que centraliza os botoes
const Container = styled.div`
  text-align: center;
`;

class Button2 extends Component {
    render(){
        return(
            <div>
                <Button>Normal Button</Button>
                <Button primary>Primary Button</Button>
            </div>
        );
    }
}


export default Button2;