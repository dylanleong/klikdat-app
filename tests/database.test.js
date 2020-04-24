const Person = require('../models').Person;
const db = require('../models');

beforeAll(async () => {
    await db.sequelize.sync();
});

test('create person', async () => {
    expect.assertions(1);
    const person = await Person.create({
        id: 2,
        first_name: 'Tester',
        last_name: 'Draper'
    });
    expect(person.id).toEqual(2);
});

test('get person', async () => {
    expect.assertions(2);
    const person = await Person.findByPk(2);
    expect(person.first_name).toEqual('Tester');
    expect(person.last_name).toEqual('Draper');
});

test('delete person', async () => {
    expect.assertions(1);
    await db.Person.destroy({
        where: {
            id: 2
        }
    });
    const person = await Person.findByPk(2);
    expect(person).toBeNull();
});

afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    db.sequelize.close();
    done();
  });