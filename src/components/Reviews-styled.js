import styled from 'styled-components';

export const Review = styled.div`
        width: 290px;
        border: solid 3px black;
        transition: 0.2s all ease-out;
        position: relative;
        margin: 20px;
        text-align: center;
        padding: 60px 40px;

        h3, h4, h5, img{
            position: relative;
            color: #555555;
            font-family: sans-serif;
        }

        h4{
            font-size: 16px;
            font-weight: 200;
        }

        h5{
            font-weight: 200;
        }

        img{
            width: 100px;
            height: 100px;
        }

        &:hover{
            box-shadow: 4px 4px;
        }
`