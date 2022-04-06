const getConfig = () => {
  const token = localStorage.getItem("weeboToken");

  if (token)
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  else return "";
};

export default getConfig;
