export const getStation = (stations: string) => {
  if (["1"].includes(stations.slice(-1))) {
    return `${stations} Пункт`;
  } else if (["2", "3", "4"].includes(stations.slice(-1))) {
    return `${stations} Пункта`;
  } else {
    return `${stations} Пунктов`;
  }
};
