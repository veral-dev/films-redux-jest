import styled from 'styled-components'

export const ChipTags = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
list-style: none;
padding: 0.5rem;
margin: 0;
`

export const BoxTags = styled.div`
    color: rgba(0, 0, 0, 0.87);
    border: none;
    cursor: default;
    display: inline-flex;
    margin: 0 .1rem;
    padding: .25rem 1rem;
    font-size: 0.8125rem;
    box-sizing: border-box;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    white-space: nowrap;
    border-radius: 16px;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: #e0e0e0;
svg{
    margin-left: .1rem;
    cursor: pointer;
}
`

