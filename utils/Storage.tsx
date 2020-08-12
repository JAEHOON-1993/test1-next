export const StorageGetToken = async () => {
  const defaultValue = {
    accessToken: "",
    refreshToken: "",
  };
  try {
    const token = await localStorage.getItem("@token");
    return JSON.parse(token);
  } catch (error) {
    // Error retrieving data
    return defaultValue;
  }
};

export const StorageSetToken = async (
  accessToken: string,
  refreshToken: string
) => {
  const data = {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
  try {
    await localStorage.setItem("@token", JSON.stringify(data));
    return true;
  } catch (error) {
    // Error saving data
    return false;
  }
};

export const StorageClearToken = async () => {
  await localStorage.removeItem("@token");
};
