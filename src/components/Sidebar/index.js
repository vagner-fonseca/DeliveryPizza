import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) =>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Sobremesa</SidebarLink>
                <SidebarLink to="/">Cardápio</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Fazer Pedido</SidebarRoute>
            </SideBtnWrap>

        </SidebarContainer>
    )
}

export default Sidebar