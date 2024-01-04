import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
  List
} from "@mantine/core";
import PDF from "../../../components/PDF";

function Annual() {
  const pdfIframeRef = useRef(null);

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
            Annual Procurement Plan
            </Text>
          </div>
          
          <Divider />

          <div>
            <Text p="xs">
            The Annual Procurement Plan (APP) reflects the university's procurement activities for a specific calendar year.
            </Text>
          </div>

          <div>
            <Text p="xs">
            The plan, along with other pertinent procurement-related documents, are publicly available on PLM's website for transparency and accountability, and as prescribed by Republic Act No. 9184 or the Government Procurement Reform Act.
            </Text>
          </div>

          <div>
            <Text p="xs">
            Browse the university's annual procurement plans below:
            </Text>
          </div>

          <div>
            <PDF
              src="https://www.plm.edu.ph/images/downloads/bids/2023/APP_2023.pdf"
              title="PDF Viewer"
              ref={pdfIframeRef}
            />
          </div>

          <div>
            <Text p="xs" fw={'bold'} fz={'1.5rem'}>
            ANNUAL PROCUREMENT PLAN OF PREVIOUS YEARS
            </Text>
          </div>

          <List style={{padding:".5rem"}}>
            <List.Item>Annual Procurement Plan for CY 2022:</List.Item>
            <List.Item>
              <a href="https://www.plm.edu.ph/images/downloads/bids/2021/APP2021.pdf">Annual Procurement Plan for CY 2021; </a>
              <a href="https://www.plm.edu.ph/images/downloads/bids/2021/Updated_2021_Annual_Procurement_Plan_as_of_2nd_Semester_CY_2021.pdf">Consolidated updates for 2nd Semester, CY 2021; </a> 
              <a href="https://www.plm.edu.ph/images/downloads/bids/2021/Procurement_Monitoring_Report_as_of_2nd_Semester_CY_2021.pdf">Procurement Monitoring Report;</a> and 
              <a href="https://www.plm.edu.ph/images/downloads/bids/2021/PLM-Board_Reso_4833.pdf"> Board of Regents resolution</a></List.Item>
            <List.Item>
              <a href="https://www.plm.edu.ph/images/downloads/bids/plm-annual-procurement-plan-cy-2020.pdf">Annual Procurement Plan for CY 2020; </a> 
              <a href="https://www.plm.edu.ph/images/downloads/bids/plm-annual-procurement-plan-cy-2020-updates-1st-sem.pdf">Consolidated updates as of 1st Semester, CY 2020; </a> 
              <a href="https://www.plm.edu.ph/images/downloads/bids/plm-pmr-1st-sem-cy-2020.pdf">Procurement monitoring report for 1st Semester, CY 2020; </a> 
              <a href="https://www.plm.edu.ph/images/downloads/bids/gppb-resolution-no.-11-2020.pdf">GPPB Resolution No. 11-2020</a></List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2019.pdf">Annual Procurement Plan for CY 2019; </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2019_Updates_1st_Sem.pdf">Consolidated updates for 1st Semester, CY 2019</a></List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2018.pdf">Annual Procurement Plan for CY 2018; </a>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2018_Updates_1st_Sem.pdf">Consolidated updates for 1st Semester, CY 2018 </a>and 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2018_Updates_2nd_Sem.pdf"> 2nd Semester, CY 2018</a></List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2017.pdf">Annual Procurement Plan for CY 2017; </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2017_2016_Funded_Projects.pdf">CY 2016 funded projects</a></List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2016.pdf">Annual Procurement Plan for CY 2016; </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2016_Updates_1st_Sem.pdf">Consolidated updates for 1st Semester, CY 2016 </a>and 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2016_Updates_2nd_Sem.pdf"> 2nd Semester, CY 2016</a></List.Item>
            <List.Item>Annual Procurement Plan for CY 2015 - pages 
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_001.jpg">1, </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_002.jpg">2, </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_003.jpg">3, </a>
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_004.jpg">4, </a>
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_005.jpg">5, </a>
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_006.jpg">6, </a>
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_007.jpg">7, </a>
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_008.jpg">8; </a>
              <a href="https://archive.plm.edu.ph/downloads/APP/APP_2015/APP_000.jpg">Board of Regents Resolution</a></List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2014_BORRes.pdf">Annual Procurement Plan for CY 2014 Board of Regents resolution; </a>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2014_CO.pdf">Capital Outlay (CO) </a> and 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2014_CO_Summary.pdf">summary; </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2014_MOOE.pdf">Maintenance and Other Operating Expenses (MOOE) </a> and 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2014_MOOE_Summary.pdf">summary</a></List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2013_APP.pdf">Annual Procurement Plan for CY 2013; </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM_Annual_Procurement_Plan_CY_2013_Approvals.pdf">Board of Regents resolution</a></List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM%20Annual%20Procurement%20Plan%20CY%202012.pdf">Annual Procurement Plan for CY 2012; </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM%20Annual%20Procurement%20Plan%20CY%202012%20Approved%20Copy.pdf">President's recommendation; </a>Board of Regents resolution</List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM%20Annual%20Procurement%20Plan%20CY%202011%20Approved%20Copy%20BOR%203350.pdf">Annual Procurement Plan for CY 2011 and Board of Regents resolution</a></List.Item>
            <List.Item>
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM%20Annual%20Procurement%20Plan%20CY%202010%20Approved%20Copy.jpg">Annual Procurement Plan for CY 2010; </a> 
              <a href="https://archive.plm.edu.ph/downloads/APP/PLM%20Annual%20Procurement%20Plan%20CY%202010%20BOR%20Resolution.jpg">Board of Regents resolution</a></List.Item>
            <List.Item><a href="https://archive.plm.edu.ph/downloads/APP/PLM%20Annual%20Procurement%20Plan%20CY%202009.pdf">Annual Procurement Plan for CY 2009</a></List.Item>
          </List>
        </div>
  );
}

export default Annual;
