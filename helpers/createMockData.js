var faker = require('faker');
var uuid = require('react-native-uuid')
var fs = require('fs');

const length = 15;
const data = [];
for (let i = 0; i < length; i += 1) {
	data.push({
	  id: uuid.v1(),
	  title: faker.name.findName(),
	  body: faker.address.streetAddress(),
	  avatar: faker.image.avatar(),
	});
}

fs.writeFileSync('mockedData.js', JSON.stringify(data, 0, 2));