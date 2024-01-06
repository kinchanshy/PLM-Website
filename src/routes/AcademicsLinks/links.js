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
import pic from "../../assets/Logo/pic.png";

// Academic Overview contents
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

// Sidebar
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

// Introductions from line 135 to line 291
// colleges introduction
export const collegeIntro = [
  {
    title: "Quality Education meets Compassion",
    description:
      "Whether you choose to do in the corporate work, non-government or government work or anything in between, you're guaranteed to possess both the technical skills and compassion that truly sets PLM graduates apart from the rest.",
  },
];

// caup introduction
export const caupIntro = [
  {
    src: pic,
    content:
      "The College of Architecture and Urban Planning at PLM offers various degree programs, emphasizing design, theory, and practical skills to prepare students for careers in these fields. The college prioritizes creativity, sustainability, and innovative urban development.",
  },
];

// plmbs introduction
export const plmbsIntro = [
  {
    src: pic,
    content:
      "The PLM Business School offers undergraduate and post-graduate programs that aim to make students able professionals and managers both in the private and public sector.",
  },
];

// ced introduction
export const cedIntro = [
  {
    src: pic,
    content:
      "The College of Education was formed out of reorganization and merging of colleges that were approved by the Board of Regents on June 4, 2015. It aspires to be one of the country's centers of excellence in Teacher Education. It is committed to produce globally empowered quality graduates who are proactive and catalysts of social transformation.",
  },
];

// coe intro
export const coeIntro = [
  {
    src: pic,
    content:
      "College Engineering offers a comprehensive education in engineering disciplines. PLM's engineering programs typically emphasize theory, practical skills, and a strong commitment to addressing the unique challenges of the local community.",
  },
];

// chass intro
export const chassIntro = [
  {
    src: pic,
    content:
      "The College of Humanities, Arts, and Social Sciences (CHASS) emerged through the reorganization/merging of the College of Liberal Arts (CLA) and the College of Mass Communication (CMC), as recommended by the PLM University Council and approved by the Board of Regents on the latter's special meeting on June 4, 2015.",
    other:
      "By virtue of the reorganization, the Bachelor of Science in Social Work from the College of Human Development (CHD) and the Master of Arts in Communication Management from the Graduate School of Arts, Science, and Education (GSASE) also became part of CHASS. The merging was also based on the vertical articulation prescribed by the Commission on Higher Education’s Education Reform Agenda.",
  },
];

// cn introduction
export const cnIntro = [
  {
    src: pic,
    content:
      "The College of Nursing program provides an intensive nursing practicum that will refine further the nursing competencies to ensure achievement of the Nursing program outcomes required of an entry level. The College of Nursing program aims to develop a professional nurse who is able to assume entry level positions in health facilities or community settings.",
    other:
      "It also offers masters’ of nursing program which prepares individuals for careers in health care setting through advanced education in specific areas of expertise and to expand their career options. Program's course content and practicum component will provide them with the knowledge and skills necessary to successfully perform the varied managerial role functions which today's organization requires of health care practitioners and will empower them to serve as influential leaders in the design and operation of 21st century health care delivery systems.",
  },
];

// cpt introduction
export const cptIntro = [
  {
    src: pic,
    content:
      "The college is proud of the quality of its faculty members who possess extensive clinical experience and educational background in their specialization. They bring insights from theory, practice, and research to help shape the careers of all our students.",
  },
];

// cs introduction
export const csIntro = [
  {
    src: pic,
    content:
      "The College of Science is one of the esteemed colleges of the university which has produced board topnotchers, leaders in the national and international levels.",
    other:
      "It used to be part of the College of Arts and Science, until the Board of Regents approved its proposed separation in 2002. By 2015, it offered the programs BS Psychology, MA Psychology, and MS in Mathematics Education.",
  },
];

// cl introduction
export const clIntro = [
  {
    src: pic,
    content:
      "The College of Law is among the the top 10 law schools based on the 2018 bar examination. It received a 51.61% passing rate in 2018 bar exams, which is higher than the 22.07% national passing rate.",
  },
];

// gsl introduction
export const gslIntro = [
  {
    src: pic,
    content:
      "On July 7, 2004, the Graduate School of Law was formally launched as the second graduate school of school of law in the Philippines. On July 29, 2004, the Board of Regents by virtue of BOR Resolution No. 2686 approved the offering of the graduate program of Master of Laws.",
    other: [
      "The PLM's Graduate School of Law provides legal education to lawyers and non-lawyers who have obtained their first law degree in any college or university in the country offering either a Bachelor of Laws or Juris Doctor program. It aims to attract in its fold both lawyers and non-lawyers, including judges, prosecutors, practitioners, and those employed in the government and private service.",

      "The institute is on a three-term academic calendar. Applying to the program involves the completion of an application form and the submission of the required documents. Enrollment in the program provides many opportunities for students to work closely with distinguished professors who are experts in domestic and international fields.",

      "The Graduate School of Law aims to (1) develop intellectual expertise in law and jurisprudence among lawyers; (2) assist in improving public service by stressing the lawyers' mission of upholding justice and truth; (3) elevating the standards of the legal profession; and (4) enhancing the administration of justice for the welfare of the Filipino people, especially the marginalized.",
    ],
  },
];

