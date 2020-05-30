import { Input, Menu, Header , Image } from 'semantic-ui-react'
import React from "react"

export default class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name={this.props.loggedIn ? 'Dashboard' : "Home"}
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        {this.props.loggedIn &&  <Menu.Item
          name='Categories'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        /> }
        {/* <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        /> */}
        <Menu.Menu position='right'>
          {!this.props.loggedIn && <Menu.Item>
            <Menu.Item
            name="Log In"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
          </Menu.Item> }
          <Menu.Item>
          {this.props.loggedIn && <Header as='h5' style={{marginTop: "0.3rem"}}>
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
        </Header>}
        </Menu.Item>
          <Menu.Item
            name={this.props.loggedIn ? "Sign Up" : "Log Out"}
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}