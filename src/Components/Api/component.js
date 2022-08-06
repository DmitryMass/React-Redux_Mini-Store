const URL = 'https://fakestoreapi.com';

export const request = async (url, method = 'GET', body) => {
  const data = await fetch(`${URL}${url}`, {
    method,
    headers: {
      'Content-type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (data.ok) {
    return data.json();
  }
  throw new Error('Sorry Api Error');
};

export const getAllProducts = async () => {
  try {
    const data = await request('/products');
    return data;
  } catch (e) {
    throw new Error('Сan not get Products List');
  }
};

export const getOneProduct = async (id) => {
  try {
    const data = await request(`/products/${id}`);
    return data;
  } catch (e) {
    throw new Error(`Cannot Get current ${id} Product`);
  }
};

export const createProduct = async (product) => {
  try {
    const data = await request('/products', 'POST', product);
    return data;
  } catch (e) {
    throw new Error('Cannot create new Product');
  }
};

export const updateProduct = async (id, product) => {
  try {
    const data = await request(`/products/${id}`, 'PUT', product);
    return data;
  } catch (e) {
    throw new Error('Cannot Update Current Product');
  }
};

export const deleteProduct = async (id) => {
  try {
    const data = await request(`/products/${id}`, 'DELETE');
    return data;
  } catch (e) {
    throw new Error('Cannot Delete Current Product');
  }
};
