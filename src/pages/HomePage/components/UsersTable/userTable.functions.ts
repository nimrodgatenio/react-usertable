import { UserAddress } from "../../../../shared/types/user.types";

export const formatAddress = (address?: UserAddress) => {
  if (!address) return ""; // Handle the case when address is undefined
  const { street, suite, city, zipcode } = address;
  return `${street}, ${suite}, ${city}, ${zipcode}`;
};
