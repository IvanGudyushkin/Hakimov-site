import MainPage from "../Pages/MainPage/MainPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import AutobiographyPage from "../Pages/AutobiographyPage/AutobiographyPage";


export const InfoRoutes = [
    { path: '/', element: <MainPage />},
    { path: '/about', element: <AboutPage />},
    { path: '/autobiography', element: <AutobiographyPage />},
]
