// import React, { useState } from "react";
// import { Container, Typography, Grid, Button } from "@mui/material";
// import { motion } from "framer-motion";
// import "./Speakers.scss";
// import defaultProfileImage from "../../assets/images/defaultProfile.png";
// import img1 from "../../assets/images/PI_Image.jpg";
// import img2 from "../../assets/images/PIImage2.jpeg";
// import img3 from "../../assets/images/PIImage3.png";
// import img4 from "../../assets/images/PIImage4.jpeg";
// import img5 from "../../assets/images/PIImage5.jpeg";

// // const speakers = [
// //   {
// //     name: "Dr. Jane Smith",
// //     designation: "Professor",
// //     department: "Department of Biomedical Informatics",
// //     affiliation: "Global Health University",
// //     image: img1,
// //     bio: "Dr. Smith specializes in AI fairness in healthcare and is a professor at Global Health University.",
// //   },
// //   {
// //     name: "Dr. Arjun Patel",
// //     designation: "Data Scientist",
// //     department: "Epidemic Research Group",
// //     affiliation: "Center for Disease Modeling",
// //     image: img2,
// //     bio: "Dr. Patel is known for his work in epidemic prediction models using machine learning in low-resource environments.",
// //   },
// //   {
// //     name: "Dr. Maria Lopez",
// //     designation: "Policy Advisor",
// //     department: "AI Governance Division",
// //     affiliation: "International AI Ethics Board",
// //     image: img3,
// //     bio: "Dr. Lopez is a policy advisor and researcher focused on data privacy and global AI regulations.",
// //   },
// //   {
// //     name: "Dr. Maria Lopez",
// //     designation: "Policy Advisor",
// //     department: "AI Governance Division",
// //     affiliation: "International AI Ethics Board",
// //     image: img4,
// //     bio: "Dr. Lopez is a policy advisor and researcher focused on data privacy and global AI regulations.",
// //   },
// //   {
// //     name: "Dr. Maria Lopez",
// //     designation: "Policy Advisor",
// //     department: "AI Governance Division",
// //     affiliation: "International AI Ethics Board",
// //     image: img5,
// //     bio: "Dr. Lopez is a policy advisor and researcher focused on data privacy and global AI regulations.",
// //   },
// //   {
// //     name: "Dr. Maria Lopez",
// //     designation: "Policy Advisor",
// //     department: "AI Governance Division",
// //     affiliation: "International AI Ethics Board",
// //     image: img3,
// //     bio: "Dr. Lopez is a policy advisor and researcher focused on data privacy and global AI regulations.",
// //   },
// //   {
// //     name: "Dr. Maria Lopez",
// //     designation: "Policy Advisor",
// //     department: "AI Governance Division",
// //     affiliation: "International AI Ethics Board",
// //     image: img3,
// //     bio: "Dr. Lopez is a policy advisor and researcher focused on data privacy and global AI regulations.",
// //   },
// // ];

