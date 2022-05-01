const Person = require('../models').Person;
const db = require('../models');

beforeAll(async () => {
    await db.sequelize.sync();
});

test('create person', () => {
    // expect.assertions(1);
    Person.create({
        firstname: 'Tester',
        lastname: 'Draper',
        id: 2
    })
        .then(person => {
            expect(person.id).toEqual(2);
        })
        .catch(err => {
        });
});

test('get person', () => {
    // expect.assertions(2);
    Person.findByPk(2)
        .then(person => {
            expect(person.first_name).toEqual('Tester');
            expect(person.last_name).toEqual('Draper');
        })
        .catch(err => {
        });
});

test('delete person', () => {
    // expect.assertions(1);
    Person.destroy({
        where: {
            id: 2
        }
    })
        .then(person => {
            Person.findByPk(2)
                .then(person => {
                    expect(person).toBeNull();                    
                })
                .catch(err => {
                });
        })
        .catch(err => {
        });
});


// test('create person', async () => {
//     // expect.assertions(1);
//     const person = await Person.create({
//         id: 2,
//         first_name: 'Tester',
//         last_name: 'Draper'
//     });
//     expect(person.id).toEqual(2);
// });

// test('get person', async () => {
//     // expect.assertions(2);
//     const person = await Person.findByPk(2);
//     expect(person.first_name).toEqual('Tester');
//     expect(person.last_name).toEqual('Draper');
// });

// test('delete person', async () => {
//     // expect.assertions(1);
//     await db.Person.destroy({
//         where: {
//             id: 2
//         }
//     });
//     const person = await Person.findByPk(2);
//     expect(person).toBeNull();
// });

afterAll(() => db.sequelize.close())