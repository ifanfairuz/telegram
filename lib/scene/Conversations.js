import React, { Component } from 'react';
import { List } from 'native-base';
import Conversation from '../comp/Conversation'


export default class Conversations extends Component {
  render() {
    const datas = [{
      "id": 1,
      "name": "Khulaimie Akhmad",
      "chat": "Ji diterosno ta gak orep iki ",
      "time": "5:58 PM",
      "photo": "data:image/jpeg;base64,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"
    }, {
      "id": 2,
      "name": "Evin Curtin",
      "chat": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
      "time": "7:30 AM",
      "photo": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
    }, {
      "id": 3,
      "name": "Stearne Llorens",
      "chat": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
      "time": "10:08 PM",
      "photo": "http://dummyimage.com/100x100.jpg/dddddd/000000"
    }, {
      "id": 4,
      "name": "Bevvy Groven",
      "chat": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
      "time": "9:36 AM",
      "photo": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
    }, {
      "id": 5,
      "name": "Esther Pelos",
      "chat": "Etiam faucibus cursus urna. Ut tellus.",
      "time": "1:24 AM",
      "photo": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
    }, {
      "id": 6,
      "name": "Henriette Worg",
      "chat": "Integer a nibh.",
      "time": "7:22 AM",
      "photo": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
    }, {
      "id": 7,
      "name": "Faina Burlingham",
      "chat": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "time": "7:10 AM",
      "photo": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
    }, {
      "id": 8,
      "name": "Robyn Pester",
      "chat": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
      "time": "3:52 AM",
      "photo": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
    }, {
      "id": 9,
      "name": "Madelina Gateley",
      "chat": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
      "time": "4:17 PM",
      "photo": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
    }, {
      "id": 10,
      "name": "Nell Pettyfer",
      "chat": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
      "time": "12:11 AM",
      "photo": "http://dummyimage.com/100x100.jpg/dddddd/000000"
    }, {
      "id": 11,
      "name": "Genevra Pittam",
      "chat": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
      "time": "2:41 PM",
      "photo": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
    }, {
      "id": 12,
      "name": "Torrin Parks",
      "chat": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
      "time": "1:31 AM",
      "photo": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
    }, {
      "id": 13,
      "name": "Martynne Stockdale",
      "chat": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "time": "10:26 AM",
      "photo": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
    }, {
      "id": 14,
      "name": "Brandy Elsby",
      "chat": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      "time": "5:43 AM",
      "photo": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
    }, {
      "id": 15,
      "name": "Julee McLanaghan",
      "chat": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      "time": "2:48 AM",
      "photo": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
    }, {
      "id": 16,
      "name": "Clerc Pesek",
      "chat": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
      "time": "12:02 AM",
      "photo": "http://dummyimage.com/100x100.jpg/dddddd/000000"
    }, {
      "id": 17,
      "name": "Talya Jerrold",
      "chat": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      "time": "7:52 AM",
      "photo": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
    }, {
      "id": 18,
      "name": "Sigmund Misson",
      "chat": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "time": "7:46 AM",
      "photo": "http://dummyimage.com/100x100.jpg/dddddd/000000"
    }, {
      "id": 19,
      "name": "Leyla Dabner",
      "chat": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "time": "4:29 PM",
      "photo": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
    }, {
      "id": 20,
      "name": "Rafa Verbrugghen",
      "chat": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
      "time": "1:06 AM",
      "photo": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
    }];
    return (
      <List dataArray={datas} renderRow={i => <Conversation data={i} />} />
    );
  }
}