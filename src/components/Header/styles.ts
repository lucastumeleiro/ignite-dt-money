import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    padding:  2rem 1rem 8rem;
`;

export const Content = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1120px;
    margin: 0 auto;


    button{
        font-size: 1rem;
        color: #FFFFFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        
        transition: filter 0.5s ease;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;