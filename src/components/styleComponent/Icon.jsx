import styled from 'styled-components'

export const Icon = styled.div`
display: flex;
justify-content: center;
:hover{
    cursor: pointer;
}
`
export const IconEdit = styled.div`
background-color: var(--bgcolor);
border-radius: 50%;
padding: .35rem;
margin: 0 .25rem;
max-width: fit-content;
color: white;
:hover{
    cursor: pointer;
}
`

export const IconDelete = styled.div`
background-color: var(--primary);
border-radius: 50%;
padding: .35rem;
margin: 0 .25rem;
max-width: fit-content;
color: white;
:hover{
    cursor: pointer;
}
`