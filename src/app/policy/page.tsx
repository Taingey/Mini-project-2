"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&::before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)"
}));

export default function Policy() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="container mx-auto p-6 mb-6">
      <div className="flex mt-5">
        <div
          className="border-l-8 border-red-500 rounded-full mb-8 h-[36px]
            "
        ></div>
        <h1 className="text-4xl ml-2 font-poppins font-bold">Privacy Policy</h1>
      </div>
      <div>
        <p>
          Welcome to Black and White! At Black and White, we prioritize the
          privacy and security of our users. This Privacy Policy outlines the
          information we collect, how we use it, and the choices you have
          regarding your data.
        </p>
      </div>
      <div className="mt-[3rem]">
        <div className="mt-8">
          <h3 className="text-2xl font-poppins  mb-6 font-medium">
            1. Information We Collect
          </h3>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Personal Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                When you register or use our services, we may collect personal
                information such as your name, email address, and contact
                details.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Usage Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We gather information about how you interact with our website,
                including your browsing activity, the pages you visit, and the
                duration of your visit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Cookies</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We use cookies and similar tracking technologies to enhance your
                experience on our website and to collect information about your
                preferences and activities.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-poppins  mb-6 font-medium">
            2. How We Use Your Information
          </h3>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel4d-header"
            >
              <Typography>Improving User Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We utilize the information we collect to personalize your
                experience, provide relevant content, and optimize our services
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel5d-header"
            >
              <Typography>UCommunication</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We may use your contact information to send you updates,
                newsletters, and promotional offers, but only with your consent.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel6d-header"
            >
              <Typography>Analytics</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We analyze user behavior and trends to improve our website,
                products, and services.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-poppins  mb-6 font-medium">
            3. Data Security
          </h3>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel7d-content"
              id="panel7d-header"
            >
              <Typography>Improving User Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We employ industry-standard security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure. However, please be aware that no method of
                transmission over the internet or electronic storage is
                completely secure.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-poppins  mb-6 font-medium">
            4. Sharing of Information
          </h3>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography>Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We do not sell, trade, or rent your personal information to
                third parties without your consent. However, we may share
                aggregated or anonymized data for analytical purposes.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-poppins  mb-6 font-medium">
            5. Children's Privacy
          </h3>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header"
            >
              <Typography>children 13</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our website is not directed towards children under the age of
                13, and we do not knowingly collect personal information from
                individuals under 13 years of age. If we become aware that we
                have inadvertently collected personal information from a child
                under 13, we will take steps to delete such information.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-poppins  mb-6 font-medium">
            6. Updates to this Policy
          </h3>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel10d-header"
            >
              <Typography>Privacy Policy periodically</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We may update this Privacy Policy periodically to reflect
                changes in our practices or applicable laws. We encourage you to
                review this page regularly for any updates.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="bg-slate-100 mt-[4rem] p-[2rem]">
        <p>
          If you have any questions or concerns regarding this Privacy Policy or
          our data practices, please contact us at{" "}
          <strong className="text-red-500">
            taingey2966@blackandwhite.com.
          </strong>
        </p>
      </div>
    </div>
  );
}
