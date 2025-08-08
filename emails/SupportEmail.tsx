import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface SupportEmailProps {
  subject: string;
  name: string;
  email: string;
  department: string;
  priority: string;
  message: string;
}

export const SupportEmail = ({
  subject,
  name,
  email,
  department,
  priority,
  message,
}: SupportEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>RoboFx Trader</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Container className="bg-white p-45">
            <Section>
              <Img
                src={`https://mining.robofxtrader.com/logo.png`}
                width="184"
                height="auto"
                alt="Robofx"
                className="mx-auto my-20"
              />
            </Section>
            <Section className="text-center">
              <Text>
                We got a new contact form submission from Support. <br />
                subject : {subject} <br />
                name : {name} <br />
                email : {email} <br />
                department : {department} <br />
                priority : {priority} <br />
                message: {message}
              </Text>
            </Section>
            <Section>
              <Text className="text-center text-gray-400">
                13thStreet, 47 W 13th St, New York, NY 10011, USA
              </Text>
              <Text className="text-center text-gray-400">+19292301920</Text>
              <Text className="text-center text-gray-400 mb-3">
                &copy; 2024 RoboFX All Rights Reserved
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SupportEmail;
