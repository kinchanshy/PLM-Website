import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const AboutShell = lazy(() => import("./AboutLinks/AboutShell"));
const Profile = lazy(() => import("./AboutLinks/Profile"));
const VM = lazy(() => import("./AboutLinks/ProfileLinks/VM"));
const Seal = lazy(() => import("./AboutLinks/ProfileLinks/Seal"));
const History = lazy(() => import("./AboutLinks/ProfileLinks/History"));
const Hymn = lazy(() => import("./AboutLinks/ProfileLinks/Hymn"));
const Charter = lazy(() => import("./AboutLinks/ProfileLinks/Charter"));
const Code = lazy(() => import("./AboutLinks/ProfileLinks/Code"));
const Map = lazy(() => import("./AboutLinks/ProfileLinks/Map"));
const Thrusts = lazy(() => import("./AboutLinks/ProfileLinks/Thrusts"));
const Facilities = lazy(() => import("./AboutLinks/ProfileLinks/Facilities"));
const OBE = lazy(() => import("./AboutLinks/OBE"));
const Administration = lazy(() => import("./AboutLinks/Administration"));
const BOR = lazy(() => import("./AboutLinks/AdministrationLinks/BOR"));
const President = lazy(() =>
  import("./AboutLinks/AdministrationLinks/President")
);
const VP = lazy(() => import("./AboutLinks/AdministrationLinks/VP"));
const Directors = lazy(() =>
  import("./AboutLinks/AdministrationLinks/Directors")
);
const Deans = lazy(() => import("./AboutLinks/AdministrationLinks/Deans"));
const OrgChart = lazy(() =>
  import("./AboutLinks/AdministrationLinks/OrgChart")
);
const SupportStaff = lazy(() =>
  import("./AboutLinks/AdministrationLinks/SupportStaff")
);
const PrideHall = lazy(() => import("./AboutLinks/PrideHall"));
const BoardPassers = lazy(() =>
  import("./AboutLinks/PrideHallLinks/BoardPassers")
);
const Awards = lazy(() => import("./AboutLinks/PrideHallLinks/Awards"));
const Outstanding = lazy(() =>
  import("./AboutLinks/PrideHallLinks/Outstanding")
);
const Model = lazy(() => import("./AboutLinks/PrideHallLinks/Model"));
const Contact = lazy(() => import("./AboutLinks/Contact"));
const AcademicsShell = lazy(() => import("./AcademicsLinks/AcademicsShell"));
const Overview = lazy(() => import("./AcademicsLinks/Overview"));
const Colleges = lazy(() => import("./AcademicsLinks/Colleges"));
const CAUP = lazy(() => import("./AcademicsLinks/CollegeLinks/CAUP"));
const PLMBS = lazy(() => import("./AcademicsLinks/CollegeLinks/PLMBS"));
const CED = lazy(() => import("./AcademicsLinks/CollegeLinks/CED"));
const COE = lazy(() => import("./AcademicsLinks/CollegeLinks/COE"));
const CHASS = lazy(() => import("./AcademicsLinks/CollegeLinks/CHASS"));
const CN = lazy(() => import("./AcademicsLinks/CollegeLinks/CN"));
const CPT = lazy(() => import("./AcademicsLinks/CollegeLinks/CPT"));
const CS = lazy(() => import("./AcademicsLinks/CollegeLinks/CS"));
const CL = lazy(() => import("./AcademicsLinks/CollegeLinks/CL"));
const GSL = lazy(() => import("./AcademicsLinks/CollegeLinks/GSL"));
const CM = lazy(() => import("./AcademicsLinks/CollegeLinks/CM"));
const SG = lazy(() => import("./AcademicsLinks/CollegeLinks/SG"));
const SPH = lazy(() => import("./AcademicsLinks/CollegeLinks/SPH"));
const Calendar = lazy(() => import("./AcademicsLinks/Calendar"));
const CRS = lazy(() => import("./AcademicsLinks/CRS"));
const AdmissionShell = lazy(() => import("./AdmissionsLinks/AdmissionsShell"));
const AdmissionOverview = lazy(() =>
  import("./AdmissionsLinks/AdmissionOverview")
);
const PLMAT = lazy(() => import("./AdmissionsLinks/PLMAT"));
const MCAT = lazy(() => import("./AdmissionsLinks/MCAT"));
const CLAT = lazy(() => import("./AdmissionsLinks/CLAT"));
const Programs = lazy(() => import("./AdmissionsLinks/Programs"));
const Scholarship = lazy(() => import("./AdmissionsLinks/Scholarship"));
const NewsShell = lazy(() => import("./NewsLinks/NewsShell"));
const PressRelease = lazy(() => import("./NewsLinks/PressRelease"));
const Gallery = lazy(() => import("./NewsLinks/Gallery"));
const Reports = lazy(() => import("./NewsLinks/Reports"));
const NewsLetter = lazy(() => import("./NewsLinks/NewsLetter"));
const Announcements = lazy(() => import("./NewsLinks/Announcements"));
const Message = lazy(() => import("./NewsLinks/Message"));
const ResearchShell = lazy(() => import("./ResearchLinks/ResearchShell"));
const Theses = lazy(() => import("./ResearchLinks/Theses"));
const DownloadShell = lazy(() => import("./Downloads/DownloadShell"));
const Error = lazy(() => import("./Error"));
const StudentShell = lazy(() =>
  import("./OtherLinks/StudentsLinks/StudentShell")
);
const Students = lazy(() => import("./OtherLinks/StudentsLinks/Students"));
const StudentManual = lazy(() =>
  import("./OtherLinks/StudentsLinks/StudentManual")
);
const Tuition = lazy(() => import("./OtherLinks/StudentsLinks/Tuition"));
const Services = lazy(() => import("./OtherLinks/StudentsLinks/Services"));
const NSTP = lazy(() => import("./OtherLinks/StudentsLinks/NSTP"));
const SSC = lazy(() => import("./OtherLinks/StudentsLinks/SSC"));
const Org = lazy(() => import("./OtherLinks/StudentsLinks/Org"));
const Evaluation = lazy(() => import("./OtherLinks/StudentsLinks/Evaluation"));
const StudentCRS = lazy(() => import("./OtherLinks/StudentsLinks/StudentCRS"));
const FacultyShell = lazy(() =>
  import("./OtherLinks/FacultyLinks/FacultyShell")
);
const Faculty = lazy(() => import("./OtherLinks/FacultyLinks/Faculty"));
const Policies = lazy(() => import("./OtherLinks/FacultyLinks/Policies"));
const FacultyManual = lazy(() =>
  import("./OtherLinks/FacultyLinks/FacultyManual")
);
const List = lazy(() => import("./OtherLinks/FacultyLinks/List"));
const Alumni = lazy(() => import("./OtherLinks/AlumniLinks/Alumni"));
const PartnersShell = lazy(() =>
  import("./OtherLinks/PartnersLinks/PartnersShell")
);
const Partners = lazy(() => import("./OtherLinks/PartnersLinks/Partners"));
const CommunityShell = lazy(() =>
  import("./OtherLinks/CommunityLinks/CommunityShell")
);
const Campus = lazy(() => import("./OtherLinks/CommunityLinks/Campus"));
const Events = lazy(() => import("./OtherLinks/CommunityLinks/Events"));
const Sports = lazy(() => import("./OtherLinks/CommunityLinks/Sports"));
const VISA = lazy(() => import("./OtherLinks/CommunityLinks/VISA"));
const CharterShell = lazy(() => import("./Footer/Charter/CharterShell"));
const CitizensCharter = lazy(() => import("./Footer/Charter/CitizensCharter"));
const ARTACShell = lazy(() => import("./OtherLinks/ActCompliance/ARTACShell"));
const ARTAC = lazy(() => import("./OtherLinks/ActCompliance/ARTAC"));
const CareersShell = lazy(() => import("./QuickLinks/Careers/CareersShell"));
const CareersPLM = lazy(() => import("./QuickLinks/Careers/CareersPLM"));
const CareersAlumni = lazy(() => import("./QuickLinks/Careers/CareersAlumni"));
const ProcurementShell = lazy(() =>
  import("./QuickLinks/Procurement/ProcurementShell")
);
const Annual = lazy(() => import("./QuickLinks/Procurement/Annual"));
const Competitive = lazy(() => import("./QuickLinks/Procurement/Competitive"));
const Alternative = lazy(() => import("./QuickLinks/Procurement/Alternative"));
const Notice = lazy(() => import("./QuickLinks/Procurement/Notice"));
const Bids = lazy(() => import("./QuickLinks/Procurement/Bids"));
const ContactShell = lazy(() => import("./QuickLinks/ContactUs/ContactShell"));
const ContactUs = lazy(() => import("./QuickLinks/ContactUs/ContactUs"));
const GuideShell = lazy(() => import("./Footer/SiteGuide/GuideShell"));
const Guide = lazy(() => import("./Footer/SiteGuide/Guide"));
const PrivacyShell = lazy(() => import("./Footer/PrivacyPolicy/PrivacyShell"));
const Privacy = lazy(() => import("./Footer/PrivacyPolicy/Privacy"));
const TermsShell = lazy(() => import("./Footer/TermsOfUse/TermsShell"));
const Terms = lazy(() => import("./Footer/TermsOfUse/Terms"));

