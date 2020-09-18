export const StorageGetToken = async () => {
  const defaultValue = {
    accessToken: "",
    refreshToken: "",
  };
  try {
    const token = await localStorage.getItem("@token");
    return JSON.parse(token ? token : "");
  } catch (error) {
    // Error retrieving data
    return defaultValue;
  }
};

export const StorageSetToken = async (
  accessToken: string,
  refreshToken: string,
  expires_in: number
) => {
  const data = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    expires_in: expires_in,
  };
  console.log(JSON.stringify(data));
  await localStorage.setItem("@token", JSON.stringify(data));
  return true;
};

export const StorageClearToken = async () => {
  await localStorage.removeItem("@token");
};
