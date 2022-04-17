import axios from "axios";
import { toast } from "react-toastify";

import { paymentURL } from "./apiUrl";
import getConfig from "./tokenConfig";

export const payForOrder = async (order, stripe) => {
  const config = getConfig();
  try {
    const { data, status } = await axios.post(paymentURL, { order }, config);

    if (status === 200) {
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    }
  } catch (e) {
    toast.error("Something went wrong!");
  }
};
