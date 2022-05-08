import axios from "axios";
import { toast } from "react-toastify";

import { paymentURL } from "./apiUrl";
import getConfig from "./tokenConfig";

export const payForOrder = async (order, stripe) => {
  const config = getConfig();
  const userEmail = window.localStorage.getItem("weeboUserMail");

  try {
    const { data, status } = await axios.post(
      paymentURL,
      { order, userEmail },
      config
    );

    if (status === 200) {
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    }
  } catch (e) {
    toast.error("Something went wrong!");
  }
};