// cm introduction
export const cmIntro = [
  {
    src: pic,
    content:
      "The College of Medicine accepts applicants for incoming first year medical students who will enter in the first semester of the following school year. Lateral entrees from other medical schools are not entertained. Previous applicants may not apply. The MCAT applications are opened in November of ",
    other:
      "each year, but applicants may already present their documents to the College staff for evaluation as early as August, so that the applicants are afforded ample time to produce necessary documents that are currently not in their possession.",
  },
];

// sg introduction
export const sgIntro = [
  {
    src: pic,
    content:
      "The School of Government offers undergraduate and post-graduate programs that aim to make students able professionals and managers in the public sector.",
  },
];

// sph introduction
export const sphIntro = [
  {
    src: pic,
    content:
      "The Pamantasan ng Lungsod ng Maynila School of Public Health is envisioned as a recognized leader in public health education both locally and internationally. It strives to nurture ethical, professional, forward-looking leaders in health care who will confidently blend knowledge and practice to bring real-world solutions to ensure health for all.",
  },
];

// academic calendar intro
export const calendarIntro = [
  {
    description:
      "View or download our academic calendar for Academic Year 2023-2024.",
  },
];

// crs introduction
export const crsIntro = [
  {
    description:
      "Pamantasan ng Lungsod ng Maynila students may register online and access their student records using the links below:",
  },
];

// colleges logo
export const linksData = [
  {
    id: 1,
    imageSrc: caup,
    altText: "CAUP",
    path: "college-of-architecture-and-urban-planning",
    title: "COLLEGE OF ARCHITECTURE AND URBAN PLANNING",
  },
  {
    id: 2,
    imageSrc: plmbs,
    altText: "PLMBS",
    path: "plm-business-school",
    title: "PLM BUSINESS SCHOOL",
  },
  {
    id: 3,
    imageSrc: ced,
    altText: "CED",
    path: "college-of-education",
    title: "COLLEGE OF EDUCATION",
  },
  {
    id: 4,
    imageSrc: coe,
    altText: "COE",
    path: "college-of-engineering",
    title: "COLLEGE OF ENGINEERING",
  },
  {
    id: 5,
    imageSrc: chass,
    altText: "CHASS",
    path: "college-of-humanities-arts-and-social-sciences",
    title: "COLLEGE OF HUMANITIES, ARTS, AND SOCIAL SCIENCES",
  },
  {
    id: 6,
    imageSrc: cn,
    altText: "CN",
    path: "college-of-nursing",
    title: "COLLEGE OF NURSING",
  },
  {
    id: 7,
    imageSrc: cpt,
    altText: "CPT",
    path: "college-of-physical-therapy",
    title: "COLLEGE OF PHYSICAL THERAPY",
  },
  {
    id: 8,
    imageSrc: cs,
    altText: "CS",
    path: "college-of-science",
    title: "COLLEGE OF SCIENCE",
  },
  {
    id: 9,
    imageSrc: cl,
    altText: "CL",
    path: "college-of-law",
    title: "COLLEGE OF LAW",
  },
  {
    id: 10,
    imageSrc: gsl,
    altText: "GSL",
    path: "graduate-school-of-law",
    title: "GRADUATE SCHOOL OF LAW",
  },
  {
    id: 11,
    imageSrc: cm,
    altText: "CM",
    path: "college-of-medicine",
    title: "COLLEGE OF MEDICINE",
  },
  {
    id: 12,
    imageSrc: sg,
    altText: "SG",
    path: "school-of-government",
    title: "SCHOOL OF GOVERNMENT",
  },
  {
    id: 13,
    imageSrc: ph,
    altText: "SPH",
    path: "school-of-public-health",
    title: "SCHOOL OF PUBLIC HEALTH",
  },
];

