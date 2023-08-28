import styled from 'styled-components';



export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin: 0 auto;
    width: 400px;
    border: 1px solid rgb(204, 204, 204);
    padding: 20px;
    border-radius: 5px;
    
`;

export const FotoCard = styled.div`
    text-align: center;`

export const Foto = styled.img`
  width: 150px;
  border-radius: 50%;
`;


export const List = styled.ul`
   
    background-color: #e3e3e3;
    border: 2px solid #a9a9a9;
    
    display: flex;
    width: 100%;
    padding: 0;

`;

export const ListItem = styled.li`
    
    align-items: center;
    border-right: 2px solid #a9a9a9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    width: 33.33333%;
`;

export const TextName = styled.a`
    display: block;
    font-weight: bold;
    font-size: 24px;
`;

export const StatsNumber = styled.span`
    font-weight: bold;
    font-size: 24px;`;