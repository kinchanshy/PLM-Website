import caup from "../../assets/Colleges/CAUP.png";
import plmbs from "../../assets/Colleges/PLMBS.png";
import ced from "../../assets/Colleges/CED.png";
import coe from "../../assets/Colleges/COE.png";
import chass from "../../assets/Colleges/CHASS.png";
import cn from "../../assets/Colleges/CN.png";
import cpt from "../../assets/Colleges/CPT.png";
import cs from "../../assets/Colleges/CS.png";
import cl from "../../assets/Colleges/CL.png";
import gsl from "../../assets/Colleges/GSL.png";
import cm from "../../assets/Colleges/CM.png";
import sg from "../../assets/Colleges/SG.png";
import ph from "../../assets/Colleges/PH.png";
import plm from "../../assets/Logo/banner.png";

export const links = [
  {
    label: "Academic Overview",
    link: "/academics/academic-overview",
    order: 1,
  },
  {
    label: "Colleges",
    link: "/academics/colleges",
    order: 1,
    subLinks: [
      {
        label: "Architecture and Urban Planning",
        link: "/academics/colleges/college-of-architecture-and-urban-planning",
      },
      {
        label: "PLM Business School",
        link: "/academics/colleges/plm-business-school",
      },
      { label: "Education", link: "/academics/colleges/college-of-education" },
      {
        label: "Engineering",
        link: "/academics/colleges/college-of-engineering",
      },
      {
        label: "Humanities, Arts and Social Sciences",
        link: "/academics/colleges/college-of-humanities-arts-and-social-sciences",
      },
      {
        label: "College of Nursing",
        link: "/academics/colleges/college-of-nursing",
      },
      {
        label: "Physical Therapy",
        link: "/academics/colleges/college-of-physical-therapy",
      },
      {
        label: "College of Science",
        link: "/academics/colleges/college-of-science",
      },
      { label: "College of Law", link: "/academics/colleges/college-of-law" },
      {
        label: "Graduate School of Law",
        link: "/academics/colleges/graduate-school-of-law",
      },
      {
        label: "College of Medicine",
        link: "/academics/colleges/college-of-medicine",
      },
      {
        label: "School of Government",
        link: "/academics/colleges/school-of-government",
      },
      {
        label: "School of Public Health",
        link: "/academics/colleges/school-of-public-health",
      },
    ],
  },
  {
    label: "Academic Calendar",
    link: "/academics/academic-calendar",
    order: 1,
  },
  {
    label: "Computer Registration System",
    link: "/academics/crs",
    order: 1,
  },
];

// Academic Overview
export const texts = [
  {
    content:
      "The different colleges of the University offer academic programs based on the curricula proposed by the faculty in consultation with the business or industry engaged in the particular field or study. Usually, the programs require the teaching of the courses of study by leaders in the business or industry and the conduct of field trips in the fields of operation. The participative involvement of practitioners in the formation of the courses of study in the different colleges is reflected in the skills-oriented, community-directed and value driven curricular programs of the University.",
  },
  {
    content:
      "The different colleges of the University offer academic programs based on the curricula proposed by the faculty in consultation with the business or industry engaged in the particular field or study. Usually, the programs require the teaching of the courses of study by leaders in the business or industry and the conduct of field trips in the fields of operation. The participative involvement of practitioners in the formation of the courses of study in the different colleges is reflected in the skills-oriented, community-directed and value-driven curricular programs of the University.",
  },
  {
    content:
      "Until SY 2008-2009, PLM offers a general education program during the first year of college work. All freshmen enrol in common track of preparatory courses leading to the choice of an academic degree program by the student after the evaluation of his/her academic standing for one year. The student's academic performance serves as the basis for his/her acceptance to the specific college where the degree is offered.",
  },
  {
    content:
      "The effectiveness of the degree programs of the University and their responsiveness to the needs of the industry can be gauged through the technical competence and intellectual probity of its graduates. The lasting legacy of these courses to the transformation and the development of the city of Manila, of our country and ultimately of our planet into a better place to live in is measured by how well the graduates could properly carve a recognizable niche in the corporate world, socio-civic and community programs, or public affairs in the exact deportment expected of a PLM-nurtured graduate -- that is, fermented through the ethos of discipline and the moral foundations of ethics.",
  },
  {
    content:
      "While all institutions of higher learning would lay claim of having imbibed their graduates with the needed competencies on their respective fields of learning, the PLM likewise enjoys a modest claim on an evident extended value of imbued human philosophy of discipline -- an exemplary and ideal manifestation of its unwavering commitment to its vision 'as a caring people's university.'",
  },
  {
    content:
      'The value-driven nature of the curricular programs is deeply anchored as well in the Life Purpose of the University, which is to "educate and serve the less-privileged but deserving students of Manila." As it is, there can be no truer words that can be crafted than the aphorism: "The heart of good education is the education of the heart." The university could not stand on its feet any second longer when its Life Purpose is sniffed off its worthy pedestal.',
  },
  {
    content:
      "Guided by this Life Purpose, and inspired by the Vision, the PLM community primarily commits itself 'to provide quality education to the less privileged but deserving students and develop competent, productive, morally upright professionals, effective transformational leaders and socially responsible citizens.'",
  },
  {
    content:
      "Pamantasan does not only give premium and importance to the development of the talents and skills of the citizens where it is located. It values with equal importance the intellectual maturity of every human person. Intellectual maturity rests on the premise that values and ethics are the very foundations of humanity, of being human, that set him apart from other creations, as prerequisites for the development of a total person.",
  },
  {
    content:
      "Such is the philosophy of Pamantasan education, an education of the heart and of the spirit on top of the education of the mind. Such is the legacy of the Pamantasan culture nurtured through the uprightness of human philosophies. Such is the salient reason for the existence of Pamantasan, without which, it has no leg to stand on and would be reduced into oblivion. These are the very reasons for the continuing success of Pamantasan, the wisdom behind the unprecedented success of a 'true class of Filipino education.'",
  },
];

