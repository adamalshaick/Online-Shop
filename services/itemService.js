module.exports = {
  itemFields: (data, user, file) => {
    const itemFields = {
      itemImage: file.filename,
      text: data.text,
      price: data.price,
      title: data.title,
      category: data.category,
      user: user.id,
      handle: data.handle
    };

    return itemFields;
  }
};
