import faker from 'faker';
import uuid from 'react-native-uuid';


const mockData = (length = 15) => {
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

export default mockData;