export const generateRandomCoupon = (totalPrice) => {
  const now = new Date();
  const currHr = now.getHours();
  let coupon = 0;

  switch (currHr) {
    case currHr > 0 && currHr < 12:
      coupon = 5; //morning
      break;
    case currHr < 18:
      coupon = 8; // afternoon
    default:
      coupon = 11; // night
  }

  if (totalPrice >= 20000) coupon = coupon + 8;
  else if (totalPrice >= 15000) coupon = coupon + 5;

  return coupon;
};
