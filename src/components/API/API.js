const API = {};

API.get = (endpoint) => callFetch(endpoint, "GET");

export default API;

const callFetch = async (endpoint, method, dataObj = null) => {
  // Build request object
  let requestObj = { method: method }; // GET
  if (dataObj)
    requestObj = {
      ...requestObj,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataObj),
    };

  try {
    let result = null;
    const response = await fetch(endpoint, requestObj);
    if (response.status !== 204) result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true, result }
      : { isScuess: false, message: `${result.message}` };
  } catch (error) {
    return { isSuccess: false, message: error.message };
  }
};
