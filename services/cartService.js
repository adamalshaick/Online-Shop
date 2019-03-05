module.exports = {
  itemFields: data => {
    const itemFields = {
      user: data.user,
      item: data.item,
      text: data.text,
      price: data.price,
      title: data.title,
      itemImage: data.itemImage
    };

    return itemFields;
  }
};
