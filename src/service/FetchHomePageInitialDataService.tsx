import axios from "axios";

export default (async function FetchHomePageInitialDataService(): Promise<any> {
  await axios.get("api/home-page-initial-data");
});
