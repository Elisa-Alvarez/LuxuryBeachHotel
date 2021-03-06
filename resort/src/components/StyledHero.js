import styled from 'styled-components'


const StyledHero = styled.header`
    position: relative;
    min-height: 100vh;
    background: url(${props => props.img}) center/cover no-repeat ;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledHero;