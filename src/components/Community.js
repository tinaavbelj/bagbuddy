import React from "react"
import styled from "styled-components"

import { radius, colors } from "../constants/variables"

import im1 from "../images/comm1.png"
import im2 from "../images/comm2.png"
import im3 from "../images/comm3.png"

const items = [
  {
    category: "Offers",
    name: "Help us choose products for our next discount offer",
    image: im1,
    unit: "342",
  },
  {
    category: "Feedback",
    name: "What do you think about our new store layouts?",
    image: im2,
    unit: "1548",
  },
  {
    category: "Local with bagBuddy",
    name: "Candidates for Local with BagBuddy programme",
    image: im3,
    unit: "1926",
  },
]

const Community = () => {
  return (
    <div>
      <Value>Community</Value>
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
      <Response>{item.unit} responses</Response>
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

export default Community
