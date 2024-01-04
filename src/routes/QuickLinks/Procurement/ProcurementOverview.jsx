import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Divider,
  List
} from "@mantine/core";


function ProcurementOverview() {

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
            Procurement
            </Text>
          </div>
          
          <Divider />

          <div>
            <Text p="xs">
            To fully sustain its high-ranked status as among the most prestigious universities in the Philippines, PLM acquires a variety of items and equipment to support its operational requirements and developmental thrusts.
            </Text>
          </div>

          <div>
            <Text p="xs">
            The responsibility of purchasing is lodged upon the PLM Bids and Awards Committee (PBAC), pursuant to Republic Act No. 9184. The PBAC publishes its purchases at the Philippine Government Electronic Purchasing System (PhilGEPS) "which takes advantages of new technology to support a more efficient, convenient, transparent and open procurement process."
            </Text>
          </div>

          <div>
            <Text p="xs">
            To stretch PLM's commitment to transparency an extra mile, such publication is augmented in the official PLM Website to ensure a more credible and publicly transparent procurement system than as envisioned by the Procurement Reform Law. This enhances the commitment of PLM to transparency and accountability in government operations and had been conscientiously observed since this official PLM website was formally inaugurated in 2009.
            </Text>
          </div>

          <div>
            <Text p="xs">
            On 2011 August 23, the Department of Budget and Management has issued a memorandum to all concerned departments and agencies on the posting of programs of work of infrastructure projects on the agency's official website, pursuant to Republic Act No. 10147 and NBC No. 2011-528. Subsequently on 2011 September 07, Memorandum No. 2011-018 was issued by the Commission on Audit treating on the same matter. While the DBM and COA memoranda, issued only recently, pertain exclusively to infrastructure projects, PLM has been observing and practicing utmost transparency and accountability much earlier and on all matters of acquisition, among others.
            </Text>
          </div>

          <div>
            <Text p="xs">
            To ensure prompt delivery of procurement services, the procurement process is managed by the PLM Procurement Office, which also serves as the ex-officio PBAC Secretariat.
            </Text>
          </div>

          <List listStyleType="none" style={{padding:".5rem"}}>
            <List.Item>For more information, pls. reach out to:</List.Item>
            <List.Item>The PLM Bids and Awards Committee or</List.Item>
            <List.Item>The PLM Procurement Office</List.Item>
            <List.Item>G/F Gusaling Intramuros, PLM Campus</List.Item>
            <List.Item>IP-Phone: (+63 2) 643-2500 local 49</List.Item>
            <List.Item>Telefax: (+63 2) 528-4592Email: procurement@plm.edu.ph</List.Item>
          </List>
        </div>
  );
}

export default ProcurementOverview;
