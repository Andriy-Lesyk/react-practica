import React from 'react'
import Paper from "../Paper/Paper"
import data from "../../data/university.json"
import { HiPencilAlt, HiTrash} from "react-icons/hi"
import { OrganizationType, Name, Actions, Image} from "./Card.styles"

function Card() {
    const { name}=data
  return (
      <Paper gap={ 32}>
        <Image src="../../public/logo192.png" alt="logo" />
        <OrganizationType>университет</OrganizationType>
          <Name>{ name}</Name>
          <Actions>
              <HiPencilAlt/>
              <HiTrash/>
          </Actions>
    </Paper>
  ) 
}

export default Card