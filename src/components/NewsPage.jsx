// import React from "react";
// import "./NewsPage.scss";

// const news = [
//   `Our paper titled "Parallel Trajectory Training of Recurrent Neural Network Controllers with Levenberg-Marquardt
//     and Forward Accumulation Through Time in Closed-loop Control Systems" was published by the IEEE Transactions on
//     Sustainable Computing, 2023. IF: 3.9.`,
//   `Our paper titled "Machine Learning Models for Phenotype Prediction from Genotype" was accepted by the 23rd IEEE
//     International Conference on Bioinformatics and Bioengineering (BIBE) 2023.`,
//   `Our paper titled "Accelerating FPGA Implementation of Neural Network Controllers via 32-bit Fixed-Point Design for
// Real-Time Control" was accepted by the IEEE UEMCON 2023, New York. This paper was awarded the BEST PAPER at IEEE UEMCON 2023.`,
//   `Our paper titled "A Convolutional Denoising Autoencoder for Protein Scaffold Filling" was accepted by the 19th International
// Symposium on Bioinformatics Research and Applications (ISBRA 2023), Wroclaw, Poland, August 2023.`,
//   `Our paper titled "A Novel Weight Dropout Approach to Accelerate the Neural Network Controller Embedded Implementation on FPGA
//  for a Solar Inverter" was recently published at IEEE SMARTCOMP 2023, Nashville, TN.`,
//   `Our paper titled "PMT-IQA: Progressive Multi-task Learning for Blind Image Quality Assessment" was accepted by the 20th Pacific
// Rim International Conference on Artificial Intelligence (PRICAI), Jakarta, Indonesia, August 2023.`,
//   `Justin Noland successfully defended his Master thesis in June, 2023.`,
//   `Jordan Sturtz successfully defended his Master thesis in May, 2023.`,
// ];

// const NewsPage = () => {
//   return (
//     <div className="newsPage">
//       <Section title="News" items={news} />
//       <Section
//         title="Publications"
//         items={[
//           <a
//             key="google-scholar"
//             href="https://scholar.google.com/citations?user=-D7jAYEAAAAJ&amp;hl=en&amp;oi=ao"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             My Google Scholar Page
//           </a>,
//         ]}
//       />
//       <Section
//         title="Software"
//         items={["Protein Scaffold Filler Software will release soon."]}
//       />
//     </div>
//   );
// };

// const Section = ({ title, items }) => (
//   <div className="section">
//     <h2 className="section-title">{title}</h2>
//     <ul className="section-list">
//       {items.map((item, index) => (
//         <li key={index} className="section-list-item">
//           {item}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default NewsPage;

import React, { useEffect } from "react";
import "./NewsPage.scss";

const news = [
  `Our paper titled "Artificial Intelligence in COVID-19 Research: A Comprehensive Survey of Innovations, Challenges, and Future Directions" was accepted by Computer Science Review, 2025.`,
  `Our paper titled "Explainable Convolutional Neural Network for COVID-19 Detection", has been accepted by the 2025 International Conference on Bioinformatics and Computational Biology (BICOB 2025).`,
  `Our paper titled "Violence Detection from Industrial Surveillance Videos Using Deep Learning" was published at IEEE Access, 2025.`,
  `Our paper titled "A study of bias in gender and racial classification from face images using FaceNet" 
  was accepted at IEEE Symposium Series on Computational Intelligence (IEEE SSCI 2025).`,
  `Our paper titled "Efficient Federated Learning with Multi-Teacher Knowledge Distillation for COVID-19 Detection" was published by 
  15th ACM International Conference on Bioinformatics, Computational Biology and Health Informatics, ACM BCB 2024.`,
  `Our paper titled "Federated Learning for COVID-19 Detection: Optimized Ensemble Weighting and Knowledge Distillation" was published 
  in the proceeding of IEEE Conference on Bioinformatics and Biomedicine (BIBM), 2024.`,
  // `Our paper titled "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0", was accpeted by Materials journal, 2024.`,
  `Our paper titled "Genetic Algorithm-Based Data-Driven Process Selection System for Additive Manufacturing in Industry 4.0", was published by Materials journal, 2024.`,
  `Our paper titled "Explainable Convolutional Neural Network for Phenotype Prediction from Genotype" was accepted by the 
  2024 IEEE International Conference on E-health Networking, Application & Services (HealthCom), 2024.`,
];

const NewsPage = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".section-list-item");
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`; // Delay the animation for each item
    });
  }, []);

  return (
    <div className="newsPage">
      <Section title="News" items={news} />
      {/* <Section
        title="Publications"
        items={[
          <a
            key="google-scholar"
            href="https://scholar.google.com/citations?user=-D7jAYEAAAAJ&amp;hl=en&amp;oi=ao"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Google Scholar Page
          </a>,
        ]}
      /> */}
      {/* <Section
        title="Software"
        items={["Protein Scaffold Filler Software will release soon."]}
      /> */}
    </div>
  );
};

const Section = ({ title, items }) => (
  <div className="section">
    <div className="section-title">{title}</div>
    <ul className="section-list">
      {items.map((item, index) => (
        <li key={index} className="section-list-item">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default NewsPage;

// import React from "react";
// import "./NewsPage.scss";

// const newsArticles = [
//   {
//     title: "NSF Grant Awarded for AI Research",
//     date: "October 5, 2024",
//     description:
//       "A new NSF grant has been awarded to support research on the application of AI in healthcare systems. The project aims to develop innovative machine learning models.",
//   },
//   {
//     title: "Conference on Computational Biology",
//     date: "September 20, 2024",
//     description:
//       "NSF-funded research will be presented at the International Conference on Computational Biology, showcasing groundbreaking advancements in bioinformatics.",
//   },
//   {
//     title: "Renewable Energy Research Breakthrough",
//     date: "August 15, 2024",
//     description:
//       "Researchers have achieved a significant breakthrough in the development of neural network control systems for renewable energy management.",
//   },
//   {
//     title: "AI and Ethics Symposium",
//     date: "July 30, 2024",
//     description:
//       "A symposium on AI and Ethics was hosted by NSF researchers to explore the challenges and opportunities in AI development for ethical decision-making.",
//   },
// ];

// const NewsPage = () => {
//   return (
//     <div className="news-page">
//       <h1 className="news-page__title">Latest News</h1>
//       <div className="news-page__list">
//         {newsArticles.map((article, index) => (
//           <div key={index} className="news-page__card">
//             <h2 className="news-page__card__title">{article.title}</h2>
//             <p className="news-page__card__date">{article.date}</p>
//             <p className="news-page__card__description">
//               {article.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsPage;
