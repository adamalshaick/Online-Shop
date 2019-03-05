module.exports = {
  removeElement: (array, element) => {
    // Check to see if element is in array
    if (
      array.filter(arrayElement => arrayElement._id.toString() === element)
        .length === 0
    ) {
      return false;
    }
    // Get remove index
    const removeIndex = array
      .map(arrayElement => arrayElement._id.toString())
      .indexOf(element);

    //Splice element out of array
    array.splice(removeIndex, 1);
    return array;
  }
};
