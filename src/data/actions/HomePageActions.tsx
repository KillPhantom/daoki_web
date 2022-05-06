/* Services */
import SubmitCollaboratorInfoServices from "../../service/SubmitCollaboratorInfoService";
import FetchHomePageInitialDataService from "../../service/FetchHomePageInitialDataService";
import TopicSearchService from "../../service/TopicSearchService";

export const SUBMIT_COLLABORATOR_INFO_SERVICES =
  "SUBMIT_COLLABORATOR_INFO_SERVICES" as const;

export const SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED =
  "SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED" as const;

export const FETCH_HOME_PAGE_INITIAL_DATA =
  "FETCH_HOME_PAGE_INITIAL_DATA" as const;

export const FETCH_HOME_PAGE_INITIAL_DATA_FULFILLED =
  "FETCH_HOME_PAGE_INITIAL_DATA_FULFILLED" as const;

export const SEARCH_TOPIC_DATA = "SEARCH_TOPIC_DATA" as const;
export const SEARCH_TOPIC_DATA_FULFILLED =
  "SEARCH_TOPIC_DATA_FULFILLED" as const;

export const submitCollaboratorInfo = (email: string, detail: string) => ({
  type: SUBMIT_COLLABORATOR_INFO_SERVICES,
  payload: SubmitCollaboratorInfoServices(email, detail),
});

export const fetchHomePageInitialData = () => ({
  type: FETCH_HOME_PAGE_INITIAL_DATA,
  payload: FetchHomePageInitialDataService(),
});

export const searchTopic = (keyword: string, page: number, size: number) => ({
  type: SEARCH_TOPIC_DATA,
  payload: TopicSearchService(keyword, page, size),
});
