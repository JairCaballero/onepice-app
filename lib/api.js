/* eslint-disable prettier/prettier */
export async function fetchData() {
  // https://api-onepiece.com/en/documentation
  const API_URL = "https://api.api-onepiece.com/v2/fruits/en";

  try {
    // Realiza la petición a la API
    const response = await fetch(API_URL);

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.statusText}`);
    }

    // Parsea los datos de la respuesta
    const data = await response.json();

    // Extrae y formatea los datos del personaje
    const formattedCharacters = data.map((item) => {
      const { id, name, description, roman_name, type, filename } = item;

      return {
        id,
        name,
        description,
        roman_name,
        type,
        filename,
      }
    })
    // Retorna los datos formateados
    return formattedCharacters
  } catch (error) {
    console.error("Error al procesar los datos:", error)
    return []
  }
}
