import React from "react"
import styled from "styled-components"

import { radius, colors } from "../constants/variables"

import im1 from "../images/local1.png"
import im2 from "../images/local2.png"
import im3 from "../images/local3.png"

const items = [
  {
    category: "Our suppliers",
    name: "get to know john&Hannah, founders of GreenBean",
    image: im1,
    unit: "14",
  },
  {
    category: "Events",
    name: "Join us next week in our store in lohen and try Meets vegan meat",
    image: im2,
    unit: "1548",
  },
  {
    category: "Local with bagBuddy",
    name: "Best4Pups fresh dog food joins our Local with BagBuddy initative",
    image: im3,
    unit: "1926",
  },
]

const Local = () => {
  return (
    <div>
      <Value>Local</Value>
      <Items>
        {items.map((item, index) => (
          <ItemComponent key={index} item={item} />
        ))}
      </Items>
    </div>
  )
}

const ItemComponent = ({ item }) => (
  <Item>
    <Image src={item.image} />
    <Right>
      <Category>{item.category}</Category>
      <div>{item.name}</div>
      <Response>{item.unit} likes</Response>
    </Right>
  </Item>
)

const Value = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
`

const Items = styled.div`
  margin-bottom: 24px;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: ${colors.white};
  border-radius: ${radius};
  padding: 16px;
  box-shadow: 2px 10px 60px rgb(28, 36, 68, 0.15);

  &:not(:first-child) {
    margin-top: 16px;
  }
`

const Category = styled.div`
  color: ${colors.baseLighten1};
`

const Right = styled.div``

const Image = styled.img`
  height: 80px;
  margin-right: 16px;
`

const Response = styled.div`
  margin-top: 10px;
  color: ${colors.primary};
`

export default Local
