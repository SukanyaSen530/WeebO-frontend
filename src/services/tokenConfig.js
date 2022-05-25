const getConfig = () => {
  const token = localStorage.getItem("weeboToken");

  if (token)
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  else return "";
};




export default getConfig;
