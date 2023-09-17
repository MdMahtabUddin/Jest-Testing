const functions =require('./functions');


// toBe 
test('2+2 equal to 4',()=>{
    expect(functions.add(2,2)).toBe(4);
})


// not
test('2+2 Not equal to 5',()=>{
    expect(functions.add(2,2)).not.toBe(5);
})


// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull 
test('should be null',()=>{
    
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
  });

// toEqual 
test ('object should be Md Mahtab Uddin',()=>{
    expect(functions.createUser()).toEqual({firstName:'Md Mahtab',lastName:'Uddin'
    })
})


// Less then to Greater then 
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
  });


//   Regex 
test ('There is no I in team',()=>{
    expect('team').not.toMatch(/I/)
})

// Arrays  

test('Mahtab should be usernames',()=>{
    usernames=['Shawon', 'Mona', 'Fatema', 'Pavel'];

expect(usernames).toContain('Fatema')
})


// Working with asysnc file 
// Promise 
test ('User fetch name should be Leanne Graham',()=>{
    expect.assertions(1);

    return functions.userfetch()
    .then(data =>{
        expect(data.name).toEqual('Leanne Graham')
    })
})

// Async Await 
// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
//   });

