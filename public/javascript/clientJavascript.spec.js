
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
        expect(returnKittens()).toBe("kittens");
    });
    //this test should add 2 to a number.
    it('this test should add 2 to a number', function(){
        expect(addTwo(3)).toBe(5);
    });
    //this test should add 2 to a number.
    it('this test should add 2 to a number', function(){
        expect(addTwo(7)).toBe(9);
    });
    //this test should calculate the correct GPA.
    it('this test should calculate the correct GPA', function(){
        expect(calculateGPA('A', 4)).toBe(4);
    });
    //this test should calculate the correct GPA.
    it('this test should calculate the correct GPA', function(){
        expect(calculateGPA('C', 2)).toBe(2);
    });
    //this test should calculate the correct GPA.
    it('this test should calculate the correct GPA', function(){
        expect(calculateGPA('F', 4)).toBe(0);
    });
    //this test should calculate the correct GPA.
    it('this test should calculate the correct GPA', function(){
        expect(totalGPA(4, 4, 4)).toBe(4);
    });
    //this test should calculate the correct GPA.
    it('this test should calculate the correct GPA', function(){
        expect(totalGPA(4, 2, 3)).toBe(3);
    });
    //this test should calculate the correct GPA.
    it('this test should calculate the correct GPA', function(){
        expect(totalGPA(0, 4, 2)).toBe(2);
    });
});

