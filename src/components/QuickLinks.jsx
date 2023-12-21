import React, { useState } from "react";
import { Button, Image, Text, ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import quick from "../assets/quick.png";
import { IconX } from "@tabler/icons-react";

function QuickLinks() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsHovered(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsHovered(false); // Reset isHovered state when the modal is closed
  };

  return (
    <>
      {!isPopupOpen && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "#000",
            borderRadius: "1rem",
            borderBottomRightRadius: "0",
            top: 165,
            zIndex: "1",
            right: 0,
            overflow: "visible",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            style={{
              overflow: "visible",
              transition: "opacity 0.3s ease-in-out",
              opacity: isHovered ? 0 : 1,
            }}
          >
            <Image maw={50} radius="lg" src={quick} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "fixed",
              backgroundColor: "#000",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
              zIndex: "1",
              top: 165,
              right: isHovered ? 0 : "-100%",
              transition: "right 0.3s ease-in-out",
            }}
          >
            <div>
              <Image maw={50} radius="lg" src={quick} onClick={openPopup} />
            </div>
            <div>
              <Button color="black" onClick={openPopup}>
                Quick Links
              </Button>
            </div>
          </div>
        </div>
      )}

      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: 120,
            right: 5,
            zIndex: "2",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#efefef",
              borderRadius: ".5rem",
            }}
            onClick={closePopup}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: ".5rem",
                justifyContent: "center",
                // gap: "1rem",
              }}
            >
              <Button variant="subtle" color="white" className="quick">
                <Text onClick={() => navigate("/students")}>STUDENTS</Text>
              </Button>
              <Button variant="subtle" color="white" className="quick">
                <Text onClick={() => navigate("/partners")}>PARTNERS</Text>
              </Button>
              <Button variant="subtle" color="white" className="quick">
                <Text onClick={() => navigate("/community")}>COMMUNITY</Text>
              </Button>
              <Button variant="subtle" color="white" className="quick">
                <Text
                  onClick={() =>
                    window.open(
                      "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=d62cb49f-8a26-f288-697e-808e9a1151ce&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=plm.edu.ph&nonce=638382509292497052.bd98a665-e49d-4a89-aed7-50e26d69bc23&state=DctLDoAgDADRogfwJHxSoLTHAdvEhUY3xuvL4s1uHACs0zK5NAONMmfGmgQFi7RUMQwV7kTVWxH1pbP4btp8TYakJGPH7Oa7xfvr8TmvYPqG5_gB"
                    )
                  }
                >
                  PLM EMAIL LOGIN
                </Text>
              </Button>
            </div>
          </div>
          <div>
            <ActionIcon
              variant="filled"
              radius="lg"
              color="#FFC60B"
              aria-label="Close"
              onClick={closePopup}
              size="2rem"
            >
              <IconX radius="1rem" color="black" size="1.5rem" stroke={1.5} />
            </ActionIcon>
          </div>
        </div>
      )}
    </>
  );
}

export default QuickLinks;
