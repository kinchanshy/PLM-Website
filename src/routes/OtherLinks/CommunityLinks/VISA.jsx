import React from "react";
import { Text, Box, Divider, List, } from "@mantine/core";
import { accordionItems } from "./links";
import Accordion from "../../../components/Accordions";

function VISA({ selectedLink }) {
  //const title = selectedLink.toUpperCase();
  return (
    <Box style={{ fontFamily: "Open Sans, sans serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          {selectedLink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />


      <div style={{ padding: "1rem"}}>
        <Text> Foreigners interested in studying at the Pamantasan ng Lungsod ng Maynila are required to secure a student visa prior to their arrival in the Philippines.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>Check our academic programs or email us at registrar@plm.edu.ph for inquiries.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text size="1.5rem" fw={"bold"}>Visa guidelines for foreign students interested in studying in the Philippines</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text size="1.5rem">9(f) STUDENT VISA</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>The applicant for student visa, having means sufficient for education and support in the Philippines, must be at least eighteen (18) years old and seeks to enter the Philippines temporarily and solely for the purpose of taking up a course of study higher than high school at a university, seminary, academy, college or school, approved for foreign students by the Commissioner of Immigration</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>The student applicant must first communicate with the school concerned and comply with the school’s institutional requirements.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>Said school shall forward the application package to the Commission on Higher Education (CHED) for approval. Once approved, the application package shall be endorsed by CHED to the Bureau of Immigration and Deportation (BID) and will then be forwarded to the Department of Foreign Affairs (DFA). The DFA will inform the Philippine Embassy for issuance of the student visa. The Philippine Embassy shall then notify the student accordingly.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text fw={"bold"}>Requirements for (9f) Student Visa</Text>
      </div>

      <Divider />

      <div style={{ padding: "1rem" }}>
        <List style={{listStyle: "none"}}>
          <List.Item>
            <Text>1. Personal appearance;</Text>
          </List.Item>
          <List.Item>
            <Text>2. Two originals of duly accomplished application form;</Text>
          </List.Item>
          <List.Item>
            <Text>3. Original passport valid not less than six months beyond intended period of stay in the Philippines;</Text>
          </List.Item>
          <List.Item>
            <Text>4. Two (2) photographs;</Text>
          </List.Item>
          <List.Item>
            <Text>5. Original and one (1) photocopy of birth certificate, verified and authenticated at the Embassy of the Philippines;</Text>
          </List.Item>
          <List.Item>
            <Text>6. Original and one (1) photocopy of affidavit of support executed by parent/s or legal guardian to be authenticated at the Embassy of the Philippines;</Text>
          </List.Item>
          <List.Item>
            <Text>7. Two (2) photocopies of parent/guardian’s passport data page;</Text>
          </List.Item>
          <List.Item>
            <Text>8. Original and one (1) photocopy of transcript of records authenticated at the Embassy of the Philippines;</Text>
          </List.Item>
          <List.Item>
            <Text>9. Original and one (1) photocopy of certificate of good moral character authenticated at the Embassy of the Philippines;</Text>
          </List.Item>
          <List.Item>
            <Text>10. Original and one (1) photocopy of police certificate authenticated by the Embassy of the Philippines;</Text>
          </List.Item>
          <List.Item>
            <Text>11. Original and one (1) photocopy of medical examination reports, including X-ray film contained in an envelope authenticated the Embassy of the Philippines;</Text>
          </List.Item>
          <List.Item>
            <Text>12. Duly accomplished Personal History Statement forms from the school concerned;</Text>
          </List.Item>
          <List.Item>
            <Text>13. Original and one (1) photocopy of comprehensive list of student’s possible contact persons in the Philippines;</Text>
          </List.Item>
          <List.Item>
            <Text>14. Diploma is required for student applicant who will pursue graduate studies (authenticated at the Embassy of the Philippines);       and</Text>
          </List.Item>
          <List.Item>
            <Text>15. Payment of Rs. 16,000 (subject to periodic change) in demand draft payable to the Embassy of the Philippines.</Text>
          </List.Item>
        </List>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text size="1.5rem">9(a) TEMPORARY VISITOR’S VISA FOR CONVERSION INTO 9(f) STUDENT VISA</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>Students are strongly advised to get 9(f) student visa prior to going to the Philippines in order to avoid the inconvenience of converting their 9(a) temporary visitor’s visa in the middle of their schooling). </Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>Nonetheless, foreigners who wish to study in the Philippines may also enter the country using 9(a) temporary visitor’s visa which may be converted into 9(f) student visa or Special Study Permit (SSP) in the Philippines.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>The student is responsible for checking the accreditation of his/her prospective university with the Philippines’ Bureau of Immigration (BI) and Commission on Higher Education (CHED).</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>A non-refundable fee of Rs. 2,560 (subject to periodic change) for regular processing will be collected upon submission of visa application, payable in demand draft to the Embassy of the Philippines.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>Students who have been accepted into a learning institution in the Philippines must comply with the requirements for issuance of 9(a) visa.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text size="1.5rem">Requirements for 9(a) visa for conversion into 9(f) visa:</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>1. Formal letter written (typewritten) and signed by the student addressed to The Head, Consular Section, Embassy of the Philippines in the country you are based, stating the destination (if studying, state name of school or university), specific purpose (if pursuing a degree, state course or program), duration of the course/program (based on academic calendar) or expected stay in the Philippines, and requesting for issuance of appropriate visa. The letter must also indicate the supporting documents accompanying the letter, with tabs, as follows: </Text>
      </div>

      <div style={{ padding: "1rem" }}>
        <Accordion items={accordionItems} />
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>2. Duly accomplished Visa Application Form, with clear passport-size ID picture of the applicant, with white background. Scanned photo and incompletely filled out application form will not be accepted. (Visa Application Form may be obtained from the Consular Section of the Embassy of the Philippines). </Text>
      </div>
      
      <div style={{ padding: "1rem"}}>
        <Text>3. Original and photocopy of the letter of acceptance from the university addressed to the student, printed on the university’s letterhead and bearing the clear imprint of the university’s dry seal and signature of the university’s registrar or its authorized representative.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>The letter must state the complete name of the student, his/her passport details, the degree program he/she has been accepted into, and the inclusive semester(s) and school year(s) to complete the program.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>The letter must be accompanied by the university’s schedule of all fees to be paid for by the student, simplified in matrix form, for the entire course or program in which the student has been accepted, including fees that involve the conversion of their 9(a) visa into 9(f)</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>4. Proof of payment of tuition fee for the first semester (i.e., original official receipt from the university, or wire transfer payable to the name and account of the accepting institution).</Text>
      </div>
      
      <div style={{ padding: "1rem"}}>
        <Text>5. If student is pursuing Medicine or Dentistry, original and photocopy of Certificate of Eligibility for Admission from the Commission on Higher Education (CHED), duly authenticated by the Department of Foreign Affairs in Manila.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>6. Original and photocopy of Letter of Support and Consent of parents, duly notarized and authenticated by your country's    ministry of external or foreign affairs, with attached proof of financial capacity to travel and pay for tuition and other expenses (an example of such proof is bank statement bearing the seal of the issuing bank and signature of the bank’s authorized representative, including proof of income and/or employment of parents).</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>7. Personal appearance of the student at the Consular Section of the Embassy of the Philippines, for interview.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>8. Return air ticket. The ticket must be valid for one year, or until or after the completion of the course or program to be taken by the student.</Text>
      </div>

      <div style={{ padding: "1rem"}}>
        <Text>(Source: Department of Foreign Affairs)</Text>
      </div>
    </Box>
  );
}

export default VISA;
