import {
  FaMoneyBillWave,
  FaSearch,
  FaChartLine,
  FaEyeSlash,
  FaMobileAlt,
  FaUserSlash,
} from "react-icons/fa";

export const problems = [
  {
    title: "Budget Burnout",
    description: "Poor Budget Management & Allocation",
    icon: <FaMoneyBillWave className="text-3xl text-blue-400" />,
  },
  {
    title: "Optimization Overload",
    description: "Weak Product & Campaign Optimization",
    icon: <FaSearch className="text-3xl text-blue-400" />,
  },
  {
    title: "Price Wars & Market Gaps",
    description: "Competitive Strategy Failures",
    icon: <FaChartLine className="text-3xl text-blue-400" />,
  },
  {
    title: "Data Blindness",
    description: "Lack of Insights & Poor Targeting",
    icon: <FaEyeSlash className="text-3xl text-blue-400" />,
  },
  {
    title: "Conversion Killer",
    description: "Poor User Experience & Checkout Issues",
    icon: <FaMobileAlt className="text-3xl text-blue-400" />,
  },
  {
    title: "Retention Resistance",
    description: "Failing to Retain Customers",
    icon: <FaUserSlash className="text-3xl text-blue-400" />,
  },
];
