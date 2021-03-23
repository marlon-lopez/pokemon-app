import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  border-radius: 8px;
`
export const TriangleContainers = styled.div`
  z-index: 5;
`
export const RightTriangle = styled.svg`
  position: absolute;
  top: -30px;
  right: 0;
  width: 200px;
  transform: rotate(180deg);
`
export const LeftTriangle = styled.svg`
  position: absolute;
  bottom: -21px;
  left: 0;
  width: 200px;
`

export const Image = styled.img`
  cursor: pointer;
  width: 170px;
  z-index: 10;
`
export const Actions = styled.div`
  width: 100%;
  text-align: center;
  z-index: 12;
  margin-bottom: 1rem;
`
export const Name = styled.h3`
  z-index: 10;
  color: #fff;
  letter-spacing: 2px;
  text-transform: capitalize;
  display: inline-block;
  margin-right: 1rem;
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
  background: ${({ color }) => color.text};
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  margin: 5px 5px;
`
