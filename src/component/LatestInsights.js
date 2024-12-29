// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "../styles/LatestInsights.css";

// const LatestInsights = () => {
//   const insights = [
//     {
//       title: "Beware of What You Type: The Rise of Keyboard-Based iPhone Hacking",
//       description: "Cybercriminals have found a way to bypass Apple’s normal security checks...",
//       image: "https://certo-software.imgix.net/app/uploads/2023/11/Keylogger-research-image2.jpg?w=2000&auto=format",
//       label: "Expertise",
//       link: "https://www.certosoftware.com/insights/beware-of-what-you-type-the-rise-of-keyboard-based-iphone-hacking/",
//     },
//     {
//       title: "How to Detect Spyware on an iPhone",
//       description: "Last August Google warned that over 1 BILLION Apple users...",
//       image: "https://certo-software.imgix.net/app/uploads/2022/10/How-to-detect-spyware-on-an-iphone.jpg?w=2000&auto=format",
//       label: "Guides",
//       link: "https://www.certosoftware.com/insights/how-to-detect-spyware-on-an-iphone/",
//     },
//     {
//       title: "Green or Orange Dot Appearing Randomly on iPhone, Am I Hacked?",
//       description: "Learn what these dots mean and if they indicate hacking...",
//       image: "https://certo-software.imgix.net/app/uploads/2022/10/Green-or-orange-dot-appearing-randomly-on-iPhone-am-I-hacked-2.jpeg?w=2000&auto=format",
//       label: "Expertise",
//       link: "https://www.certosoftware.com/insights/green-or-orange-dot-appearing-randomly-on-iphone-am-i-hacked/",
//     },
//   ];

//   return (
//     <aside className="latest-insights-section">
//       <div className="container-large">
//         <div className="section-header text-center">
//           <h2 className="headline-2">Latest Insights</h2>
//         </div>
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={3}
//           breakpoints={{
//             768: { slidesPerView: 1 },
//             1024: { slidesPerView: 2 },
//             1366: { slidesPerView: 3 },
//           }}
//         >
//           {insights.map((insight, index) => (
//             <SwiperSlide key={index}>
//               <a href={insight.link} className="card">
//                 <div
//                   className="card-image"
//                   style={{ backgroundImage: `url(${insight.image})` }}
//                 ></div>
//                 <div className="card-content">
//                   <p className="card-label">{insight.label}</p>
//                   <h3 className="card-title">{insight.title}</h3>
//                   <p className="card-description">{insight.description}</p>
//                 </div>
//               </a>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </aside>
//   );
// };

// export default LatestInsights;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/LatestInsights.css";
const LatestInsights = () => {
  const insights = [
    {
      title:
        "Beware of What You Type: The Rise of Keyboard-Based iPhone Hacking",
      description:
        "Cybercriminals have found a way to bypass Apple’s normal security checks...",
      image:
        "https://certo-software.imgix.net/app/uploads/2023/11/Keylogger-research-image2.jpg?w=2000&auto=format",
      label: "Expertise",
      link: "https://www.certosoftware.com/insights/beware-of-what-you-type-the-rise-of-keyboard-based-iphone-hacking/",
    },
    {
      title: "How to Detect Spyware on an iPhone",
      description:
        "Last August Google warned that over 1 BILLION Apple users...",
      image:
        "https://certo-software.imgix.net/app/uploads/2022/10/How-to-detect-spyware-on-an-iphone.jpg?w=2000&auto=format",
      label: "Guides",
      link: "https://www.certosoftware.com/insights/how-to-detect-spyware-on-an-iphone/",
    },
    {
      title: "Green or Orange Dot Appearing Randomly on iPhone, Am I Hacked?",
      description: "Learn what these dots mean and if they indicate hacking...",
      image:
        "https://certo-software.imgix.net/app/uploads/2022/10/Green-or-orange-dot-appearing-randomly-on-iPhone-am-I-hacked-2.jpeg?w=2000&auto=format",
      label: "Expertise",
      link: "https://www.certosoftware.com/insights/green-or-orange-dot-appearing-randomly-on-iphone-am-i-hacked/",
    },
  ];

  return (
    <aside className="latest-insights-section">
      <div className="container-large">
        <div className="section-header text-center">
          <h2 className="headline-2">Latest Insights</h2>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1366: { slidesPerView: 3 },
          }}
        >
          {insights.map((insight, index) => (
            <SwiperSlide key={index}>
              <a href={insight.link} className="card">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${insight.image})` }}
                ></div>
                <div className="card-content">
                  <p className="card-label">{insight.label}</p>
                  <h3 className="card-title">{insight.title}</h3>
                  <p className="card-description">{insight.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Footer Section */}
      <div className="section__footer row mobile-no-animation animated revealContentUp active">
        <div className="col-12 text-center btn-group justify-content-center">
          <a
            href="/insights"
            title="View all insights"
            className="btn btn--primary btn--yellow btn--large btn--icon"
          >
            <span>View all insights</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default LatestInsights;
