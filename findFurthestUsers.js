module.exports = findFurthestUsers = (users) => {
  try {
    const futherestUsers = users.map((user) => {
      let maxDistance = { user: user, distance: 0 };
      users.forEach((currentUser) => {
        const distance = countDistance(
          user.address.geolocation,
          currentUser.address.geolocation
        );
        if (maxDistance.distance < distance)
          maxDistance = {
            ...maxDistance,
            user2: currentUser,
            distance: distance,
          };
      });
      return maxDistance;
    });
    return findMax(futherestUsers);
  } catch (err) {
    console.log("ERROR: ", err);
  }
};

const countDistance = (address1, address2) => {
  const lon1 = (address1.long * Math.PI) / 180;
  const lon2 = (address2.long * Math.PI) / 180;
  const lat1 = (address1.lat * Math.PI) / 180;
  const lat2 = (address2.lat * Math.PI) / 180;

  const dLon = lon2 - lon1;
  const dLat = lat2 - lat1;
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);

  const c = 2 * Math.asin(Math.sqrt(a));
  const r = 6371;
  return c * r;
};

const findMax = (data) => {
  return data.reduce((max, current) =>
    max.distance > current.distance ? max : current
  );
};
