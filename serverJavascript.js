// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};


exports.calculateGPA = function() {
    var calculateGPA = function (grade, credit) {
        var numGrade = 0;
        if (grade == 'A') {
            numGrade = 4;
        }
        if (grade == 'B') {
            numGrade = 3;
        }
        if (grade == 'C') {
            numGrade = 2;
        }
        if (grade == 'D') {
            numGrade = 1;
        }

        return (numGrade * credit) / credit;
    }
   
}

