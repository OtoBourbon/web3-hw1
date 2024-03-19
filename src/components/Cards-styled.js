import styled from 'styled-components';

export const Card = styled.div`
        height: 370px;
        width: 370px;
        border: solid 3px black;
        background-color: white;
        transition: 0.2s all ease-out;
        position: relative;
        margin: 20px;


        
        h3{
            position: relative;
            margin-left: 10px;
            font-size: 25px
        } 
        
        h4{
            margin-left: 10px;
            position: relative;
            font-weight: 300;
        }
        
        img{
            width: 100%; 
            height: 60%; 
            object-fit: cover; 
            top: 0; 
            left: 0; 
        }
        
        &:hover{
            box-shadow: 4px 4px;
        }

`
export const ArrowButt = styled.button`
        position: absolute;
        right: 10px;
        bottom: 20px;
        color: white;
        height: 35px;
        width: 35px;
        background-color: #5c64cf;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;
        border: none; 
`


