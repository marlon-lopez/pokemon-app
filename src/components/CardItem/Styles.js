import styled from 'styled-components'

export const Card = styled.div`
  width: 220px;
  height: 300px;
  position: relative;
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
`
export const TriangleContainers = styled.div`
  z-index: 5;
`
export const RightTriangle = styled.svg`
  position: absolute;
  top: -30px;
  right: 0;
  width: 150px;
  transform: rotate(180deg);
`
export const LeftTriangle = styled.svg`
  position: absolute;
  bottom: -21px;
  left: 0;
  width: 150px;
`

export const Image = styled.img`
  width: 170px;
  z-index: 10;
`
export const Name = styled.h3`
  z-index: 10;
  color: #fff;
  letter-spacing: 2px;
`

export const InfoTags = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 200px;
  padding: 0 10px 10px 10px;
`
export const Type = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  background: #8ecf52;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  margin: 5px 5px;
`