// const speakers = [
//   {
//     name: "Dr. Jeffrey Townsend",
//     designation: "Professor",
//     department: "Yale School of Public Health",
//     affiliation: "",
//     bio: "Dr. Townsend's research lies at the intersection of bioinformatics and public health, focusing on AI-driven health data models.",
//   },
//   {
//     name: "Dr. Liqing Zhang",
//     designation: "Professor",
//     department: "Computer Science Department",
//     affiliation: "Virginia Tech",
//     bio: "Dr. Zhang specializes in computational genomics and interpretable machine learning models for health sciences.",
//   },
//   {
//     name: "Dr. Reva Schwartz",
//     designation: "Research Scientist",
//     department: "",
//     affiliation: "NIST",
//     bio: "Dr. Schwartz investigates the trustworthiness and transparency of AI systems in scientific and regulatory contexts.",
//   },
//   {
//     name: "Dr. Goli Yamini",
//     designation: "Associate Program Director",
//     department: "",
//     affiliation: "National Science Foundation, U.S.A.",
//     bio: "Dr. Yamini oversees AI research funding programs with a focus on health equity and global scientific collaboration.",
//   },
//   {
//     name: "Dr. Zhiyong Lu",
//     designation: "Senior Investigator",
//     department: "Deputy Director for Literature Search",
//     affiliation: "NIH/NLM, NCBI",
//     bio: "Dr. Lu leads AI initiatives in biomedical literature analysis and information retrieval at the NIH.",
//   },
//   {
//     name: "Dr. Stephen Sodeke",
//     designation: "Professor of Bioethics",
//     department: "Tuskegee University Bioethics Center",
//     affiliation: "",
//     bio: "Dr. Sodeke explores ethical frameworks for AI use in vulnerable populations and underrepresented communities.",
//   },
//   {
//     name: "Dr. Zachary C. Lipton",
//     designation: "Raj Reddy Associate Professor of Machine Learning",
//     department: "",
//     affiliation: "Carnegie Mellon University / Abridge",
//     bio: "Dr. Lipton focuses on fairness and accountability in ML. He also serves as the CTO of Abridge, an AI health startup.",
//   },
//   {
//     name: "Dr. Ritambhara Singh",
//     designation:
//       "John E. Savage Assistant Professor of Computer Science and Data Science",
//     department: "",
//     affiliation: "Brown University",
//     bio: "Dr. Singh's research includes deep learning for genomic data, AI interpretability, and personalized medicine.",
//   },
//   {
//     name: "Dr. Amarda Shehu",
//     designation: "Professor & Associate Dean for AI Innovation",
//     department: "",
//     affiliation: "George Mason University",
//     bio: "Dr. Shehu works on biomedical AI with a focus on explainable models and AI for drug discovery.",
//   },
//   {
//     name: "Xiaopeng Zhang",
//     designation: "Professor, Congressional Science & Technology Fellow in AI",
//     department: "",
//     affiliation: "University of Tennessee Knoxville",
//     bio: "Prof. Zhang serves in science policy roles, advancing trustworthy AI and advising on national AI legislation.",
//   },
//   {
//     name: "Dr. Henry Horng-Shing Lu",
//     designation: "Distinguished Professor",
//     department: "Institute of Statistics",
//     affiliation: "National Yang Ming Chiao Tung University, Taiwan",
//     bio: "Dr. Lu's work includes statistical learning for public health and applications of AI in clinical trials.",
//   },
//   {
//     name: "Rory Mclean",
//     designation: "Head of Technological Innovation",
//     department: "",
//     affiliation: "Aderas",
//     bio: "Rory leads AI technology integration in healthcare-focused government and private sector projects.",
//   },
// ];

// const SpeakersPage = () => {
//   const [flippedIndex, setFlippedIndex] = useState(null);

//   const handleFlip = (index) => {
//     setFlippedIndex(flippedIndex === index ? null : index);
//   };

//   return (
//     <motion.section
//       className="speakers-section"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <Container>
//         <Typography variant="h3" className="speakers-title">
//           Featured Speakers
//         </Typography>
//         <Grid container spacing={6} justifyContent="center">
//           {speakers.map((speaker, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <div
//                 className={`fancy-flip ${
//                   flippedIndex === index ? "flipped" : ""
//                 }`}
//               >
//                 <div className="flip-inner">
//                   <div className="flip-front">
//                     <img
//                       src={speaker.image}
//                       alt={speaker.name}
//                       className="speaker-image"
//                     />
//                     <div className="speaker-details">
//                       <Typography className="flip-name">
//                         {speaker.name}
//                       </Typography>
//                       <Typography className="flip-role">
//                         {speaker.designation}
//                       </Typography>
//                       <Typography className="flip-affiliation">
//                         {speaker.department}
//                       </Typography>
//                       <Typography className="flip-affiliation">
//                         {speaker.affiliation}
//                       </Typography>
//                       <Button
//                         variant="outlined"
//                         size="small"
//                         onClick={() => handleFlip(index)}
//                       >
//                         View Bio
//                       </Button>
//                     </div>
//                   </div>
//                   <div className="flip-back">
//                     <Typography className="flip-bio">{speaker.bio}</Typography>
//                     <Button
//                       variant="contained"
//                       size="small"
//                       onClick={() => handleFlip(index)}
//                     >
//                       Go Back
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </motion.section>
//   );
// };

