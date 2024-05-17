import React, { useEffect } from "react";
import gsap from "gsap";
const privacyData = [
  {
    heading: "Information Collection and Use:",
    des: `While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to your name, email address, postal address, and phone number ("Personal Information").`,
  },
  {
    heading: "Log Data:",
    des: `Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.`,
  },
  {
    heading: "Cookies:",
    des: `Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.`,
  },
  {
    heading: "Security:",
    des: `The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.`,
  },
  {
    heading: "Changes to This Privacy Policy:",
    des: `This Privacy Policy is effective as of [Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.`,
  },
  {
    heading: "Contact Us:",
    des: "If you have any questions about this Privacy Policy, please contact us at +91 58795 75585.",
  },
];
export default function Privacy() {
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.from(".privacy-desc .privacy-heading", {
      autoAlpha: true,
      y: 50,
      duration: 1,
    });
    gsap.from(".privacy-desc .privacy-paragraph", {
      autoAlpha: true,
      y: 50,
      duration: 1,
    });
    tl.from(
      [
        ".privacy-points .privacy-heading",
        ".privacy-points .privacy-paragraph",
      ],
      {
        autoAlpha: true,
        y: 60,
        duration: 1.5,
        stagger: true,
      }
    );
  });
  return (
    <div>
      <div className="privacy-container max-w-[1440px] m-auto px-[4%] lg:px-0 md:px-0 py-10 md:py-20">
        <div className="privacy-content">
          <div className="privacy-desc pb-6 overflow-hidden">
            <h1 className="pb-5 privacy-heading">
              <b>Last update: </b> 28 Jan 2024
            </h1>
            <p className="text-[0.9rem] md:text-[1.1rem] privacy-paragraph">
              Quirky Bags ("us", "we", or "our") operates www.quirkybags.com
              (the "Quirky"). This page informs you of our policies regarding
              the collection, use, and disclosure of Personal Information we
              receive from users of the Site
            </p>
          </div>
          {privacyData.map((item, index) => {
            return (
              <div
                className="pb-3 md:pb-6 privacy-points overflow-hidden"
                key={index}
              >
                <h1 className="text-[1.1rem] md:text-2xl pb-1 font-semibold privacy-heading">
                  {item.heading}
                </h1>
                <p className="text-[0.9rem] md:text-[1.1rem] privacy-paragraph">
                  {item.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
