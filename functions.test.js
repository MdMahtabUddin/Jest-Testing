const functions =require('./functions');

test('2+2 equal to 4',()=>{
    expect(functions.add(2,2)).toBe(4);
})

test('2+2 Not equal to 5',()=>{
    expect(functions.add(2,2)).not.toBe(5);
})


test('should be null',()=>{
    
    expect(functions.isNull()).toBeNull();
})