// crs links
export const crs = [
  {
    id: 1,
    imageSrc: plm,
    altText: "CRS",
    centerText: "CRS",
    link: "https://plm.edu.ph/crs",
    title: "Undergraduate and College of Law Students",
  },
  {
    id: 2,
    imageSrc: plm,
    altText: "CRSCM",
    centerText: "CRSCM",
    link: "https://web3.plm.edu.ph/crscm",
    title: "College of Medicine Students",
  },
  {
    id: 3,
    imageSrc: plm,
    altText: "GSP",
    centerText: "GSP",
    link: "https://plm.edu.ph/gsp",
    title: "Graduate Students",
  },
  {
    id: 4,
    imageSrc: plm,
    altText: "SFE",
    centerText: "SFE",
    link: "https://web2.plm.edu.ph/sfe",
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

// Tables
// pt table
export const ptCols = [
  { key: "date", header: "DATE/YEAR" },
  { key: "rate", header: "NATIONAL PASSING RATE" },
  { key: "plm", header: "PLM'S PASSING RATE" },
  { key: "rank", header: "SCHOOL RANKING" },
  {
    key: "board",
    header: "BOARD TOPNOTCHERS",
    useBullets: true,
    textAlign: "left",
  },
];

// for table contents
export const ptData = [
  {
    date: "August 2019",
    rate: "64.57%",
    plm: "100%",
    rank: "Top 1 performing school",
    board: [
      "4th Place: Rose Angeli M. Bartolome",
      "5th Place: Adrianne Tan-Gatue",
      "7th Place: Louraine Dynne Z. Dela Cruz",
    ],
  },
  {
    date: "August 2018",
    rate: "67.51%",
    plm: "96.15%",
    rank: "Top 1 performing school",
    board: [
      "2nd Place: Rose Ann B. Solde",
      "3rd Place: Exequiel Amiel V. Ramirez",
      "4th Place: Shaina Marie P. Marbella",
      "6th Place: Immah Marie R. Pineda",
    ],
  },
  {
    date: "August 2017",
    rate: "62.80%",
    plm: "88.61%",
    rank: "Top 2 perfoming school",
    board: [
      "2nd Place: Venice Camille B. Patricio",
      "4th Place: Renier king C. Llantada",
      "6th Place: Riana Aime P. Conde",
      "7th Place: Lissie Marie R. De Luna",
      "8th Place: Jiechelle Renz M. Salvador",
      "9th Place: Ma. Jocelda F. Abella",
    ],
  },
  {
    date: "August 2016",
    rate: "68.06%",
    plm: "100%",
    rank: "Top 1 performing school",
    board: [
      "6th Place: Elysha Jane D. Rosales",
      "8th Place: Krystle V. Hermogenes",
    ],
  },
  {
    date: "August 2015",
    rate: "62.94%",
    plm: "94.23%",
    rank: "Top 1 performing school",
    board: [
      "3rd Place: Kristine Joy R. De Castro",
      "4th Place: Arianne Kim L. Cleto",
    ],
  },
];

// CS Table Columns Headers
export const csCols = [
  { key: "alumni", header: "ALUMNI" },
  {
    key: "achievements",
    header: "ACHIEVEMENTS",
    useBullets: true,
    textAlign: "left",
  },
];

// CS Table contents
export const csData = [
  {
    alumni: "Alex A. Tardaguila, RCh (BS Chem, 1998; CS faculty 2001 -2016)",
    achievements: [
      "Recipient of University of Liverpool's In Memoriam tribute called Alex Tardaguila Memorial Lectureship Award to honor his contributions to Science",
    ],
  },
  {
    alumni: "Ana Nualla, RCh (BS Chem, 2012)",
    achievements: [
      "Champion, World Dance Sport Federation Southeast Asia Open Standard 2019; 30th Southeast Asian Games Dance Athlete – Standard Discipline Event",
    ],
  },
  {
    alumni: "Acd. Rhodora V. Azanza (BS Botany, 1972)",
    achievements: [
      "National Academy of Science and Technology (NAST) President, 2019",
      "Vice Chairperson of UNESCO-Intergovernmental Oceanographic Commission (IOC) Panel on Harmful Algal Blooms (IPHAB) and Leader of IOC’s Harmful Algal Blooms in Southeast Asia (HABSEA) Portal and e-learning",
      "2015 Pantas Award for Most Outstanding Scientist by the Philippine Council for Agriculture, Aquatic and Natural Resources Research and Development (PCAARRD) of the Department of Science and Technology (DOST)",
      "2014 DOST Outstanding Research and Development Award for Applied Research/Julian A. Banzon Medal",
      "Known as The Red Tide Lady",
      "First female dean of the University of the Philippines (UP) Diliman, College of Science (2000-2006)",
    ],
  },
  {
    alumni:
      "John Rafael N. Granada, RCh (BS Chem, 2011; CS faculty) and Sandra Mei Branzuela, RCh (BS Chem, 2018)",
    achievements: [
      "CHAMPION – National and Regional",
      "DOST Research and Inventions Contests and Exhibits 2018 – Outstanding Student Creative Research (SIBOL) Category",
    ],
  },
  {
    alumni:
      "Matthew Brinez, Xaileen Dimaano, Jean Marke Flores (BS Biology, 2018)",
    achievements: [
      "2nd Runner-up, National Intercollegiate Genetics Quiz Contest 2017 (UPLB)",
    ],
  },
  {
    alumni:
      "Rea Alexis Dolores, (BS Psych, 2018), Julian Caspe, (BS Psych, 2018), and Ma. Katrina Quijano (BS Psych, 4th year)",
    achievements: [
      "2nd Place, 2018 National Inter-School Psychology Quiz Competition (ISPQC)",
    ],
  },
  {
    alumni: "Pierce Earl Andrei Hesarza (BS Psych, 2nd year)",
    achievements: [
      "2nd Runner-up, 2018 Pambansang Samahan ng Sikolohiyang Pilipino (SPP) – Spoken Word Poetry",
    ],
  },
];

// Accordions from line 576 to line 1049
// Caup Accordion
export const caupAccordion = [
  {
    value: "Undergraduate Program",
    title: "Undergraduate Program",
    hasBullets: true,
    content: [{ text: "Bachelor of Science in Architecture" }],
  },
  {
    value: "Governing Spirit",
    title: "Governing Spirit",
    hasBullets: true,
    content: [
      {
        text: "Creation of an immediate evaluation platform focusing on industry-driven variables",
      },
      {
        text: "Establishment of a research-oriented mentorship practices highly adaptable to young but inquisitive minds",
      },
      {
        text: "Adoption of a consultative planning policy discernable to industry-based professionals and dynamic academic partners",
      },
    ],
  },
  {
    value: "Graduate",
    title: "Graduate Do Matter",
    hasBullets: false,
    content: [
      {
        text: "Although quite a small college, its graduates really do matter. Architecture, many would like to believe, is a career reserved only for the rich. PLM proved them wrong and until this day, the famous Intramuros refuge for Manila's poor has maintained a reputation of academic dominance and excellence in higher education. With almost 100% of its graduates passing the licensure examinations, the college plays a major role in transforming old Manila into a network of micro-communities, planning satellite activity centers in pocket parks and idle open spaces, as well as establishing a blue print of maximum tolerable dwelling patterns in congested barangays in the City.",
      },
      {
        text: "Other placers would soon follow the likes of Architects Ricardo A. Reyes and Patrick N. Rodriguez. In the June 2005 Board Exam for Architecture, PLM was ranked 4th out of 60 architecture schools nationwide with Marc Rhojel C. Cortez placing 5th in the top ten column of successful examinees. January 2007 produced another board topnotcher in Rafael Banaag III (9th place) with 81% passing rate against a national rate of 36%.",
      },

      {
        text: "As of October 2008, a total of 405 student spread into seventeen (17) batches, or an average of 23.8 students per year, graduated from the program. The first group of 10 graduates completed the program in 1992. Two years after (PRC requires that a graduate prior to taking a board exam has to undergo a 2-year diversified industry exposure), PLM produced its first Architect led by Architect Antonio G. Sevilla Jr. who maintains a very successful Architect's Consultancy and Construction Services Office.",
      },
      {
        text: "Based on the records of the Professional Regulations Commision (PRC), PLM has sustained a record of consistently good performance in as far as the percentage of candidates passing the board exam. Back in 1998, Mr. Marlou B. Campaner, a 1996 graduate whose mother works as a casual employee at the Manila City Hall and whose father labors the road of the city with his tricycle topped that year's June Examination. Placing 1st among the more than 1000 examinees was a solid proof that PLM can easily dominate any arena given an equal chance. Architect Campaner is now among the leading lights in the City Planning and Development Office of the City of Manila.",
      },
    ],
  },
];

// plmbs accordion
export const plmbsAccordion = [
  {
    value: "Undergraduate Program",
    title: "Undergraduate Program",
    hasBullets: false,
    content: [
      {
        title: "Bachelor of Science in Accountancy (BSA)",
        text: [
          "Bachelor of Science in Accountancy program provides students with a general accounting education that will prepare them in pursuing a career in Accountancy. This program complies with the issuance of the International Federation of Accountants (IFAC) for the Internationa Education Standards that complies with the competencies framework of professional accountants.",
          "Graduates of this program are qualified to undergo assessments leading to certifications in Accountancy given by the Professional Regulation Commission - Board of Accountancy (PRC -BOA)and other global professional Accountancy organizations.",
          "Graduates are highly encouraged to continuously pursue professional development and lifelong learning in an objective and ethical manner to serve the public interest.",
        ],
      },
      {
        title:
          "Bachelor of Science in Business Administration major in Financial Management (BSBA-FM)",
        text: [
          "The program aims to develop globally competitive, socially responsible and ethical finance executives. Graduates become fully equipped with skills and knowledge in different areas of finance such funds and cash management, investors and banking relations, loans and credit, banking, investments, capital market, financial analysis, strategic financial planning, risk management, and other relevant functions in finance in various industries.",
        ],
      },
      {
        title:
          "Bachelor of Science in Business Administration major in Marketing Management (BSBA-MM)",
        text: [
          "The program prepares graduates for careers in marketing, market research, advertising and public relations. The curriculum provides the graduates with both technical skills and competencies required in the field but also the flexible mindset that is necessary to stay competitive in a constantly changing business environment. It covers the areas of sales management, brand, distribution, e-commerce, franchising, retailing, advertising and sales promotion, and integrated marketing communications.",
        ],
      },
      {
        title:
          "Bachelor of Science in Business Administration major in Operations Management (BSBA-OM)",
        text: [
          "The Bachelor of Science in Business Administration major in Operations Management (BSBA-OM) program prepares students to manage the operations of manufacturing, agri-business, and service enterprises. The program curriculum covers all aspects of operations within the organization, including the management of purchases, inventory, production and service quality, logistics, supply chain, and distribution.",
        ],
      },
    ],
  },
  {
    value: "Graduate Program",
    title: "Graduate Program",
    hasBullets: false,
    content: "",
  },
];

// ced accordion
export const cedAccordion = [
  {
    value: "Undergraduate Program",
    title: "Undergraduate Program",
    hasBullets: true,
    content: [
      {
        text: "Bachelor of Elementary Education (Generalist) (BEEd)",
      },
      {
        text: "Bachelor of Early Childhood Education (BECEd)",
      },
      {
        text: "Bachelor of Special Needs Education (Generalist) (BSNEd)",
      },
      {
        text: "Bachelor of Secondary Education major in English (BSEd-Eng)",
      },
      {
        text: "Bachelor of Secondary Education major in Filipino (BSEd-Fil)",
      },
      {
        text: "Bachelor of Secondary Education major Mathematics (BSEd-Math)",
      },
      {
        text: "Bachelor of Secondary Education major in Sciences (BSEd-Sciences)",
      },
      {
        text: "Bachelor of Secondary Education major in Social Studies (BSEd-SS)",
      },
      {
        text: "Bachelor of Physical Education (BPE)",
      },
    ],
  },
  {
    value: "Post-Graduate Program",
    title: "Post-Graduate Program",
    hasBullets: false,
    content: "",
  },
];

// coe accordion
export const coeAccordion = [
  {
    value: "Undergraduate Program",
    title: "Undergraduate Program",
    hasBullets: true,
    content: [
      {
        text: "Bachelor of Science in Chemical Engineering",
      },
      {
        text: "Bachelor of Science in Civil Engineering",
      },
      {
        text: "Bachelor of Science in Computer Engineering",
      },
      {
        text: "Bachelor of Science in Computer Science",
      },
      {
        text: "Bachelor of Science in Electrical Engineering",
      },
      {
        text: "Bachelor of Science in Electronics Engineering",
      },
      {
        text: "Bachelor of Science in Information Technology",
      },
      {
        text: "Bachelor of Science in Manufacturing Engineering",
      },
      {
        text: "Bachelor of Science in Mechanical Engineering",
      },
    ],
  },
  {
    value: "Graduate Program",
    title: "Graduate Program",
    hasBullets: false,
    content: "",
  },
];

// chass accordion
export const chassAccordion = [
  {
    value: "Undergraduate Program",
    title: "Undergraduate Program",
    hasBullets: true,
    content: [
      {
        text: "Bachelor of Arts in Communication (BAC)",
      },
      {
        text: "Bachelor of Arts in Public Relations (BAPR)",
      },
      {
        text: "Bachelor of Science in Social Work (BSSW)",
      },
      {
        text: "Bachelor of Music in Music Performance (BMMP)",
      },
      {
        text: "Master of Arts in Communication Management (MACM)",
      },
    ],
  },
  {
    value: "Graduate Program",
    title: "Graduate Program",
    hasBullets: false,
    content: "",
  },
];

// cpt accordion
export const cptAccordion = [
  {
    value: "Undergraduate Program",
    title: "Undergraduate Program",
    hasBullets: true,
    content: [
      {
        text: "Bachelor of Science in Physical Therapy",
      },
    ],
  },
  {
    value: "Graduate Program",
    title: "Graduate Program",
    hasBullets: true,
    content: [{ text: "Master of Science in Physical Therapy" }],
  },
];

// cs accordion
export const csAccordion = [
  {
    value: "Undergraduate Program",
    title: "Undergraduate Program",
    hasBullets: true,
    content: [
      {
        text: "Bachelor of Science in Biology",
        content: [
          {
            text: "Major in Cell and Molecular Biology",
          },
          { text: "Major in Ecology" },
          { text: "Major in Medical Biology" },
        ],
        hasBullets: true,
      },
      {
        text: "Bachelor of Science in Chemistry",
      },
      {
        text: "Bachelor of Science in Mathematics",
      },
      {
        text: "Bachelor of Science in Psychology",
      },
    ],
  },
  {
    value: "Graduate Program",
    title: "Graduate Program",
    hasBullets: true,
    content: [
      {
        text: "Master of Arts in Psychology",
        content: [
          {
            text: "Major in Clinical Psychology",
          },
          { text: "Major in Industrial Psychology" },
        ],
        hasBullets: true,
      },
    ],
  },
];

// cl accordion
export const clAccordion = [
  {
    value: "Program",
    title: "Program",
    content: [{ text: "Juris Doctor" }],
    hasBullets: true,
  },
];

// gsl accordion
export const gslAccordion = [
  {
    value: "Program",
    title: "Program",
    content: [{ text: "Master of Laws" }],
    hasBullets: true,
  },
];

// cm accordion
export const cmAccordion = [
  {
    value: "Academic Preparations",
    title: "Academic Preparations",
    hasBullets: true,
    orderedList: true,
    content: [
      {
        text: "He/She must be a holder of Bachelor’s Degree conferred upon by a duly recognized education institution",
      },
      {
        text: "He/She must have earned credits in the following areas, and must have satisfied the required minimum numbers of units in the subject specifically enumerated herein:",
        hasBullets: true,
        content: [
          {
            text: "Sciences: 35 units",
          },
          { text: "Chemistry: 10 units" },
          { text: "Inorganic Chemistry: 5 units" },
          { text: "Organic Chemistry/Biochemistry: 5 units" },
          {
            text: "Natural Sciences: 15 units (5 units should at least be Comparative Vertebrate Anatomy or Human Anatomy and Physiology",
          },
          { text: "Physics: 5 units" },
          { text: "Microbiology or Elem. Genetics: 5 units" },
          { text: "Mathematics: 6 units" },
          { text: "Algebra: 3 units" },
          { text: "Elementary Statistics/Biostatistics: 3 units" },
          { text: "Language and Communication: 9 units" },
          { text: "Social Sciences: 9 units" },
          {
            text: "(Political Science, Psychology, Sociology, History, Anthropology)Humanities: 3 units",
          },
          { text: "(Art Appreciation, Logic, Philosophy)" },
        ],
      },
    ],
  },
  {
    value: "How to apply: (NEW! Ref.: College of Medicine)",
    title: "How to apply: (NEW! Ref.: College of Medicine)",
    hasBullets: true,
    orderedList: true,
    content: [
      {
        text: "Submit original and duplicate copies of the following for initial screening:",
        hasBullets: true,
        content: [
          { text: "Birth Certificate (NSO copy)" },
          { text: "Official Transcript of Record/Special Order No." },
        ],
      },
      {
        text: "Letters of certification of Good Moral Character",
        hasBullets: true,
        content: [
          {
            text: "Certificate of General Weighted Average from the Registrar/College",
          },
          { text: "Diploma/Certificate of Graduation" },
          { text: "NMAT Result" },
          {
            text: "Manila Voter's ID/Voter's Certification issued by the COMELEC (for applicants who are residents of Manila only)",
          },
          {
            text: "Student's residence certificate (cedula)",
          },
          { text: "Baranggay Clearance in the place of residence" },
          { text: "NBI Clearance" },
          { text: "Any other document to prove Manila residency" },
          {
            text: "Parent's latest Income Tax Return (ITR) and/or Affidavit of Support and ITR of benefactor",
          },
          { text: "Enrollment form for supplemental subjects required" },
          { text: "Self-addressed stamped envelope" },
          { text: "Long brown envelope and long file folder" },
        ],
      },
      {
        text: "If qualified to take MCAT, get certification from the college and pay MCAT fee at the Cashier's Office.",
      },
      {
        text: "Get application form and MCAT permit at the College of Medicine office.",
      },
      {
        text: "Take the MCAT exam as scheduled and present yourself for interview. Interview schedule will be given after the MCAT exam.",
        hasBullets: true,
        content: [
          {
            text: "Note: Application will not be processed unless documents are completed.",
          },
          {
            text: "The Dean reserves the right to invalidate the result of the MCAT if the applicant has not satisfactorily met the admission criteria and has not complied with all the above requirements, in which case the applicants shall be denied admission to the College of Medicine.",
          },
        ],
      },
    ],
  },
];

// sg accordion
export const sgAccordion = [
  {
    value: "Programs",
    title: "Programs",
    content: [
      { text: "Professionalization Program for Public Procurement" },
      {
        text: "Master in Government Management",
      },
      {
        text: "Doctor of Government Management",
      },
    ],
    hasBullets: true,
  },
];

// ph accordion
export const phAccordion = [
  {
    value: "Programs",
    title: "Programs",
    content: [
      { text: "Certificate in Public Health" },
      {
        text: "Master of Public Health",
      },
    ],
    hasBullets: true,
  },
  {
    value: "Special Program",
    title: "Special Program",
    content: [{ text: "Public Health Learning Series" }],
    hasBullets: true,
  },
  {
    value: "How to apply: (NEW! Ref. : College of Medicine)",
    title: "How to apply: (NEW! Ref. : College of Medicine)",
    hasBullets: true,
    orderedList: true,
    content: [
      {
        text: "Applicant should be a graduate of an accredited school of medicine or other health sciences like nursing, physical therapy, dentistry, veterinary medicine, etc. or at least a baccalaureate degree in science, or other courses upon the evaluation and approval of the Admissions Committee.",
      },
      {
        text: "At least one year experience in a public health institution or organization or any related field (which can be waived upon the recommendation of the Admissions Committee depending on its evaluation of the applicant’s credentials)",
      },
      {
        text: "Accomplished Application Form",
      },
      {
        text: "Transcript of Records (Certified True Copy)",
      },
      {
        text: "Certificate of Graduation from any recognized institution of higher learning (Certified True Copy)",
      },
      {
        text: "NSO/PSA Birth Certificate",
      },
      {
        text: "3 pc. 2”x2” ID photos with white background",
      },
      {
        hasBullets: true,
        text: "Payment of application fee",
        content: [{ text: "Download the application form." }],
      },
    ],
  },
];

// Vision and Missions from line 1056 to line 1149
// caup vision and mission
export const caupVM = [
  {
    title: "VISION",
    content:
      "It will become a partner of choice as an active provider of competent industry players in today's built-environment market.",
  },
  {
    title: "MISSION",
    isList: true,
    content: [
      "Transforming mindsets to highly competitive outlooks.",
      "Create values mutually beneficial to students and the institution by providing opportunities of borderless cooperation.",
      "Constant adherence to excellence in professionalism, creativity, teamwork and leadership.",
    ],
  },
];

// plmbs vision and mission
export const plmbsVM = [
  {
    title: "VISION",
    content:
      " To be a globally recognized hub of excellence in business education, fostering innovation, leadership, and ethical business practices.",
  },
  {
    title: "MISSION",
    content:
      " Our mission is to provide a transformative and holistic business education, empowering students to excel in the dynamic world of commerce, while promoting sustainable business practices and contributing to the betterment of society.",
  },
];

// ced vision and mission
export const cedVM = [
  {
    title: "VISION",
    content:
      "  To be a leading institution of education and pedagogical innovation, dedicated to shaping future educators, promoting educational equity, and advancing the field of education through research and community engagement.",
  },
  {
    title: "MISSION",
    isList: true,
    content: [
      "Gain recognition as an excellent pre-service teacher-training institution;",
      "Ensure a consistently higher than national average performance on the Licensure Examination for Teachers (LET);",
      "Provide students with effective and relevant instruction that will equip them with skills required of educational institution here and abroad;",
      "Contribute to research efforts that will help improve the overall quality of education in the country;",
      "Imbibe a culture of excellence, integrity and responsibility.",
    ],
  },
];

// coe vision and mission
export const coeVM = [
  {
    title: "VISION",
    content:
      "The College of Engineering will be the premier college in technological education, research and extension services.",
  },
  {
    title: "MISSION",
    isList: true,
    content: [
      "Uphold excellence through curriculum development andteaching, significant advances in knowledge, and services to the community of which we are a part;",
      "Nurture students with a technological education of the highest quality that will enable them to be professionally competent, community directed and God centered individuals; and",
      "Develop faculty members and staff to be excellent examples in leadership and management.",
    ],
  },
];

export const cnVM = [
  {
    title: "VISION",
    content:
      "A leader in nursing education in the ASEAN region producing globally competitive nurses with excellence, integrity and social responsibility.",
  },
  {
    title: "MISSION",
    content: [
      "To be recognized by Philippines and ASEAN Academic accrediting agencies as premier nursing school known for its quality education, research and extension service",
      "To produce nurse leaders in the fields of clinical practice, research, academe and entrepreneurship with a competitive advantage for employment opportunitiesCore Values",
    ],
  },
];

// cpt vision and mission
export const cptVM = [
  {
    title: "VISION",
    content:
      "To be a pioneering institution in physical therapy education, setting global standards for excellence, innovation, and compassionate care.",
  },
  {
    title: "MISSION",
    content:
      "To educate and empower future physical therapists, enhancing well-being and mobility while advancing the field through research and community service.",
  },
];

// Timelines from line 1151 to line 1260
// caup timeline
export const caupTimeline = [
  {
    title: "JUNE 2001",
    content:
      "In June of 2001, the College of Architecture and Urban Planning (CAUP) was established to help transform the City of Manila back into a vibrant, world-class tourist destination.",
  },
  {
    title: "ESTABLISHMENT OF COLLEGE",
    content:
      "Before the establishment of the college, Bachelor of Science in Architecture was offered under the College of Engineering and Architecture. The course was first offered by the university in 1987.",
  },
  {
    title: "ORIENTATION",
    content:
      "Training in the College of Architecture and Urban Planning is more like a job than studying. Given this orientation, the College has earned the trust and confidence of its peers and leaders. The architecture program continues to relish in its own place within the university. The College prides itself of reaping numerous honors and citations for PLM, both in local and national arena. These achievements are the result of a strong partnership built around team spirit unique in PLM.",
  },
  {
    title: "BOARD TOPNOTCHER",
    content:
      "The college has board topnotchers in its roster. They are Arch. Lili-Anne Reyes, topnotcher, August 2019 Special Professional Licensure Exam (SPLE); Arch. Marlou B. Campaner, topnotcher, June 1998 board exam; Arch. Aldous Y. Olbes, top 2, June 2017 board exam; Arch. Michael Raye M. Tadeo, top 4, January 2018 board exam; and Arch. Alnie Khayzer P. Hayudini, top 10, January 2016 board exam.",
  },
];

// plmbs timeline
export const plmbsTimeline = [
  {
    title: "JUNE 2001",
    content:
      "In June of 2001, the College of Architecture and Urban Planning (CAUP) was established to help transform the City of Manila back into a vibrant, world-class tourist destination.",
  },
  {
    title: "ESTABLISHMENT OF COLLEGE",
    content:
      "Before the establishment of the college, Bachelor of Science in Architecture was offered under the College of Engineering and Architecture. The course was first offered by the university in 1987.",
  },
  {
    title: "ORIENTATION",
    content:
      "Training in the College of Architecture and Urban Planning is more like a job than studying. Given this orientation, the College has earned the trust and confidence of its peers and leaders. The architecture program continues to relish in its own place within the university. The College prides itself of reaping numerous honors and citations for PLM, both in local and national arena. These achievements are the result of a strong partnership built around team spirit unique in PLM.",
  },
  {
    title: "BOARD TOPNOTCHER",
    content:
      "The college has board topnotchers in its roster. They are Arch. Lili-Anne Reyes, topnotcher, August 2019 Special Professional Licensure Exam (SPLE); Arch. Marlou B. Campaner, topnotcher, June 1998 board exam; Arch. Aldous Y. Olbes, top 2, June 2017 board exam; Arch. Michael Raye M. Tadeo, top 4, January 2018 board exam; and Arch. Alnie Khayzer P. Hayudini, top 10, January 2016 board exam.",
  },
];

// coe timeline
export const coeTimeline = [
  {
    title: "ESTABLISHMENT OF THE COLLEGE (JULY 1, 1969)",
    content:
      "With the conviction of providing quality education and offering technical manual skills in the field of technology, the College of Engineering of the Pamantasan ng Lungsod ng Maynila was established on July 1, 1969 - six years after the late Mayor Antonio F. Villegas founded the university.",
  },
  {
    title: "ORGANIZATIONAL STRUCTURE AND DIVISIONS",
    content:
      "Originally under the College of Arts and Letters, the main trust of the college was to provide technical, industrial, vocational education to PLM students alongside the humanistic courses to prepare them for promoting out technology under two divisions:",
    subcontent: [
      "Division of Engineering and Technology, encompassing departments like Civil, Mechanical, Electrical, Sanitary, Chemical, Naval, and Industrial Engineering.",
      "Division of Technical and Vocational Education, covering departments such as Electronics, Wood Working, Metal Works, Automotive Works, Ceramics, Graphics Arts, and Teacher Education in Arts and Trades.",
    ],
    hasBullets: true,
  },
  {
    title: "ACADEMIC PROGRAM EVOLUTION",
    content:
      "Obtaining a degree in this college then, required the student to finish a six-year ladderized program which was later reduced to a five year scheme during the term of former PLM President Consuelo Blanco who felt the imperative need of the engineering graduates to constitute the country's labor pool.",
  },
  {
    title: "LEGACY AND COMMITMENT",
    content:
      "The College of Engineering stands committed to upholding the legacy conceived by Mayor Villegas and the late Mayor Arsenio H. Lacson by providing its present batch of Engineering students with quality education which is responsive to the needs of the time.",
  },
];

// cn timeline
export const cnTimeline = [
  {
    title: "ESTABLISHMENT OF THE COLLEGE (1967-1969)",
    content:
      "In 1967, a study entitled Manila - Its Needs and Resources indicated that despite the physical proximity to the people, the 41 health centers under the supervision of Manila Health Department had not gained the people's confidence. To resolve this, a community-oriented College of Nursing was established in the summer of 1969. Ms. Valentina Patacsil was appointed as college secretary by former PLM President Dr. Benito F. Reyes. Under Ms. Patacsil's guidance, 29 students were chosen to be the first nursing scholars of PLM from a long list of prospective nursing students who were enrolled in the two-year Associate in Arts course.",
  },
  {
    title: "LEADERSHIP AND EARLY ACHIEVEMENTS (1969-1972)",
    content:
      "On July 1, 1969, Mrs. Mary Vita B. Jackson was appointed as its dean. Four years later, 27 of these scholars passed the board examination given in April 1972, including Rosalinda Taguiam Palad who was the 9th placer. Since then, more PLM graduates have distinguished themselves not only as placers in the nursing board examinations, but more importantly as effective nurse practitioners in the Philippines and abroad. To date, it has produced 188 board topnotchers and board placers.",
  },
  {
    title: "GRADUATE ACHIEVEMENTS AND CLINICAL PRACTICE",
    content:
      "Nursing students undergo clinical practice at the Ospital ng Maynila Medical Center, Philippine General Hospital, and other tertiary level health agencies in Metro Manila. Graduating students are assigned in rural areas and provinces as well.",
  },
  {
    title: "COMMUNITY IMMERSION PROGRAM (CIP)",
    content:
      "The Community Immersion Program (CIP) of the College of Nursing provides opportunities for the students to live and work with the less privileged families of these communities. Through these experiences, students are exposed to the realities of life and motivates them to voluntarily work in the aim of helping the people to be more health conscious, socially aware, and self-reliant. At the end, they are given the chance to really feel the pulse of community work.",
  },
];

// cpt timeline
export const cptTimeline = [
  {
    title: "ESTABLISHMENT OF THE COLLEGE (1993)",
    content:
      "Established in 1993, the College of Physical Therapy (CPT) is among the country's best learning institutions for Physical Therapy based on its licensure exam performance.",
  },
];

// Business Cards from line 1264 to line 1549
// caup business card
export const caupBusinessCard = {
  collegeName: " COLLEGE OF ARCHITECTURE AND URBAN PLANNING",
  deanName: "Arch. Jared Aaron R. Cruz",
  deanTitle: "Dean, College of Architecture and Urban Planning",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "caup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// plmbs business card
export const plmbsBusinessCard = {
  collegeName: " PLM BUSINESS SCHOOL",
  deanName: "Bernard R. Letrero",
  deanTitle: "Dean, PLM Business School",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "plmbsgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// ced business card
export const cedBusinessCard = {
  collegeName: "COLLEGE OF EDUCATION",
  deanName: "Dr. Jimmy M. Romero",
  deanTitle: "Dean, College of Education",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "cedgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// coe business card
export const coeBusinessCard = {
  collegeName: "COLLEGE OF ENGINEERING",
  deanName: "Engr. Juan C. Tallara, Jr.",
  deanTitle: "Dean, College of Engineering",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "cet_group@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// chass business card
export const chassBusinessCard = {
  collegeName: "COLLEGE OF HUMANITIES, ARTS, AND SOCIAL SCIENCES",
  deanName: "Danilo S. Cortez, Jr.",
  deanTitle: "Dean, College of Humanities, Arts, and Social Sciences",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// cn business card
export const cnBusinessCard = {
  collegeName: "COLLEGE OF NURSING",
  deanName: "Dr. David Paul R. Ramos",
  deanTitle: "Dean, College of Nursing",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// cpt business card
export const cptBusinessCard = {
  collegeName: "COLLEGE OF PHYSICAL THERAPY",
  deanName: "Alan P. Magpantay",
  deanTitle: "Dean, College of Physical Therapy",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// cs business card
export const csBusinessCard = {
  collegeName: "COLLEGE OF SCIENCE",
  deanName: "Aileen I. Atienza, Ph.D.",
  deanTitle: "Dean, College of Science",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// cl business card
export const clBusinessCard = {
  collegeName: "COLLEGE OF LAW",
  deanName: "Atty. Magelio S. Arboladura",
  deanTitle: "Dean, College of Law",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// gsl business card
export const gslBusinessCard = {
  collegeName: "GRADUATE SCHOOL OF LAW",
  deanName: "Justice Hector L. Hofileña (Ret.)",
  deanTitle: "Dean, Graduate School of Law",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// cm business card
export const cmBusinessCard = {
  collegeName: "COLLEGE OF MEDICINE",
  deanName: "Dr. Rose Anna Banal",
  deanTitle: "Dean, College of Medicine",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// sg business card
export const sgBusinessCard = {
  collegeName: "SCHOOL OF GOVERNMENT",
  deanName: "Noemi C. Gocuyo",
  deanTitle: "Dean, School of Government",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};

// ph busienss card
export const phBusinessCard = {
  collegeName: "SCHOOL OF PUBLIC HEALTH",
  deanName: "Phylis C. Rio, MD, MHA",
  deanTitle: "Dean, School of Public Health",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "chassgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};
