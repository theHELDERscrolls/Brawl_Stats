export const getPlayerInfo = async (playerTag) => {
  // Almacenamos la apiKey
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);
  

  // URL a la que queremos hacer el fetch
  const url = `https://api.brawlstars.com/v1/players/${encodeURIComponent(
    playerTag
  )}`;

  /* encodeURIComponent() => reemplaza ciertos caracteres en su codificación UTF-8. En 
  este caso tenemos un # en el código del jugador (y lo veremos también en el de los
  clubs), que con ayuda de esta función se "traduce" en "%23". Es por ello que en todos
  los enlaces que genera la llamada el %23 precede justo al primer caracter del código
  de jugador. */

  try {
    const res = await fetch(url, {
      method: "GET", // Solamente podemos leer datos, por ello usamos GET.
      headers: {
        // Requerimientos para poder hacer el fetch.
        Authorization: `Bearer ${apiKey}`, // Formato de autorización que piden Bearer + la API KEY
        Accept: "application/json", // Formato en el que queremos obtener esos datos
      },
    });

    /* Ya que un fetch no va a lanzar un error si este se da en el HTTP, hemos de comprobar manualmente
    este se da.
    - ok => Contiene un estado indicando si la respuesta fue exitosa o no.
    - status => Contiene el código de estado de la respuesta. */
    if (!res.ok) {
      /* Con throw detenemos la ejecución manualmente (no se ejecuta el código que continue después), salimos
      del try y lo captura el catch. */
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching player dara:", error);
    return null;
  }
};

getPlayerInfo("#9JVCQ9RCU").then((data) => {
  console.log(data);
});
