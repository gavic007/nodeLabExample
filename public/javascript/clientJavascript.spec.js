
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
    it('this test should fail!', function(){
        expect(returnKittens()).toBe("Not Kittens!");
    });
    //this test should add 2 to a number.
    it('this test should add 2 to a number', function(){
        expect(addTwo(3)).toBe(5);
    });


});

