//https://api-ecommerce-hazel.vercel.app/productos

export const getProducts = async () => {
  const response = await fetch(
    "https://api-ecommerce-hazel.vercel.app/productos"
  );
  const data = await response.json();
  return data;
};

export const getProductId = async (id) => {
  const response = await fetch(
    `https://api-ecommerce-hazel.vercel.app/productos/${id}`
  );
  const data = await response.json();
  return data;
};

export const getOffers = async () => {
  const response = await fetch(
    `https://api-ecommerce-hazel.vercel.app/productos/ofertas/true`
  );
  const data = await response.json();
  return data;
};
export const addProduct = async (
  nombre,
  precio,
  url__img,
  descripcion,
  categoria,
  offers,
  nuevoPrecio
) => {
  const response = await fetch(
    "https://api-ecommerce-hazel.vercel.app/productos",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        precio,
        url__img,
        descripcion,
        categoria,
        offers,
        nuevoPrecio,
      }),
    }
  );
  return response;
};

export const updateProduct = async (
  id,
  nombre,
  precio,
  url__img,
  descripcion,
  categoria,
  offers,
  nuevoPrecio
) => {
  const response = await fetch(
    `https://api-ecommerce-hazel.vercel.app/productos/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        precio,
        url__img,
        descripcion,
        categoria,
        offers,
        nuevoPrecio,
      }),
    }
  );
  return response;
};
