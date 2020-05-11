const text = 'hola mundo';
const fruits = ['Apple', 'banana', 'melon']

test('It must to have a string', () => {
  expect(text).toMatch(/mundo/);
});

test('are we receving a banana?', () => {
  expect(fruits).toContain('banana');
});

test('Greater than', () => {
  expect(10).toBeGreaterThan(9);
});

test('True', () => {
  expect(true).toBeTruthy();
});


const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''))
};

test('testing a callback', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  });
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'))
    }
    resolve(str.split('').reverse().join(''))
  });
};

test('Testing a promise', () => {
  return reverseString2('Hello')
    .then(string => {
      expect(string).toBe('olleH')
    })
})

test('Testing async/await', async () => {
  const string = await reverseString2('Hello');
  expect(string).toBe('olleH')
})

afterEach( () =>console.log('After each test') );
afterAll( () =>console.log('After all tests') );
beforeEach( () =>console.log('Before each test') );
beforeAll( () =>console.log('Before all tests') );