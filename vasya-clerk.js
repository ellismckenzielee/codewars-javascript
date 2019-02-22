function tickets(peopleInLine){
   // Check to see if can give change with remaining money
   twenty_fives = 0;
   fiftys = 0;
   hundreds = 0;


   for(i=0; i < peopleInLine.length; i++) {
    console.log(peopleInLine);
    if (peopleInLine[i] === 25) {
      //Add one to twenty-five in the till
      twenty_fives++;
    }
    else if (peopleInLine[i] === 50) {
      if (twenty_fives == 0) {
        return "NO";
      }
      else {
        twenty_fives--;
        fiftys++;
      }
    }
    else if (peopleInLine[i] === 100) {
      if (fiftys > 0) {
        //Reduce fiftys by one and twenties by one
        fiftys--;
        twenty_fives--;
        hundreds++;
      }
      else if (twenty_fives >= 3) {
        twenty_fives -= 3;
        hundreds++;
      }
      else {
        return "NO"
      }
    }
   }
   return "YES"
  }