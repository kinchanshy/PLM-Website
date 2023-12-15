import sample from "../assets/sample.jpg";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";
import sample4 from "../assets/sample4.jpg";
import ex from "../assets/ex.jpg";
import ex1 from "../assets/ex1.jpg";
import ex2 from "../assets/ex2.jpg";
import ex3 from "../assets/ex3.jpg";
import Logo from "../assets/plm.png";

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
  { label: "STUDENTS", path: "/students" },
  { label: "FACULTY", path: "/faculty" },
  { label: "ALUMNI", path: "/alumni" },
  { label: "PARTNERS", path: "/partners" },
  { label: "COMMUNITY", path: "/community" },
  { label: "PLM EMAIL LOGIN", path: "/plm-email-login" },
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
      { label: "Archive", link: "/archive" },
      { label: "Careers", link: "/careers" },
      { label: "Procurement", link: "/procurement" },
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
