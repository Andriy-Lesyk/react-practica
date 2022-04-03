import React from 'react'
import { Aside, Header, Menu, MenuItem, Text } from './Sidebar.styles'
import { menuConfig } from '../../Utils/menu'

function Sidebar() {
  return (
    <Aside>
          <Header />
      <Menu >
        {menuConfig.map(({name, icon })=>
          <MenuItem key={ name}>{icon}<Text>{name}</Text></MenuItem>
        )}
          </Menu>
    </Aside>
  )
}

export default Sidebar