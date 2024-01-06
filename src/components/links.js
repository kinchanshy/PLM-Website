import sample from "../assets/sample.jpg";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";
import sample4 from "../assets/sample4.jpg";
import ex from "../assets/ex.jpg";
import ex1 from "../assets/ex1.jpg";
import ex2 from "../assets/ex2.jpg";
import ex3 from "../assets/ex3.jpg";
import Logo from "../assets/logo/plm.png";

export const menuItems = [
  {
    text: "ABOUT",
    items: [
      { text: "University Profile", link: "/about/university-profile" },
      {
        text: "Outcome-Based Education (OBE)",
        link: "/about/outcome-based-education",
      },
      { text: "Administration", link: "/about/administration" },
      { text: "Pride Hall", link: "/about/pride-hall" },
      { text: "Contact", link: "/about/contact" },
    ],
  },
  {
    text: "ACADEMICS",
    items: [
      { text: "Academic Overview", link: "/academics/academic-overview" },
      { text: "Colleges", link: "/academics/colleges" },
      { text: "Academic Calendar", link: "/academics/academic-calendar" },
      {
        text: "Computerized Registration System (CRS)",
        link: "/academics/crs",
      },
    ],
  },
  {
    text: "ADMISSIONS",
    items: [
      {
        text: "Admission Overview",
        link: "/admissions/admission-overview",
      },
      {
        text: "PLM Admission Test (PLMAT)",
        link: "/admissions/plm-admission-test",
      },
      {
        text: "Medical College Admission Test (MCAT)",
        link: "/admissions/medical-college-admission-test",
      },
      {
        text: "College of Law Admission Test (CLAT)",
        link: "/admissions/college-of-law-admission-test",
      },
      {
        text: "Undergraduate Programs",
        link: "/admissions/undergraduate-programs",
      },
      {
        text: "Scholarship and Financial Aid",
        link: "/admissions/scholarship-and-financial-aid",
      },
    ],
  },
  {
    text: "RESEARCH",
    items: [
      {
        text: "Research at PLM",
        link: "/research/research-at-plm",
      },
      {
        text: "Theses and Dissertation",
        link: "/research/theses-and-dissertations",
      },
    ],
  },
  {
    text: "NEWS",
    items: [
      {
        text: "Press Release",
        link: "/news/press-release",
      },
      {
        text: "Gallery",
        link: "/news/gallery",
      },
      {
        text: "Special Reports",
        link: "/news/special-reports",
      },
      {
        text: "News Letter",
        link: "/news/news-letter",
      },
      {
        text: "Announcements",
        link: "/news/announcements",
      },
      {
        text: "Message from the University President",
        link: "/news/message-from-the-university-president",
      },
    ],
  },
  {
    text: "DOWNLOADS",
    link: "/downloads",
  },
];

export const suggestions = [
  "Academic Overview",
  "Colleges",
  "Courses",
  // Add more suggestions as needed
];

export const Items = [
  { label: "STUDENTS", path: "/students/students-overview" },
  // { label: "FACULTY", path: "/faculty/faculty-overview" },
  // { label: "ALUMNI", path: "/alumni" },
  { label: "PARTNERS", path: "/partners" },
  { label: "COMMUNITY", path: "/community/campus" },
  {
    label: "PLM EMAIL LOGIN",
    path: "/plm-email-login",
    onClick: () => {
      window.open(
        "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=d62cb49f-8a26-f288-697e-808e9a1151ce&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=plm.edu.ph&nonce=638382509292497052.bd98a665-e49d-4a89-aed7-50e26d69bc23&state=DctLDoAgDADRogfwJHxSoLTHAdvEhUY3xuvL4s1uHACs0zK5NAONMmfGmgQFi7RUMQwV7kTVWxH1pbP4btp8TYakJGPH7Oa7xfvr8TmvYPqG5_gB"
      );
    },
  },
];

export const data = [
  {
    title: "Quick Links",
    links: [
      { label: "Contact Us", link: "/contact-us" },
      {
        label: "Scholarships",
        link: "/admissions/scholarship-and-financial-aid",
      },
      { label: "Academic Calendar", link: "/academics/academic-calendar" },
      {
        label: "University Map",
        link: "/about/university-profile/university-map",
      },
    ],
  },
  {
    title: "‎",
    links: [
      {
        label: "Archive",
        link: "/archive",
        onClick: () => {
          window.open("https://archive.plm.edu.ph/", "_blank");
        },
      },
      { label: "Careers", link: "/careers/careers-in-plm" },
      { label: "Procurement", link: "/procurement/annual-procurement-plan" },
    ],
  },
  {
    title: "News",
    links: [
      { label: "Press Releases", link: "/news/press-release" },
      { label: "Special Reports", link: "/news/special-reports" },
      { label: "Announcements", link: "/news/announcements" },
      { label: "Gallery", link: "/news/gallery" },
    ],
  },
];

export const footerLinks = [
  { label: "Site Guide", link: "/site-guide" },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Terms of Use", link: "terms-of-use" },
  { label: "Citizen's Charter", link: "citizens-charter" },
];

export const updateSlides = [
  { url: sample },
  { url: sample1 },
  { url: sample2 },
  { url: sample3 },
  { url: sample4 },
];

export const servicesSlides = [
  { url: ex },
  { url: ex1 },
  { url: ex2 },
  { url: ex3 },
  { url: Logo },
];
