import styled from 'styled-components'
import React from 'react'

const Main = () => {
  const Background = () => {
    return <UIWrapper></UIWrapper>
  }

  return (
    <RelativeDiv>
      <AbsoluteDiv>
        <Background />
      </AbsoluteDiv>
      <ScaleEffect>
        <Foreground>
          <ParentWrapper>
            <WhiteText>NextJS-StarterKit</WhiteText>
          </ParentWrapper>
        </Foreground>
      </ScaleEffect>
    </RelativeDiv>
  )
}

export default Main

const ScaleEffect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ((min-width: 700px) and (max-width: 1100px)) {
    scale: 0.6;
  }

  @media ((min-width: 992px) and (max-width: 1100px)) {
    scale: 0.6;
  }

  @media ((min-width: 1101px) and (max-width: 1279px)) {
    scale: 0.65;
  }

  @media ((min-width: 1280px) and (max-width: 1400px)) {
    scale: 0.75;
  }

  @media ((min-width: 1401px) and (max-width: 1700px)) {
    scale: 0.8;
  }

  @media ((min-width: 1701px) and (max-width: 2000px)) {
    scale: 0.85;
  }

  @media ((min-width: 2001px) and (max-width: 2300px)) {
    scale: 0.9;
  }

  @media ((min-width: 2301px) and (max-width: 2800px)) {
    scale: 0.95;
  }

  @media ((min-width: 2801px) and (max-width: 3999px)) {
    scale: 1.5;
  }

  @media ((min-width: 4000px) and (max-width: 9999px)) {
    scale: 2;
  }
`

// Background
const UIWrapper = styled.div`
  background-color: #313639;
  background-size: cover; /* Ensure the background covers the entire element */
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;
`

// Layers on the foreground
const ParentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`

const RelativeDiv = styled.div`
  position: relative;
`

const WhiteText = styled.div`
  color: white;
  font-size: 100px;
  font-family: 'ProximaSemiBold';
`
