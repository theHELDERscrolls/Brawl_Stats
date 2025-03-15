export const fetchStatsInfo = async (mapId) => {
  try {
    const res = await fetch(`https://api.brawlify.com/v1/maps/${mapId}`);
    const data = await res.json();

    return data.stats;
  } catch (error) {
    console.error("Error fetching Stats:", error);
    alert("An error occurred while fetching the data. Please try again later.");
    return [];
  }
};

// fetchStatsInfo("15000005").then((data) => {
//   console.log(data);
// });
