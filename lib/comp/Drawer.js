import React, { Component } from 'react';
import { Drawer as DrawerComp } from 'native-base';
import SideBar from './Sidebar';

export default class Drawer extends Component {
  closeDrawer () {
    this.drawer._root.close()
  }

  openDrawer () {
    this.drawer._root.open()
  }

  render() {
    return (
      <DrawerComp ref={(ref) => { this.drawer = ref; }} content={<SideBar navigator={this.navigator} />} onClose={() => this.closeDrawer()} >
        {this.props.children}
      </DrawerComp>
    );
  }
}