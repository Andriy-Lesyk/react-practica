import React from 'react'
import Paper from "../Paper/Paper"
import PropTypes from "prop-types"
import { HiPencilAlt, HiTrash} from "react-icons/hi"
import { OrganizationType, Name, Actions, Image, Container, Icon } from "./Card.styles"
import logo from "../../logo.png"


function Card({ name}) {
    
  return (
      <Paper gap={32}>
          <Container>
            <Image src={ logo} alt="logo" />
            <OrganizationType>университет</OrganizationType>
            <Name>{ name}</Name>
              < Actions>
                    <Icon>
                      <HiPencilAlt />
                  </Icon>
                  <Icon>
                      <HiTrash/>
                    </Icon>
              </Actions>
        </Container>
    </Paper>
  ) 
}
Card.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Card