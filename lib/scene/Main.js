import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import { StyleSheet } from 'react-native';
import Drawer from '../comp/Drawer';
import Comversations from './Conversations';


export default class Main extends React.Component {
  render() {
    return (
      <Drawer ref={ (c) => this._drawer = c }>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this._drawer.openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Telegram</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' />
              </Button>
            </Right>
          </Header>
          <Content>
            <Comversations />
          </Content>
          <Button primary rounded style={styles.button_new}>
            <Icon name='pencil' style={styles.button_icon} />
          </Button>
        </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  button_new: {
    height: 55,
    width: 55,
    padding: 1,
    position: 'absolute',
    bottom: 15,
    right: 15
  },
  button_icon: {
    fontSize: 22
  } 
});