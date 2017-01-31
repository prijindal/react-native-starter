const faker = require('faker');
const uuid = require('react-native-uuid');


const mockList = (length = 15) => {
  const data = [];
  for (let i = 0; i < length; i += 1) {
    data.push({
      id: uuid.v1(),
      title: faker.name.findName(),
      body: faker.address.streetAddress(),
      avatar: faker.image.avatar(),
    });
  }
  return data;
};

const mockData = () => [
  {
    id: uuid.v1(),
    name: 'Today',
    list: mockList(2),
  },
  {
    id: uuid.v1(),
    name: 'Yesterday',
    list: mockList(4),
  },
  {
    id: uuid.v1(),
    name: 'This month',
    list: mockList(),
  },
];

module.exports = mockData;
