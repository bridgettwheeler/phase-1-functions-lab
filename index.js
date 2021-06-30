function distanceFromHqInBlocks(pickUpLocation) {
    let hqBlock = 42
    if (pickUpLocation > hqBlock) {
        return pickUpLocation -= hqBlock;
    } else if (pickUpLocation < hqBlock) {
        return hqBlock -= pickUpLocation;
    }
}

  function distanceFromHqInFeet(someValue) {
      console.log(distanceFromHqInBlocks(someValue)*264);
      return distanceFromHqInBlocks(someValue)*264;
  }
   
function distanceTravelledInFeet (beginingBlock, endBlock) {
    if (beginingBlock < endBlock) {
        return (endBlock -= beginingBlock)*264;
    } else if (beginingBlock > endBlock) {
        return (beginingBlock -= endBlock)*264;
    }
  } 

function calculatesFarePrice(beginingBlock, endBlock) {
    let feet = distanceTravelledInFeet(beginingBlock, endBlock);
    console.log(feet);
    if (feet < 401) {
        return 0;
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400)*.02;
    } else if (feet >= 2000 && feet < 2500) {
        return 25;
    } else if (feet > 2500) {
        return 'cannot travel that far';
    }

}