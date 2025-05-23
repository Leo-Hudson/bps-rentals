"use server";

import logError from "@/Utils/ServerActions";
import getDataFetchFunction from "./FetchFunction";

export const getMyAccountPageContent = async () => {
  try {
    const response = await getDataFetchFunction({
      dataCollectionId: "RentalsMyAccountPage",
    });
    if (response && response.items) {
      return response.items[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    logError("Error fetching RentalsMyAccountPage data:", error);
    return [];
  }
};

export const getChangePasswordPageContent = async () => {
  try {
    const response = await getDataFetchFunction({
      dataCollectionId: "RentalsChangePasswordPage",
    });
    if (response && response.items) {
      return response.items[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    logError("Error fetching RentalsChangePasswordPage data:", error);
    return [];
  }
};
