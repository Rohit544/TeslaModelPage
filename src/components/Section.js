import React from 'react'
import styled from 'styled-components'


function Section({title,dictionary,leftBtnText,rightBtnText}) {
  return (
    <Wrap >
        <ItemText>
            <h1>{title}</h1>
            <p>{dictionary}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                
                <RightButoon>
                    {rightBtnText}
                </RightButoon>
            </ButtonGroup>
            <DownArow src="/image/down-arrow.png "/>
        </Buttons>
    </Wrap>
 );
}

export default Section

const Wrap = styled.div`

    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/image/tesla.jpeg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-buttom: 30px;
    @media(max-width: 720px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;
`

const RightButoon = styled(LeftButton)`
    background: white;
    opacity: 0.85;
    color: black; 
`

const DownArow = styled.div`
    overflow-x: hidden;
    height: 40px;
`

const Buttons = styled.div`

`