// picture holder
export const linksData = [
  {
    id: 1,
    imageSrc: caup,
    altText: "PLM",
    path: "./college-of-architecture-and-urban-planning",
    title: "COLLEGE OF ARCHITECTURE AND URBAN PLANNING",
  },
  {
    id: 2,
    imageSrc: plmbs,
    altText: "PLMBS",
    path: "./plm-business-school",
    title: "PLM BUSINESS SCHOOL",
  },
  {
    id: 3,
    imageSrc: ced,
    altText: "CED",
    path: "./college-of-education",
    title: "COLLEGE OF EDUCATION",
  },
  {
    id: 4,
    imageSrc: coe,
    altText: "COE",
    path: "./college-of-engineering",
    title: "COLLEGE OF ENGINEERING",
  },
  {
    id: 5,
    imageSrc: chass,
    altText: "CHASS",
    path: "./college-of-humanities-arts-and-social-sciences",
    title: "COLLEGE OF HUMANITIES, ARTS & SOCIAL SCIENCES",
  },
  {
    id: 6,
    imageSrc: cn,
    altText: "CN",
    path: "./college-of-nursing",
    title: "COLLEGE OF NURSING",
  },
  {
    id: 7,
    imageSrc: cpt,
    altText: "CPT",
    path: "./college-of-physical-therapy",
    title: "COLLEGE OF PHYSICAL THERAPY",
  },
  {
    id: 8,
    imageSrc: cs,
    altText: "CS",
    path: "./college-of-science",
    title: "COLLEGE OF SCIENCE",
  },
  {
    id: 9,
    imageSrc: cl,
    altText: "CL",
    path: "./college-of-law",
    title: "COLLEGE OF LAW",
  },
  {
    id: 10,
    imageSrc: gsl,
    altText: "GSL",
    path: "./graduate-school-of-law",
    title: "GRADUATE SCHOOL OF LAW",
  },
  {
    id: 11,
    imageSrc: cm,
    altText: "CM",
    path: "./college-of-medicine",
    title: "COLLEGE OF MEDICINE",
  },
  {
    id: 12,
    imageSrc: sg,
    altText: "SG",
    path: "./school-of-government",
    title: "SCHOOL OF GOVERNMENT",
  },
  {
    id: 13,
    imageSrc: ph,
    altText: "PH",
    path: "./school-of-public-health",
    title: "SCHOOL OF PUBLIC HEALTH",
  },
];

// crs picture holder
export const crs = [
  {
    id: 1,
    imageSrc: plm,
    altText: "CRS",
    centerText: "CRS",
    link: "https://web1.plm.edu.ph/crs/",
    title: "Undergraduate and College of Law Students",
  },
  {
    id: 2,
    imageSrc: plm,
    altText: "CRSCM",
    centerText: "CRSCM",
    link: "https://web3.plm.edu.ph/crscm/",
    title: "College of Medicine Students",
  },
  {
    id: 3,
    imageSrc: plm,
    altText: "GSP",
    centerText: "GSP",
    link: "https://web2.plm.edu.ph/gsp/",
    title: "Graduate Students",
  },
  {
    id: 4,
    imageSrc: plm,
    altText: "SFE",
    centerText: "SFE",
    link: "https://web2.plm.edu.ph/sfe/",
    title: "Student's Faculty Evaluation System",
  },
  {
    id: 5,
    imageSrc: plm,
    altText: "S201MS",
    centerText: "S201MS",
    link: "https://web5.plm.edu.ph/201Jacket",
    title: "Student 201 Management System",
  },
  {
    id: 6,
    imageSrc: plm,
    altText: "ARS",
    centerText: "ARS",
    link: "https://web2.plm.edu.ph/ars/login",
    title: "Alumni Registry",
  },
];

// college intro
export const collegeIntro = [
  {
    title: "Quality Education meets Compassion",
    description:
      "Whether you choose to do in the corporate work, non-government or government work or anything in between, you're guaranteed to possess both the technical skills and compassion that truly sets PLM graduates apart from the rest.",
  },
];

// crs intro
export const crsIntro = [
  {
    description:
      "Pamantasan ng Lungsod ng Maynila students may register online and access their student records using the links below:",
  },
];
