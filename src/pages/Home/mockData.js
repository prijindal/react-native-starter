/* @flow */
const faker = require('faker/locale/en_CA.js');
const uuid = require('react-native-uuid');
const nextFrame = require('next-frame');

const mockList = async (length = 15) => {
  const data = [];
  await nextFrame();
  for (let i = 0; i < length; i += 1) {
    data.push({
      id: uuid.v1(),
      title: faker.name.findName(),
      body: faker.address.streetAddress(),
      avatar: faker.image.avatar(),
      date: faker.date.past(),
    });
  }
  return data;
};

const UNIT = 1000 * 3600 * 24;

const mockData = async () => {
  const data = [
    {
      id: uuid.v1(),
      name: 'Today',
      list: [],
    },
    {
      id: uuid.v1(),
      name: 'Last Month',
      list: [],
    },
    {
      id: uuid.v1(),
      name: 'Last 3 Month',
      list: [],
    },
    {
      id: uuid.v1(),
      name: 'Last Year',
      list: [],
    },
    {
      id: uuid.v1(),
      name: 'Last 3 Years',
      list: [],
    },
  ];
  const list = await mockList(50);
  list.forEach((item) => {
    const diff = (new Date() - item.date) / UNIT;
    if (diff < 1) {
      data[0].list.push(item);
    } else if (diff < 30) {
      data[1].list.push(item);
    } else if (diff < 90) {
      data[2].list.push(item);
    } else if (diff < 365) {
      data[3].list.push(item);
    } else {
      data[4].list.push(item);
    }
  });
  return data;
};

module.exports = mockData;
