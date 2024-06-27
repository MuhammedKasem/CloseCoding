import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Custom Solutions Tailored for You",
  desc: "At Close Coding, we pride ourselves on delivering bespoke solutions that perfectly match your unique business needs. Our custom approach ensures you get the most effective and personalized product.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Unique Solutions",
      desc: "Get tailored solutions that fit your specific requirements.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Innovative Approach",
      desc: "Benefit from cutting-edge technologies and creative problem-solving.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Dedicated Support",
      desc: "Receive ongoing support and maintenance for optimal performance.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Seamless Integration",
  desc: "Our solutions are designed to integrate seamlessly with your existing systems and processes, ensuring smooth and efficient operation.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Close Coding ensures that all our solutions are mobile-first and fully responsive, providing a consistent experience across all devices.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Cutting-Edge Technologies",
      desc: "We leverage the latest technologies to deliver fast, efficient, and state-of-the-art solutions tailored to your business needs.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Our solutions include built-in, zero-config dark and light modes, offering users the flexibility to choose their preferred viewing experience.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
