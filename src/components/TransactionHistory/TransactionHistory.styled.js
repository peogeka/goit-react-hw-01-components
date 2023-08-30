import styled from 'styled-components';

export const TableTransaction = styled.table`
    border: none;
    border-collapse: collapse;
    box-shadow: 0 2px 2px 1px rgba(0,0,0,.5);
    color: #6495ED;
    margin: 0 auto;
    text-align: center;
    width: 400px;
`;

export const TableHeader = styled.thead `
    background-color: #FF7F50;
    color: #fff;
`

export const TableBody = styled.tbody`
    tr:nth-child(odd) {
  background-color: white;}

  tr:nth-child(even) {
  background-color: rgb(217, 227, 228)};
`