import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
  List,
  Table,
} from "@mantine/core";

const elements = [
  { date: "Contact:",  
    cos: "Data Protection Officer"
  },
  { date: "Telephone Number:",  
    cos: "(+63 2) 8643-2500 loc. 64"
  },
  { date: "Email address:",  
    cos: "dpo@plm.edu.ph"
  },
  { date: "Office address:",  
    cos: "3/F GEE Building, Pamantasan ng Lungsod ng Maynila Campus Gen. Luna corner Muralla Streets, Intramuros, Manila, Philippines"
  },
]

function Privacy() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.cos}>
      <Table.Td style={{textAlign:'center'}}>{element.date}</Table.Td>
      <Table.Td>{element.cos}</Table.Td>
    </Table.Tr>
  ));

  const aboutTextRef = useRef(null);
  const [isSolidBackground, setIsSolidBackground] = useState(false);

  const handleScroll = () => {
    if (aboutTextRef.current) {
      const rect = aboutTextRef.current.getBoundingClientRect();

      setIsSolidBackground(
        rect.top <= window.innerHeight && rect.bottom >= 170
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const getFirstSublinkWithComponent = (mainLink) => {
  //   return mainLink.subLinks.find((sublink) => sublink.component)?.component;
  // };

  return (

        <div
          style={{
            display: "flex",     
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1.5rem 0 1.5rem",
        
          }}
        >
          <div>
            <Text p="xs" fw={'bold'} fz={'1.5rem'}>
              Privacy Policy
            </Text>
          </div>
          
          <Divider />

          <div>
            <Text p="xs" fz={'1.5rem'}>
              I. Introduction
            </Text>
          </div>

          <div>
            <Text p="xs">
            The Pamantasan ng Lungsod ng Maynila (PLM) recognizes its responsibilities under Republic Act No. 10173, also known as the Data Privacy Act of 2012 (DPA), with respect to the collection, use, storage, processing, disclosure, and disposal of the personal data we collect and receive from students, alumni, employees and the public who use this site, as well as those who:
            </Text>
          </div>

          <List type="ordered" style={{padding:"1.5rem 1.5rem 0 1.5rem"}}>
            <List.Item>Contact through our trunkline at 8643-2500 and direct lines;</List.Item>
            <List.Item>Email at info@plm.edu.ph and other institutional addresses; and</List.Item>
            <List.Item>File applications, complaints, submit inquiries, and apply for and avail of our services.</List.Item>
          </List>
          
          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            The DPA imposes stricter rules for the processing of sensitive personal information and privileged information. PLM is committed in ensuring that your personal data are protected and secured. Towards this end, a Data Protection Officer (DPO) and Compliance Officers for Privacy (COPs) were designated. Should we ask you to provide certain information by which you can be identified, you can be assured that it will only be used in accordance with this Privacy Policy and in carrying out our mandate as an educational institution, subject to compliance with applicable laws and regulations on personal data privacy protection.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            Personal data refers to all types of personal information, whether recorded in material or digital form, from which the identity of an individual is apparent or can be reasonably and directly ascertained by the entity holding the information, or when put together with other information would directly and certainly identify an individual.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            By using this site and availing of our services, you agree to the collection and use of your personal data in accordance with this Privacy Policy. If you are a parent/guardian of an applicant or student who is a minor (below 18 years old), this Policy pertains to the personal data of your child/ward.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            II. Collection and Use of Personal Data
            </Text>
          </div>

          <div>
            <Text p="xs">
            PLM may collect and/or generate your personal data in various forms, which may be written records, photographic or video images, digital material and even biometric records. PLM requires information to understand your needs and provide you with the best service.
            </Text>
          </div>
          
          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            a. During application for admission
            </Text>
          </div>

          <div style={{marginTop:"-1.5rem"}}>
            <Text p="xs">
            In filling up the admission form and other processes during the subsequent admission, we collect, among others: 1) directory information, e.g., your name, birthday, home and email addresses, contact details; 2) personal circumstances, e.g., family background, educational background, academic performance, disciplinary records, medical records; and 3) any or all information obtained through interviews, research, surveys, and/or during entrance tests or admission examinations.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            b. After enrollment and during the course of your stay with PLM
            </Text>
          </div>
          
          <div style={{marginTop:"-1.5rem"}}>
            <Text p="xs">
            After you join PLM, it may also collect additional information about you, including: 1) your academic or curricular pursuits, such as the classes you enroll in, scholastic performance, attendance, etc.; 2) co-curricular matters you may engage in, such as service learning, outreach activities, internship or apprenticeship compliance; 3) your extra-curricular activities, such as membership in student organizations, leadership positions, and participation and attendance in seminars, competitions, programs, outreach activities, and study tours; 4) any disciplinary incident that you may be involved in, including accompanying sanctions; and 5) medical, counselling and other services that require confidentiality. There will also be times when PLM will acquire other forms of data like pictures or videos of activities you participate in, via official documentation of such activities, or through recordings from closed-circuit security television cameras installed within the campus.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            c. After graduation
            </Text>
          </div>
          
          <div style={{marginTop:"-1.5rem"}}>
            <Text p="xs">
            As part of PLM’s alumni tracking, registration to the alumni registry system may also require information about your current contact details and employment in the industry.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            d. While employed
            </Text>
          </div>
          
          <div style={{marginTop:"-1.5rem"}}>
            <Text p="xs">
            PLM collects and processes information that are related to official duties and functions as a government employee, in compliance with Civil Service Commission, Commission on Audit and Commission on Higher Education requirements. PLM may also collect, process and store personal and sensitive personal information as mandated by laws, rules and regulations.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            e. After employment
            </Text>
          </div>
          
          <div style={{marginTop:"-1.5rem"}}>
            <Text p="xs">
            PLM collects and processes information that are related to official duties and functions.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            f. Unsolicited Information
            </Text>
          </div>
          
          <div style={{marginTop:"-1.5rem"}}>
            <Text p="xs">
            There may be instances when personal information is sent to or received by PLM even without prior request. In such cases, PLM will determine if it may legitimately keep such information. If it is not related to any legitimate interest, PLM will immediately dispose of the information in a way that will safeguard your privacy. Otherwise, it will be treated in the same manner as information you provide PLM.
            </Text>
          </div>

          <div style={{padding: '1.5rem 0 0 0'}}>
            <Text p="xs">
            If you provide personal data of other individuals (e.g., person to contact in the event of an emergency), you are requested to certify that you have obtained the consent of such individuals before providing their personal data.
            </Text>
          </div>
          
          <div style={{marginTop:"-1.5rem"}}>
            <Text p="xs">
            To the extent permitted or required by law, PLM will use your personal data to pursue its legitimate interests, including a variety of academic, administrative, research, historical, and statistical purposes, to perform contractual obligations to you, to comply with legal obligations, to protect your vitally important interests, including life and health, or for the performance of tasks that PLM carries out in the public interest (e.g., public order, public safety, etc.).
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            IV. Data Sharing
            </Text>
          </div>

          <div>
            <Text p="xs">
            There will be circumstances that we may, with your consent and/or pursuant to the applicable rules and regulations under the DPA, disclose your personal data to third parties as part of our regular academic operations and for the provision of our services.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            V. Information Control and Limitation
            </Text>
          </div>

          <div>
            <Text p="xs">
            You may request for a copy of any personal data we hold about you, and have it corrected or revised if inaccurate or incomplete. If you wish to request for a copy of your personal data, have it corrected, please reach out through our contact information found below. We will promptly respond to your request and execute the corresponding corrections of any information found to be incorrect or incomplete. You may also communicate should you intend to withdraw the consent that you will grant or has previously granted.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            VI. Security
            </Text>
          </div>

          <div>
            <Text p="xs">
            Any information you communicate to us is protected. We have implemented reasonable physical, organizational, and technical measures and controls to safeguard the confidentiality, integrity, and availability of your personal data. Such technologies are designed to prevent unauthorized users from accessing our systems.
            </Text>
          </div>

          <div style={{padding: "1.5rem 0 0 0"}}>
            <Text p="xs">
            Nevertheless, while we use various means and methods to protect your personal data, keep in mind that no method of transmission over the Internet or method of electronic storage will guarantee full or absolute security.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            VII. Log Data
            </Text>
          </div>

          <div>
            <Text p="xs">
            We collect information that your browser sends whenever you visit our site. This Log Data may include information such as your computer’s Internet Protocol (IP) address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, time spent on those pages, and other statistics.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            VIII. Use of cookies
            </Text>
          </div>

          <div>
            <Text p="xs">
            Our site uses cookies not to collect personally identifiable information about you but to ease navigation through the site.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            IX. Links to other websites
            </Text>
          </div>

          <div>
            <Text p="xs">
            Our site may contain links to other websites of interest. Once you have used these links to leave our site, you should note that we do not have any control over any other website. Therefore, we cannot be held responsible for the protection and privacy of any personal information which you provide while visiting such sites.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            X. Changes to this Privacy Policy
            </Text>
          </div>

          <div>
            <Text p="xs">
            Our services may continue to evolve and enhance to enable new features and services and to implement technological advances. As a result, this Privacy Policy may change occasionally which you should check periodically, which provisions will take effect immediately upon posting. Your continued use of PLM’s services after such amendments or revisions were posted will constitute your acknowledgement, acceptance, and adherence to the modified Privacy Policy.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            XI. Contact us
            </Text>
          </div>

          <div>
            <Text p="xs">
            If you have any concern or wish to exercise any of your rights, please contact us through:
            </Text>
          </div>

          <Table
            verticalSpacing="sm"
            p="md"
            fontSize="lg"
            highlightOnHover
            withTableBorder
            withColumnBorders
            style={{width:"50%", margin:"1.5rem 20rem 1.5rem 25rem",}}
          >
          <Table.Tbody>{rows}</Table.Tbody>

          </Table>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            XII. User’s Consent
            </Text>
          </div>

          <div>
            <Text p="xs">
            I have read and understood the PLM Privacy Policy and express my consent thereto. In the same manner, I hereby express my consent for PLM to collect, record, organize, update or modify, retrieve, consult, use, consolidate, block, erase or destruct my personal data as part of my information. I hereby affirm my right to: a) be informed, b) object to processing, c) access, d) rectify, suspend or withdraw my personal data, e) damages, and f) data portability pursuant to the provisions of the DPA and its corresponding Implementing Rules and Regulations. 
            </Text>
          </div>
        </div>
  );
}

export default Privacy;
