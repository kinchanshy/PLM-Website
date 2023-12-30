// import React from "react";
// import { Card, List, Text } from "@mantine/core";
// import { IconQuote } from "@tabler/icons-react";

// function Quotes({ height, bg, links, additem, eheight }) {
//   return (
//     <div style={{ padding: "1rem" }}>
//       <div style={{ marginBottom: "1rem" }}>
//         {additem &&
//           additem.map((item, index) => (
//             <Card
//               key={index}
//               shadow="sm"
//               radius="md"
//               h={eheight}
//               bg={bg}
//               withBorder
//             >
//               <Card.Section
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   position: "absolute",
//                 }}
//               >
//                 <Text fz="xl" fw="bold" p="lg">
//                   {item.title}
//                 </Text>
//               </Card.Section>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   height: "100%",
//                   justifyContent: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     position: "relative",
//                     padding: "1rem",
//                   }}
//                 >
//                   <IconQuote
//                     size="2rem"
//                     style={{
//                       position: "absolute",
//                       top: "50%",
//                       left: 0,
//                       transform: "translateY(-50%)",
//                     }}
//                   />
//                 </div>
//                 {Array.isArray(item.content) ? (
//                   <List type="ordered">
//                     {item.content.map((contentItem, contentIndex) => (
//                       <List.Item key={contentIndex}>
//                         <Text p="md">{contentItem}</Text>
//                       </List.Item>
//                     ))}
//                   </List>
//                 ) : (
//                   <Text
//                     p="xl"
//                     style={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     {item.content}
//                   </Text>
//                 )}
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     position: "relative",
//                     padding: "1rem",
//                   }}
//                 >
//                   <IconQuote
//                     size="2rem"
//                     style={{
//                       position: "absolute",
//                       top: "50%",
//                       right: 0,
//                       transform: "translateY(-50%)",
//                     }}
//                   />
//                 </div>
//               </div>
//             </Card>
//           ))}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           gap: "2rem",
//         }}
//       >
//         {links.map((quote, index) => (
//           <Card
//             key={index}
//             shadow="sm"
//             radius="md"
//             w="50%"
//             h={height}
//             bg={bg}
//             withBorder
//           >
//             <Card.Section
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 position: "absolute",
//               }}
//             >
//               <Text fz="xl" fw="bold" p="lg">
//                 {quote.title}
//               </Text>
//             </Card.Section>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 height: "100%",
//                 justifyContent: "center",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   position: "relative",
//                   padding: "1rem",
//                 }}
//               >
//                 <IconQuote
//                   size="2rem"
//                   style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: 0,
//                     transform: "translateY(-50%)",
//                   }}
//                 />
//               </div>
//               {Array.isArray(quote.content) ? (
//                 <List type="ordered">
//                   {quote.content.map((item, itemIndex) => (
//                     <List.Item key={itemIndex}>
//                       <Text p="xs">{item}</Text>
//                     </List.Item>
//                   ))}
//                 </List>
//               ) : (
//                 <Text
//                   p="xl"
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   {quote.content}
//                 </Text>
//               )}
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   position: "relative",
//                   padding: "1rem",
//                 }}
//               >
//                 <IconQuote
//                   size="2rem"
//                   style={{
//                     position: "absolute",
//                     top: "50%",
//                     right: 0,
//                     transform: "translateY(-50%)",
//                   }}
//                 />
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Quotes;
import React from "react";
import { Card, List, Text } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

function Quotes({ height, bg, links, additem, eheight }) {
  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        {additem &&
          additem.map((item, index) => (
            <Card
              key={index}
              shadow="sm"
              radius="md"
              h={eheight}
              bg={bg}
              withBorder
            >
              <Card.Section
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                }}
              >
                <Text fz="xl" fw="bold" p="lg">
                  {item.title}
                </Text>
              </Card.Section>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    padding: "1rem",
                  }}
                >
                  <IconQuote
                    size="2rem"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      transform: "translateY(-50%)",
                    }}
                  />
                </div>
                {Array.isArray(item.content) ? (
                  item.isList ? (
                    <List type="ordered">
                      {item.content.map((contentItem, contentIndex) => (
                        <List.Item key={contentIndex}>
                          <Text p="md">{contentItem}</Text>
                        </List.Item>
                      ))}
                    </List>
                  ) : (
                    item.content.map((contentItem, contentIndex) => (
                      <Text key={contentIndex} p="xl">
                        {contentItem}
                      </Text>
                    ))
                  )
                ) : (
                  <Text
                    p="xl"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.content}
                  </Text>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    padding: "1rem",
                  }}
                >
                  <IconQuote
                    size="2rem"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: 0,
                      transform: "translateY(-50%)",
                    }}
                  />
                </div>
              </div>
            </Card>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {links.map((quote, index) => (
          <Card
            key={index}
            shadow="sm"
            radius="md"
            w="50%"
            h={height}
            bg={bg}
            withBorder
          >
            <Card.Section
              style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
              }}
            >
              <Text fz="xl" fw="bold" p="lg">
                {quote.title}
              </Text>
            </Card.Section>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  padding: "1rem",
                }}
              >
                <IconQuote
                  size="2rem"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
              {Array.isArray(quote.content) ? (
                quote.isList ? (
                  <List type="ordered">
                    {quote.content.map((item, itemIndex) => (
                      <List.Item key={itemIndex}>
                        <Text p="xs">{item}</Text>
                      </List.Item>
                    ))}
                  </List>
                ) : (
                  quote.content.map((item, itemIndex) => (
                    <Text key={itemIndex} p="xs">
                      {item}
                    </Text>
                  ))
                )
              ) : (
                <Text
                  p="xl"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {quote.content}
                </Text>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  padding: "1rem",
                }}
              >
                <IconQuote
                  size="2rem"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
