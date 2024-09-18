//https://api-ecommerce-hazel.vercel.app/productos

export const getProducts = async () => {
  const response = await fetch(
    "https://api-ecommerce-hazel.vercel.app/productos"
  );
  const data = await response.json();
  return data;
};
export const addProduct = async (
  nombre,
  precio,
  url__img,
  descripcion,
  categoria
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
      }),
    }
  );
  return response;
};