// export default SpeakersPage;

import React, { useState } from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./Speakers.scss";
import defaultProfileImage from "../../assets/images/defaultProfile.png";

const speakers = [
  {
    name: "Aidong Zhang",
    designation: "",
    department: "",
    affiliation: "University of Virginia",
    image: defaultProfileImage,
    bio: "",
  },
  {
    name: "Dr. Reva Schwartz",
    designation: "Research Scientist",
    department: "",
    affiliation: "Civitaas Insights LLC",
    image: defaultProfileImage,
    bio: "Dr. Schwartz investigates the trustworthiness and transparency of AI systems in scientific and regulatory contexts.",
  },
  {
    name: "Dr. Henry Horng-Shing Lu",
    designation: "Distinguished Professor",
    department: "Institute of Statistics",
    affiliation: "National Yang Ming Chiao Tung University, Taiwan",
    image: defaultProfileImage,
    bio: "Dr. Lu's work includes statistical learning for public health and applications of AI in clinical trials.",
  },
  {
    name: "Fenglou Mao",
    designation: "Program Officer",
    department: "Office of Data Science Strategy",
    affiliation: "NIH",
    image: defaultProfileImage,
    bio: "",
  },
];

/*const organizingCommittee = [
  {
    name: "Dr. Hong Qin",
    designation: "Professor",
    affiliation:
      "Old Dominion University & University of Tennessee at Chattanooga",
    image: defaultProfileImage,
    bio: "Dr. Qin co-leads initiatives on equitable AI infrastructure across university and federal collaborations.",
  },
  {
    name: "Dr. Jude Dzevela Kong",
    designation: "Associate Professor",
    affiliation: "York University",
    image: defaultProfileImage,
    bio: "Dr. Kong champions community-centric AI and pandemic modeling with global partnerships.",
  },
  {
    name: "Dr. Letu Qingge",
    designation: "Assistant Professor",
    affiliation: "North Carolina A&T State University",
    image: img1,
    bio: "Dr. Qingge designs AI-driven systems for healthcare diagnostics and fairness in prediction.",
  },
  {
    name: "Dr. Frank Liu",
    designation: "Professor",
    affiliation: "Old Dominion University",
    image: defaultProfileImage,
    bio: "Dr. Liu develops policy frameworks and scalable data systems for responsible AI use.",
  },
];*/

const SpeakersPage = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const renderCards = (list) => (
    <Grid container spacing={6} justifyContent="center">
      {list.map((speaker, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div
              className={`fancy-flip ${
                flippedIndex === index ? "flipped" : ""
              }`}
            >
              <div className="flip-inner">
                <div className="flip-front">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speaker-image"
                  />
                  <div className="speaker-details">
                    <Typography className="flip-name">
                      {speaker.name}
                    </Typography>
                    <Typography className="flip-role">
                      {speaker.designation}
                    </Typography>
                    {speaker.department && (
                      <Typography className="flip-affiliation">
                        {speaker.department}
                      </Typography>
                    )}
                    {speaker.affiliation && (
                      <Typography className="flip-affiliation">
                        {speaker.affiliation}
                      </Typography>
                    )}
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleFlip(index)}
                    >
                      View Bio
                    </Button>
                  </div>
                </div>
                <div className="flip-back">
                  <Typography className="flip-bio">{speaker.bio}</Typography>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleFlip(index)}
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <motion.section
      className="speakers-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Typography
          variant="h4"
          style={{
            marginBottom: "1rem",
            fontWeight: 600,
            fontSize: "36px",
            textAlign: "center",
          }}
        >
          Invited Speakers
        </Typography>
        {renderCards(speakers)}
        {/*<Typography
          variant="h4"
          style={{
            fontWeight: 600,
            fontSize: "36px",
            textAlign: "center",
            marginTop: "80px",
            marginBottom: "30px",
          }}
        >
          Organizing Committee
        </Typography>*/}
        {/*renderCards(organizingCommittee)*/}
      </Container>
    </motion.section>
  );
};

export default SpeakersPage;