module.exports = {
  itemFields: (data, user, file) => {
    const itemFields = {
      user: user.id,
      text: data.text,
      price: data.price,
      name: data.name,
      itemImage: file.location,
      category: data.category
    };

    return itemFields;
  }
};
