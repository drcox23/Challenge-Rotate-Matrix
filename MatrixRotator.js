const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here

    // console.log(this.matrix);   
    // console.log(this.matrix.length)

    // // **find the middle arrary
    // let middleArr = this.matrix[Math.floor(this.matrix.length/2)];
    // console.log(middleArr);
    // // **find the center index
    // let centerNum = middleArr[Math.floor(middleArr.length/2)];
    // let centerIndex = middleArr.indexOf(centerNum);
    // console.log(centerIndex);
    let theMatrix = this.matrix;
    // console.log(theMatrix)
    console.log(direction);
    let newMatrix = [];
    let newArr = [];

    if (direction === 'ClockWise'){
      console.log(theMatrix);
      console.log('*************')
      while (theMatrix[0].length>0){
        for (let i = theMatrix.length-1; i>=0; i--){
          newArr.push(theMatrix[i][0]);
          theMatrix[i].shift();
        }
        newMatrix.push(newArr);
        newArr = [];
      }
      console.log(newMatrix);
      this.matrix = newMatrix;
    }else if (direction === 'CounterClockWise'){
      console.log(theMatrix);
      console.log('**************')
      while (theMatrix[0].length>0){
        for (let i = 0; i<theMatrix.length; i++){
          newArr.push(theMatrix[i][theMatrix[i].length-1]);
          theMatrix[i].pop();
        }
        newMatrix.push(newArr);
        newArr = [];
      }
      console.log(newMatrix);
      this.matrix = newMatrix;

    }

  
  

    }


    
    // function centerIndex(arr){
    //   let middleIndex = 
    //   return middleIndex
    // } 
    // console.log(middleArr.findIndex(centerIndex));  


    // must be a valid Direction, see Direction.jsmiddleArr

  // }
};
