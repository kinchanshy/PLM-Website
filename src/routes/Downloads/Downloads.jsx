// // import React from "react";
// // import { Text, List, Space, Container, Divider } from "@mantine/core";

// // function Downloads() {
// //   return (
// //     <Container p="md">
// //       <Text size="xl" fw="bold">
// //         Downloads
// //       </Text>
// //       <Divider size="md" />
// //       <Space h="xl" />
// //       <Text>
// //         Documents and forms for PLM students, faculty, and administrative
// //         workers may be downloaded here.
// //       </Text>
// //       <div style={{ padding: "1.5rem" }}>
// //         <Text size="lg" fw={500}>
// //           I. Manuals and resource materials
// //         </Text>
// //         <List type="ordered" p="xs" style={{ marginLeft: "1rem" }}>
// //           <List.Item>
// //             <Text className="download-links">
// //               Student's Faculty Evaluation System manual
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               PLM Suicide Prevention and Postvention Protocol: A Guide for the
// //               School Community
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               University Health Services Orientation for Scholars
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Professionalization Program for Public Procurement Practitioners
// //               brochure
// //             </Text>
// //           </List.Item>
// //         </List>
// //       </div>
// //       <div style={{ padding: "1.5rem" }}>
// //         <Text size="lg" fw={500}>
// //           II. Forms for Students
// //         </Text>
// //         <List type="ordered" p="xs" style={{ marginLeft: "1rem" }}>
// //           <List.Item>
// //             <Text>Scholar forms:</Text>
// //             <List>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Scholarship application form (revised 2019)
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   DOH Medical Scholarship form
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text>
// //                   DOH Scholar Commitment form (
// //                   <span className="download-links">PDF</span> and{" "}
// //                   <span className="download-links">editable</span> version)
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Data Privacy consent form
// //                 </Text>
// //               </List.Item>
// //             </List>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Request Form for School Credentials
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Checklist of Requirements for Request for School Credentials
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Philhealth members registration form (PMRF, January 2020 version)
// //             </Text>
// //           </List.Item>
// //         </List>
// //       </div>
// //       <div style={{ padding: "1.5rem" }}>
// //         <Text size="lg" fw={500}>
// //           III. Forms for faculty and administrative workers
// //         </Text>
// //         <List type="ordered" p="xs" style={{ marginLeft: "1rem" }}>
// //           <List.Item>
// //             <Text className="download-links">
// //               Guidelines for applicants and new hires
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text>Personal Data Sheet Forms (2017)</Text>
// //             <List>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Scholarship application form (revised 2019)
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Personal Data Sheet (CS Form 212)
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Personal Data Sheet (CS Form 212) Attachment - Work Experience
// //                   Sheet
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Personal Data Sheet (CS Form 212) Attachment - Revised Guide
// //                   to Filling Up the Personal Data Sheet
// //                 </Text>
// //               </List.Item>
// //             </List>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Philhealth Membership Registration Form (PMRF)
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               GSIS Membership Information Sheet (MIF)
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               PAGIBIG Member's Data Form (MDF)
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Statement of Assets, Liabilities, and Net Worth (SALN) form
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">Daily Time Record (DTR)</Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Certification of Assumption to Duty
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Service Report (for administrative COS workers)
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">Service Report (for faculty)</Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">Staffing Pattern Form</Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text>New SPMS Forms (Nov. 2016)</Text>
// //             <List>
// //               <List.Item>
// //                 <Text className="download-links">Coaching Journal</Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Individual Performance Contract (IPC) Targets
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Individual Performance Contract Review (IPCR) Form
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Office Performance Contract (OPC) Targets
// //                 </Text>
// //               </List.Item>
// //               <List.Item>
// //                 <Text className="download-links">
// //                   Office Performance Contract Review Form
// //                 </Text>
// //               </List.Item>
// //             </List>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">Job Description Form</Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Statement of Duties and Responsibilities
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">
// //               Performance Evaluation System Form
// //             </Text>
// //           </List.Item>
// //           <List.Item>
// //             <Text className="download-links">Download PLM Mobile App</Text>
// //           </List.Item>
// //         </List>
// //       </div>
// //     </Container>
// //   );
// // }

// // export default Downloads;
// import React from "react";
// import { Text, List, Space, Container, Divider } from "@mantine/core";
// import { links } from "./links";

