export const fetchBrawlersInfo = async () => {
  try {
    const res = await fetch("https://api.brawlify.com/v1/brawlers");
    const data = await res.json();

    return (data.list || data).map((brawler) => ({
      id: brawler.id,
      name: brawler.name,
      class: brawler.class.name,
      rarityName: brawler.rarity.name,

      image: brawler.imageUrl,
      portrait: `https://raw.githubusercontent.com/Brawlify/CDN/master/brawlers/portraits/${brawler.id}.png`,
      model: `https://raw.githubusercontent.com/Brawlify/CDN/master/brawlers/model/${brawler.id}.png`,
      emoji: brawler.imageUrl3,

      description: brawler.description,

      //1º star power
      first_StarPower: brawler.starPowers[0]?.name || null,
      first_StarPowerDescription: brawler.starPowers[0]?.description || null,
      first_StarPowerImage: brawler.starPowers[0]?.imageUrl || null,

      //2º star power
      second_StarPower: brawler.starPowers[1]?.name || null,
      second_StarPowerDescription: brawler.starPowers[1]?.description || null,
      second_StarPowerImage: brawler.starPowers[1]?.imageUrl || null,

      // 1º gadget
      first_Gadget: brawler.gadgets[0]?.name || null,
      first_GadgetDescription: brawler.gadgets[0]?.description || null,
      first_GadgetImage: brawler.gadgets[0]?.imageUrl || null,

      // 2º gadget
      second_Gadget: brawler.gadgets[1]?.name || null,
      second_GadgetDescription: brawler.gadgets[1]?.description || null,
      second_GadgetImage: brawler.gadgets[1]?.imageUrl || null,
    }));
  } catch (error) {
    console.error("Error fetching Brawlers:", error);
    alert("An error occurred while fetching the data. Please try again later.");
    return [];
  }
};

//fetchBrawlersInfo().then((data) => console.log(data));