export const Routing = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "about",
    element: AboutShell,
    children: [
      {
        path: "university-profile",
        element: Profile,
        children: [
          {
            path: "vision-and-mission",
            element: VM,
          },
          {
            path: "seal-and-symbols",
            element: Seal,
          },
          {
            path: "history",
            element: History,
          },
          {
            path: "university-hymn",
            element: Hymn,
          },
          {
            path: "university-charter",
            element: Charter,
          },
          {
            path: "university-code",
            element: Code,
          },
          {
            path: "university-map",
            element: Map,
          },
          {
            path: "academic-thrusts",
            element: Thrusts,
          },
          {
            path: "facilities",
            element: Facilities,
          },
        ],
      },
      {
        path: "outcome-based-education",
        element: OBE,
      },
      {
        path: "administration",
        element: Administration,
        children: [
          {
            path: "board-of-regents",
            element: BOR,
          },
          {
            path: "the-president",
            element: President,
          },
          {
            path: "vice-president-&-assistant-vice-presidents",
            element: VP,
          },
          {
            path: "directors-and-chiefs",
            element: Directors,
          },
          {
            path: "deans",
            element: Deans,
          },
          {
            path: "organizational-chart",
            element: OrgChart,
          },
          {
            path: "presidential-support-staff",
            element: SupportStaff,
          },
        ],
      },
      {
        path: "pride-hall",
        element: PrideHall,
        children: [
          {
            path: "board-exam-passers",
            element: BoardPassers,
          },
          {
            path: "awards",
            element: Awards,
          },
          {
            path: "outstanding-alumni",
            element: Outstanding,
          },
          {
            path: "model-employees",
            element: Model,
          },
        ],
      },
      {
        path: "contact",
        element: Contact,
      },
    ],
  },
  {
    path: "academics",
    element: AcademicsShell,
    children: [
      {
        path: "academic-overview",
        element: Overview,
      },
      {
        path: "colleges",
        element: Colleges,
        children: [
          {
            path: "college-of-architecture-and-urban-planning",
            element: CAUP,
          },
          {
            path: "plm-business-school",
            element: PLMBS,
          },
          {
            path: "college-of-education",
            element: CED,
          },
          {
            path: "college-of-engineering",
            element: COE,
          },
          {
            path: "college-of-humanities-arts-and-social-sciences",
            element: CHASS,
          },
          {
            path: "college-of-nursing",
            element: CN,
          },
          {
            path: "college-of-physical-therapy",
            element: CPT,
          },
          {
            path: "college-of-science",
            element: CS,
          },
          {
            path: "college-of-law",
            element: CL,
          },
          {
            path: "graduate-school-of-law",
            element: GSL,
          },
          {
            path: "college-of-medicine",
            element: CM,
          },
          {
            path: "school-of-government",
            element: SG,
          },
          {
            path: "school-of-public-health",
            element: SPH,
          },
        ],
      },
      {
        path: "academic-calendar",
        element: Calendar,
      },
      {
        path: "crs",
        element: CRS,
      },
    ],
  },
  {
    path: "admissions",
    element: AdmissionShell,
    children: [
      {
        path: "admission-overview",
        element: AdmissionOverview,
      },
      {
        path: "plm-admission-test",
        element: PLMAT,
      },
      {
        path: "medical-college-admission-test",
        element: MCAT,
      },
      {
        path: "college-of-law-admission-test",
        element: CLAT,
      },
      {
        path: "undergraduate-programs",
        element: Programs,
      },
      {
        path: "scholarship-and-financial-aid",
        element: Scholarship,
      },
    ],
  },
  {
    path: "news",
    element: NewsShell,
    children: [
      {
        path: "press-release",
        element: PressRelease,
      },
      {
        path: "gallery",
        element: Gallery,
      },
      {
        path: "special-reports",
        element: Reports,
      },
      {
        path: "news-letter",
        element: NewsLetter,
      },
      {
        path: "announcements",
        element: Announcements,
      },
      {
        path: "message-from-the-university-president",
        element: Message,
      },
    ],
  },
  {
    path: "research",
    element: ResearchShell,
    children: [
      {
        path: "theses-and-dissertations",
        element: Theses,
      },
    ],
  },
  {
    path: "downloads",
    element: DownloadShell,
  },
  {
    path: "/students",
    element: StudentShell,
    children: [
      {
        path: "students-overview",
        element: Students,
      },
      {
        path: "student-manual",
        element: StudentManual,
      },
      {
        path: "tuition-and-other-fees",
        element: Tuition,
      },
      {
        path: "student-services",
        element: Services,
      },
      {
        path: "national-service-training-program",
        element: NSTP,
      },
      {
        path: "student-council",
        element: SSC,
      },
      {
        path: "student-organization",
        element: Org,
      },
      {
        path: "students-faculity-evaluation-system",
        element: Evaluation,
      },
      {
        path: "crs",
        element: StudentCRS,
      },
    ],
  },
  // {
  //   path: "/faculty",
  //   element: FacultyShell,
  //   children: [
  //     {
  //       path: "faculty-overview",
  //       element: Faculty,
  //     },
  //     {
  //       path: "faculty-policies",
  //       element: Policies,
  //     },
  //     {
  //       path: "faculty-manual",
  //       element: FacultyManual,
  //     },
  //     {
  //       path: "list-of-faculties",
  //       element: List,
  //     },
  //   ],
  // },
  // {
  //   path: "alumni",
  //   element: Alumni,
  // },
  {
    path: "/",
    element: PartnersShell,
    children: [
      {
        path: "partners",
        element: Partners,
      },
    ],
  },
  {
    path: "/community",
    element: CommunityShell,
    children: [
      {
        path: "campus",
        element: Campus,
      },
      {
        path: "events",
        element: Events,
      },
      {
        path: "sports",
        element: Sports,
      },
      {
        path: "immigration-and-visa",
        element: VISA,
      },
    ],
  },
  {
    path: "/",
    element: CharterShell,
    children: [
      {
        path: "citizens-charter",
        element: CitizensCharter,
      },
    ],
  },
  {
    path: "/",
    element: ARTACShell,
    children: [
      {
        path: "anti-red-tape-act-compliance",
        element: ARTAC,
      },
    ],
  },
  {
    path: "/careers",
    element: CareersShell,
    children: [
      {
        path: "careers-in-plm",
        element: CareersPLM,
      },
      {
        path: "careers-for-alumni",
        element: CareersAlumni,
      },
    ],
  },
  {
    path: "/procurement",
    element: ProcurementShell,
    children: [
      {
        path: "annual-procurement-plan",
        element: Annual,
      },
      {
        path: "competitive-bidding",
        element: Competitive,
      },
      {
        path: "alternative-method-of-procurement",
        element: Alternative,
      },
      {
        path: "notice-of-award-and-related-issuances",
        element: Notice,
      },
      {
        path: "bids-and-awards-committee-meetings",
        element: Bids,
      },
    ],
  },
  {
    path: "/",
    element: ContactShell,
    children: [
      {
        path: "contact-us",
        element: ContactUs,
      },
    ],
  },
  {
    path: "/",
    element: GuideShell,
    children: [
      {
        path: "site-guide",
        element: Guide,
      },
    ],
  },
  {
    path: "/",
    element: PrivacyShell,
    children: [
      {
        path: "privacy-policy",
        element: Privacy,
      },
    ],
  },
  {
    path: "/",
    element: TermsShell,
    children: [
      {
        path: "terms-of-use",
        element: Terms,
      },
    ],
  },
  {
    path: "*",
    element: Error,
  },
];
