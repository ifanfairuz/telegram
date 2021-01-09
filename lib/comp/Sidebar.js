import React, { Component } from 'react';
import { Text, Container, View, Thumbnail, Right, Button, ListItem, Icon as IconN, Left, Body, List } from 'native-base'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconF from 'react-native-vector-icons/FontAwesome';
import material from '../../native-base-theme/variables/material';

export default class Sidebar extends Component {
  render() {
    const image = 'data:image/jpeg;base64,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';
    return (
      <Container>
        <View style={styles.header}>
          <Thumbnail source={{ uri: image }} style={styles.image} />
          <View style={styles.profile}>
            <Body style={{alignItems: 'flex-start'}}>
              <Text style={styles.name}>Masrur</Text>
              <Text style={styles.number} note>+6281252267689</Text>
            </Body>
            <Right>
              <Button transparent>
                <IconN name='caret-down-outline' style={styles.profileIcon} />
              </Button>
            </Right>
          </View>
        </View>
        <List style={styles.menuTop}>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="users" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Group Baru</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="lock" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Secret Chat Baru</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <IconF style={styles.iconMenu} name="bullhorn" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Channel Baru</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="user" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Kontak</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="phone" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Panggilan</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="bookmark" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Pesan Tersimpan</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="settings" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Pengaturan</Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="user-plus" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Undang Teman</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="help-circle" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>FAQ Telegram</Text>
            </Body>
          </ListItem>
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: material.brandPrimary
  },
  image: {
    marginLeft: 5,
    height: 60,
    width: 60
  },
  profile: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  name: {
    color: '#fff',
    fontWeight: 'bold'
  },
  number: {
    color: '#fff',
    opacity: .7
  },
  menuTop: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#aaa',
    marginTop: 10
  },
  menu: {
    paddingVertical: 25
  },
  textMenu: {
    fontWeight: 'bold',
    marginLeft: 10
  },
  iconMenu: {
    color: '#aaa',
    fontSize: 25
  },
  profileIcon: {
    color: '#fff',
    fontSize: 14
  }
})