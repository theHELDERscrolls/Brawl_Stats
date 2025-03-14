export const fetchMapsInfo = async () => {
  try {
    const res = await fetch("https://api.brawlify.com/v1/maps");
    const data = await res.json();

    return (data.list || data)
      .map((map) => ({
        id: map.id,
        name: map.name,
        image: map.imageUrl,
        isDisabled: map.disabled,

        // Game Mode (necessary to classify).
        scIdGameMode: map.gameMode.scId,
        nameGameMode: map.gameMode.name,
      }))
      .filter((map) => map.isDisabled === false);
  } catch (error) {
    console.error("Error fetching Maps:", error);
    alert("An error occurred while fetching the data. Please try again later.");
    return [];
  }
};

// fetchMapsInfo().then((data) => {
//   console.log(data);
// });