// // function Downloads() {
// //   return (
// //     <Container p="md">
// //       <Text size="xl" fw="bold">
// //         Downloads
// //       </Text>
// //       <Divider size="md" />
// //       <Space h="xl" />
// //       <Text>
// //         Documents and forms for PLM students, faculty, and administrative
// //         workers may be downloaded here.
// //       </Text>
// //       {links.map((section, sectionIndex) => (
// //         <div key={sectionIndex} style={{ padding: "1rem" }}>
// //           <Text size="lg" fw={500}>
// //             {section.title}
// //           </Text>
// //           <List
// //             type="ordered"
// //             p="xs"
// //             style={{ marginLeft: "1rem", cursor: "pointer" }}
// //           >
// //             {section.items &&
// //               section.items.map((item, itemIndex) => (
// //                 <List.Item key={itemIndex}>
// //                   {typeof item.label === "string" ? (
// //                     <Text
// //                       className="download-links"
// //                       onClick={() => {
// //                         if (item.onClick) {
// //                           item.onClick();
// //                         }
// //                       }}
// //                     >
// //                       {item.label}
// //                     </Text>
// //                   ) : (
// //                     <>
// //                       <Text>{item.subtitle}</Text>
// //                       {item.subItems && (
// //                         <List style={{ marginLeft: "1rem" }}>
// //                           {item.subItems.map((subItem, subItemIndex) => (
// //                             <List.Item key={subItemIndex}>
// //                               <Text
// //                                 className="download-links"
// //                                 onClick={() => {
// //                                   if (subItem.onClick) {
// //                                     subItem.onClick();
// //                                   }
// //                                 }}
// //                               >
// //                                 {subItem.label}
// //                               </Text>
// //                             </List.Item>
// //                           ))}
// //                         </List>
// //                       )}
// //                     </>
// //                   )}
// //                 </List.Item>
// //               ))}
// //           </List>
// //         </div>
// //       ))}
// //     </Container>
// //   );
// // }

// // export default Downloads;
// // ... (existing imports)

import React from "react";
import { Text, List, Space, Container, Divider } from "@mantine/core";
import { links } from "./links";

function Downloads() {
  const renderLabel = (label) => {
    if (label && Array.isArray(label)) {
      return label.map((part, index) => (
        <React.Fragment key={index}>
          {part.spans ? (
            renderSpans(part.spans)
          ) : part.onClick ? (
            <span className="download-links" onClick={part.onClick}>
              {part.text}
            </span>
          ) : (
            part.text
          )}
        </React.Fragment>
      ));
    } else {
      return <Text className="download-links">{label}</Text>;
    }
  };

  return (
    <Container p="md">
      <Text size="xl" fw="bold">
        Downloads
      </Text>
      <Divider size="md" />
      <Space h="xl" />
      <Text>
        Documents and forms for PLM students, faculty, and administrative
        workers may be downloaded here.
      </Text>
      {links.map((section, sectionIndex) => (
        <div key={sectionIndex} style={{ padding: "1rem" }}>
          <Text size="lg" fw={500}>
            {section.title}
          </Text>
          <List
            type="ordered"
            p="xs"
            style={{ marginLeft: "1rem", cursor: "pointer" }}
          >
            {section.items &&
              section.items.map((item, itemIndex) => (
                <List.Item key={itemIndex}>
                  {typeof item.label === "string" ? (
                    <Text
                      onClick={() => {
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      {item.label ? (
                        renderLabel(item.label)
                      ) : (
                        <Text className="download-links">{item.label}</Text>
                      )}
                    </Text>
                  ) : (
                    <>
                      <Text>{item.subtitle}</Text>
                      {item.subItems && (
                        <List style={{ marginLeft: "1rem" }}>
                          {item.subItems.map((subItem, subItemIndex) => (
                            <List.Item key={subItemIndex}>
                              <Text
                                onClick={() => {
                                  if (subItem.onClick) {
                                    subItem.onClick();
                                  }
                                }}
                              >
                                {subItem.label ? (
                                  renderLabel(subItem.label)
                                ) : (
                                  <Text className="download-links">
                                    {subItem.label}
                                  </Text>
                                )}
                              </Text>
                            </List.Item>
                          ))}
                        </List>
                      )}
                    </>
                  )}
                </List.Item>
              ))}
          </List>
        </div>
      ))}
    </Container>
  );
}

export default Downloads;
