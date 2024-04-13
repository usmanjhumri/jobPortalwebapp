import Home from "../Pages/Home/Home";
import SavedJobs from "../Pages/SavedJobs/SavedJobs";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Jobs from "../Pages/Jobs/Jobs";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import JobDetail from "../Pages/JobDetail/JobDetail";
import ApplicationForm from "../Pages/ApplicationForm/ApplicationForm";
import Profille from "../Pages/Profile/Profille";
import UserProfile from "../Pages/Profile/UserProfile";
import PersonalInfo from "../Pages/Profile/PersonalInfo";
import Education from "../Pages/Profile/Education";
import Skills from "../Pages/Profile/Skills";
import Experience from "../Pages/Profile/Experience";

export const Path = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/savedjobs",
    component: <SavedJobs />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/contact-us",
    component: <ContactUs />,
  },
  {
    path: "/jobs",
    component: <Jobs />,
  },
  {
    path: "/login",
    component: <SignIn />,
  },
  {
    path: "/signup",
    component: <SignUp />,
  },
  {
    path: "/jobdetail",
    component: <JobDetail />,
  },
  {
    path: "/appilcation-form",
    component: <ApplicationForm />,
  },
  {
    path: "/profile",
    component: <Profille activePage={<UserProfile />} />,
  },
  {
    path: "/profile/personalinfo",
    component: <Profille activePage={<PersonalInfo />} />,
  },
  {
    path: "/profile/education",
    component: <Profille activePage={<Education />} />,
  },
  {
    path: "/profile/skills",
    component: <Profille activePage={<Skills />} />,
  },
  {
    path: "/profile/experience",
    component: <Profille activePage={<Experience />} />,
  },
];
