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
    return distanceTravelledInFeet;
    if (distanceTravelledInFeet < 401) {
        return 0;
    } else if (distanceTravelledInFeet == 400 && 2000) {
        return (distanceTravelledInFeet - 400)*.02;
    } else if (distanceFromHqInFeet == 2000 && 2500) {
        return
    }

}