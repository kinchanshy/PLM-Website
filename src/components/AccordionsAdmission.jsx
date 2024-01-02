import React from "react";
import { Accordion, Text } from "@mantine/core";

function Accordions({ items }) {
  const renderBullet = (bullet, key) => (
    <div key={key}>
      {bullet.title && <Text fw="bold">{bullet.title}</Text>}
      {bullet.text && <Text ta="justify">{bullet.text}</Text>}
      {bullet.hasBullets ? (
        renderBullets(bullet.content, bullet.orderedList)
      ) : (
        <Text ta="justify">{bullet.content && bullet.content[0]?.text}</Text>
      )}
    </div>
  );

  const renderBullets = (bullets, orderedList) => (
    <div style={{ paddingLeft: orderedList ? "20px" : "20px" }}>
      {bullets.map((bullet, index) => (
        <React.Fragment key={index}>
          {orderedList && index > 0 && <br />} {/* Insert a line break only for non-ordered list items */}
          {renderBullet(bullet, index)}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <Accordion radius="md">
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>
            {item.title && <Text fw="bold">{item.title}</Text>}
          </Accordion.Control>
          <Accordion.Panel>
            {item.hasBullets ? (
              renderBullets(item.content, item.orderedList)
            ) : (
              <>
                {Array.isArray(item.content) &&
                  item.content.map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph.title && (
                        <Text fw="bold">{paragraph.title}</Text>
                      )}
                      {paragraph.text && (
                        <Text ta="justify">{paragraph.text}</Text>
                      )}
                      <br />
                    </React.Fragment>
                  ))}
              </>
            )}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Accordions;
