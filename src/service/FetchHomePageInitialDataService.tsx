import axios from "axios";

export default (async function FetchHomePageInitialDataService(): Promise<any> {
  await axios.get("/home-page-initial-data");
});
