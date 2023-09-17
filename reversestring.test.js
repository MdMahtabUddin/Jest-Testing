const reserseString = require('./reversestring')

test('reverseString function exists', () => {
    expect(reserseString).toBeDefined();
  });

  test('String reverses', () => {
    expect(reserseString('hello')).toEqual('olleh');
  });
  
  test('String reverses with uppercase', () => {
    expect(reserseString('Hello')).toEqual('olleh');
  });