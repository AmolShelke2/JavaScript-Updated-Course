// Find percentage of a person with their own type of marks.

const FindMyPercentage = function (marksArr) {
  const totalMarks = marksArr.length * 100;
  console.log(totalMarks);

  // do the addition of the obtained marks
  let obtainedMarks = 0;
  for (let i = 0; i < marksArr.length; i++) {
    if (marksArr[i] < 35) {
      // if the person failed in any one subject
      console.log(`You failed in this subject with the marks ${marksArr[i]}`);
    } // this is not valid case so take care of it also.
    else if (marksArr[i] > 100) {
      console.log(`no-one obtained marks greater than 100`);
    }
    // and when all the cases are valid
    obtainedMarks += marksArr[i];
  }
  console.log(obtainedMarks);

  // add the formula for the percentage.
  // the totalSubject I'm thinking is 5 plus 100 marks internal
  const percentage = (obtainedMarks / totalMarks) * 100;
  console.log(`${percentage}%`);
};

FindMyPercentage([45, 65, 67, 87, 60, 80]);
FindMyPercentage([60, 34, 64, 63, 74, 70, 50]);
