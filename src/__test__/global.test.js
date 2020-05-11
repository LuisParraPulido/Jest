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