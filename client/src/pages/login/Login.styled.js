import styled from 'styled-components';

export const Container = styled.div`    
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;    
`

export const Wrapper = styled.div`
    display: flex;    
    flex-direction: column;
`
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    
`
export const Logo = styled.img`
    width:37px;

`

export const SignUpText = styled.span`
    font-size: 12px;
`

export const SignUpLink = styled.a`
    color : hsl(206,100%,40%);
    &:hover{
        color :hsl(206,100%,52%);
    }

`

