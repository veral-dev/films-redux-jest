import styled from 'styled-components'

export const FormFilter = styled.form`
display: flex;
flex-direction: column;
align-items: center;
label{
    text-transform: uppercase;
    font-weight: bold;
}
input:not(:first-child){
    margin-left: 1.5rem;
}
div>label{
    margin-left: .25rem
}
`