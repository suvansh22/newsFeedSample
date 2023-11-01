export const USER_DATA = [
  {
    id: "03e2fec2-11b8-4837-8aee-13b8d08d9f78",
    userName: "Sandra Strange",
    userHandle: "sanstrange",
    level: 1,
    imageUrl: "https://robohash.org/hicveldicta.png?size=50x50",
    verified: true,
    type: "pro",
  },
  {
    id: "a25a67ee-6790-420b-bba9-9cb624aad14c",
    userName: "Rosie Sakura",
    userHandle: "sakuraro",
    level: 4,
    imageUrl: "https://robohash.org/doloremquesintcorrupti.png?size=50x50",
    verified: false,
    type: "normal",
  },
  {
    id: "ea132b4c-e443-45e4-b3ab-d7e074ffb099",
    userName: "Damian Greyson",
    userHandle: "dgreyson",
    level: 1,
    imageUrl: "https://robohash.org/consequunturautconsequatur.png?size=50x50",
    verified: false,
    type: "normal",
  },
  {
    id: "b0362b72-2ed5-4588-ba64-4dca794a9e71",
    userName: "The Green Goo",
    userHandle: "greengoo",
    level: 1,
    imageUrl: "https://robohash.org/facilisdignissimosdolore.png?size=50x50",
    verified: false,
    type: "normal",
  },
  {
    id: "95ba78b1-9369-4052-8147-1f6056a38c93",
    userName: "Bearded Wonder",
    userHandle: "brdwonder",
    level: 2,
    imageUrl: "https://robohash.org/adverovelit.png?size=50x50",
    verified: false,
    type: "normal",
  },
  {
    id: "7976e99c-eb88-4870-944f-9ce2bced3c30",
    userName: "Marina Valentine",
    userHandle: "mrsmarina",
    level: 4,
    imageUrl: "https://robohash.org/laboriosamfacilisrem.png?size=50x50",
    verified: false,
    type: "pro",
  },
];

export const getUser = ({ userId }) => {
  let selectedUser = USER_DATA.filter((item) => item.id === userId)[0];
  return selectedUser;
};
