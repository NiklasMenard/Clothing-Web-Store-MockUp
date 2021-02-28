export const FilterProducts = (newSearch, products, category) => {
  if (newSearch) {
    return products.filter((product) => product.name.toLowerCase()
      .includes(newSearch.toLowerCase()));
  }

  // random items for mock up purposes
  if (category.featured === 'Toggled') {
    if (category.productCategory === 'Shoes') {
      return products.slice(4, 5);
    }
    if (category.productCategory === 'Pants') {
      return products.slice(0, 1);
    }
    if (category.productCategory === 'Shirts') {
      return products.slice(3, 4);
    }
  }

  if (category.genderCategory === 'Men') {
    if (category.productCategory === '') {
      return products.filter((product) => product.gender === 'male').sort((a, b) => a.name < b.name);
    }
    if (category.productCategory === 'Shoes') {
      return products.filter((product) => product.gender === 'male' && product.category_id === 1);
    }
    if (category.productCategory === 'Pants') {
      return products.filter((product) => product.gender === 'male' && product.category_id === 2);
    }
    if (category.productCategory === 'Shirts') {
      return products.filter((product) => product.gender === 'male' && product.category_id === 3);
    }
  }

  if (category.genderCategory === 'Women') {
    if (category.productCategory === '') {
      return products.filter((product) => product.gender === 'female').sort((a, b) => a.name < b.name);
    }
    if (category.productCategory === 'Shoes') {
      return products.filter((product) => product.gender === 'female' && product.category_id === 1);
    }
    if (category.productCategory === 'Pants') {
      return products.filter((product) => product.gender === 'female' && product.category_id === 2);
    }
    if (category.productCategory === 'Shirts') {
      return products.filter((product) => product.gender === 'female' && product.category_id === 3);
    }
  }
  // default featured random products
  return products.slice(2, 5);
};

export const generateProductTitleText = (newSearch, category) => {
  if (newSearch) {
    return 'Search results: ';
  }
  if (!category.genderCategory) {
    return 'Featured products';
  }
  if (category.genderCategory && !category.productCategory) {
    return `${category.genderCategory}'s clothes`;
  }
  return `${category.genderCategory}'s ${category.productCategory}`;
};
