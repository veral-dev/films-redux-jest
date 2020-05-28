import styled from 'styled-components'

export const Table = styled.table`
    margin-top: 1rem;
    width: 100%;
    margin-bottom: 5rem;
    color: #888;
    border-collapse: collapse;
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    }
thead{
    background-color: var(--bgcolor);
    color: white;
}
#filmNames{
    width: 120px;
    display: block;
}
td{
    
    padding: .75rem 0;
    vertical-align: middle;
}
th{
    padding: .25rem;
    
}
tr{
    border-bottom: 1px solid #f1ecec;
}
 @media(min-width: 600px){
        display: inline-table;
    #filmNames{
        width: 100%;
         display: initial;
}
`
export const Actions = styled.td`
display: flex;
justify-content: center;
margin-top: .25rem;
margin-bottom: .25rem;
`