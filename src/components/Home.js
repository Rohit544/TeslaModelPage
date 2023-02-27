import React from 'react'
import styled from 'styled-components';
import Section from './Section'

function Home() {
  return (
    
    <Container>
        <Section 
            title= "Model S"
            dictionary= "Order Online Touchless Delevary"
            leftBtnText="Customer Service"
            rightBtnText= "Existing Price "
        />
        
        {/* <Section
            title= "Model X"
            dictionary="Order Online Touchless Delevary"
            leftBtnText="Customer Service"
            rightBtnText= "Existing Price "
         /> */}


        
    </Container>
  )
}

export default Home


const Container = styled.div`
  
  height: 100vh;
  
`