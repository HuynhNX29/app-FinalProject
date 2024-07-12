import HomePage from "../pages/HomePage";
import MediaDetail from "../pages/MediaDetail";
import MediaSearch from "../pages/MediaSearch";

export const routesGen = {
  home: "/",
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  mediaSearch: "/search",
  person: (id) => `/person/${id}`,
  favoriteList: "/favorites",
  reviewList: "/reviews",
  passwordUpdate: "password-update"
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
 
  {
    path: "/search",
    element: <MediaSearch />,
    state: "search"
  },
  
  {
    path: "/:mediaType/:mediaId",
    element: <MediaDetail />
  }
];

export default routes;