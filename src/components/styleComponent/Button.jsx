import styled from 'styled-components'

export const Button = styled.button`
color: white;
background-color: var(--primary);
padding: .25rem 2rem;
border: 1px solid var(--primary);
border-radius: .3rem;
text-transform: uppercase;
:hover{
cursor: pointer;
background-color: var(--primaryShadow);
}
`