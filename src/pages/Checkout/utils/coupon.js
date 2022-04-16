export const generateRandomCoupon = (totalPrice) => {
  const now = new Date();
  const currHr = now.getHours();
  let coupon = 0;

  if (currHr >= 0 && currHr < 12) coupon = 3; //morning
  else if (currHr >= 12 && currHr < 18) coupon = 5; // afternoon
  else coupon = 7; // night

  if (totalPrice >= 20000) coupon = coupon + 5;

  return coupon;
};
