import React from "react"
import styled from "styled-components"

import { radius, colors } from "../constants/variables"

import Button from "./shared/Button"

import apples from "../images/apples.png"
import oranges from "../images/oranges.png"
import avocado from "../images/avocado.png"

import salmon from "../images/salmon.png"

const itemsProduce = [
  { name: "Apples", image: apples, unit: "1 kg" },
  { name: "Oranges", image: oranges, unit: "2 kg" },
  { name: "Avocado", image: avocado, unit: "3 pcs" },
]

const itemsFish = [{ name: "Salmon", image: salmon, unit: "2 pcs" }]

const itemsPets = [{ name: "Freddy premium dog food", image: salmon, unit: "15 kg" }]

const Buy = () => {
  return (
    <div>
      <Value>My list</Value>
      <Items>
        <Title>Produce</Title>
        {itemsProduce.map((item, index) => (
          <ItemComponent key={index} item={item} />
        ))}
      </Items>
      <Items>
        <TitleFish>Fish&Meat</TitleFish>
        {itemsFish.map((item, index) => (
          <ItemComponent key={index} item={item} />
        ))}
      </Items>
      <Items>
        <TitlePets>Pets</TitlePets>
        {itemsPets.map((item, index) => (
          <ItemComponent key={index} item={item} />
        ))}
      </Items>

      <ButtonWrapper>
        <Button full>Add item</Button>
      </ButtonWrapper>
    </div>
  )
}

const ItemComponent = ({ item }) => (
  <Item>
    <Left>
      <Image src={item.image} />
      <div>{item.name}</div>
    </Left>
    <div>{item.unit}</div>
  </Item>
)

const Value = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
`

const Title = styled.div`
  color: ${colors.green};
  margin-bottom: 16px;
`

const TitleFish = styled.div`
  color: ${colors.primary};
  margin-bottom: 16px;
`

const TitlePets = styled.div`
  color: ${colors.secondary};
  margin-bottom: 16px;
`

const Items = styled.div`
  margin-bottom: 24px;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.white};
  border-radius: ${radius};
  padding: 16px;
  box-shadow: 2px 10px 60px rgb(28, 36, 68, 0.15);

  &:not(:first-child) {
    margin-top: 16px;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  margin-right: 8px;
`

const ButtonWrapper = styled.div`
  position: fixed;
  width: calc(100% - 32px);
  bottom: 100px;
`

export default Buy
