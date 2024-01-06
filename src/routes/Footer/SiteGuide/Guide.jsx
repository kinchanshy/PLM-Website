import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
  List,
  ActionIcon,
  Tooltip,
  Group,
  Image
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconMailFilled,
  IconBrandX,
} from "@tabler/icons-react";
import BusinessCard from "../../../components/BusinessCardFooter";
import pic from "../../../assets/homepage.png";

function Guide() {

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
            Site Guide
            </Text>
          </div>
          
          <Divider />

          <div>
            <Text p="xs">
            This site user guide outlines the varies ways to find information on the web site, how the navigation is ordered, how content is geared toward specific audiences, and how you can contact us if you need assistance.
            </Text>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            USING THE SITE NAVIGATION
            </Text>
          </div>

          <Divider />

          <div>
            <Text p="xs">
            The top-level navigation groups content into five topic areas:
            </Text>
          </div>

          <div style={{padding:"0 0 1.5rem 1.5rem"}}>
            <List>
              <List.Item>About: This section provides information about the university’s profile, vision and mission, history, facilities, administration, and achievements.</List.Item>
              <List.Item>Academics: This section showcases the different colleges and schools that offer undergraduate and graduate programs, as well as the academic calendar and the computerized registration system.</List.Item>
              <List.Item>Admissions: This section explains the admission process and requirements for various programs, as well as the scholarships and financial aid available for students.</List.Item>
              <List.Item>Research: This section highlights the theses and dissertations produced by PLM students and faculty.</List.Item>
              <List.Item>News: This section features the latest news, press releases, special reports, announcements, and gallery of PLM events and activities.</List.Item>
              <List.Item>Downloads: This section contains useful documents and forms that can be downloaded by students, faculty, staff, alumni, partners, and community members.</List.Item>
            </List>
          </div>

          <div>
            <Text p="xs" fz={'1.5rem'}>
            EXPLORING CONTENT
            </Text>
          </div>

          <Divider />

          <div style={{padding:"0 0 1.5rem 1.5rem"}}>
            <List>
              <List.Item>Students: This section provides information and services for current and prospective students of PLM, such as Student Manual, Tuition and other fees, Student Services, and Computerized Registration System</List.Item>
              <List.Item>Alumni: This section provides information and opportunities for the alumni of PLM, such as alumni association, achievements, alumni news & updates, and alumni foundation.</List.Item>
              <List.Item>Partners: This section provides information and collaboration for the partners of PLM, like scholarship and financial aid providers such as Alfonso Yuchengco Foundation, Fil-Am Society of Masters and Past Masters in California Masonry, SM Foundation and PLM-Scholarship Foundation, Inc.</List.Item>
              <List.Item>Community: This section provides information and engagement for the community of PLM, such as campus, events, sports, immigration and visa, and downloads.</List.Item>
              <List.Item>PLM email login: This section allows the users to access their PLM email account. The users need to enter their PLM email address and password to log in.</List.Item>
            </List>
          </div>

          <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
            <Image src={pic} p="md" style={{width:"50%"}}/>
          </div>

          <div style={{paddingTop: "1.5rem"}}>
            <BusinessCard />
          </div>

          <Group
              gap={40}
              style={{
                paddingTop: "2rem"
              }}
              justify="center"
              wrap="nowrap"
            >
              <ActionIcon
                variant="filled"
                color="#000000"
                size="lg"
                onClick={() => {
                  window.open("mailto:info@plm.edu.ph", "_blank");
                }}
              >
                <Tooltip label="Email us" withArrow>
                  <IconMailFilled />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="#000000"
                size="lg"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A15097268&keywords=pamantasan%20ng%20lungsod%20ng%20maynila&origin=RICH_QUERY_SUGGESTION&position=0&searchId=93b8881c-843a-49c2-95b8-ea6b6f58f9ae&sid=n%3Am&spellCorrectionEnabled=false",
                    "_blank"
                  );
                }}
              >
                <Tooltip label="Linkedin Account" withArrow>
                  <IconBrandLinkedin />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="#000000"
                size="lg"
                onClick={() => {
                  window.open("https://www.facebook.com/PLM.Haribon", "_blank");
                }}
              >
                <Tooltip label="Facebook Page" withArrow>
                  <IconBrandFacebookFilled />
                </Tooltip>
              </ActionIcon>
              <ActionIcon
                variant="filled"
                color="#000000"
                size="lg"
                onClick={() => {
                  window.open("https://twitter.com/PLM_Manila", "_blank");
                }}
              >
                <Tooltip label="X Account" withArrow>
                  <IconBrandX />
                </Tooltip>
              </ActionIcon>
            </Group>
        </div>
  );
}

export default Guide;
