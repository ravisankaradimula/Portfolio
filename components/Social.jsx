import Link from "next/link";
import {FaGithub,FaLinkedinIn,FaYoutube,FaTwitter} from "react-icons/fa";

const socials=[
    {icon:<FaGithub/>,path:"https://github.com/ravisankaradimula"},
    {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/ravishankar-adimula-478b89257/?originalSubdomain=in"},
    // {icon:<FaYoutube/>,path:""},
    // {icon:<FaTwitter/>,path:""}
];
const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (<Link key={index} href={item.path} className={iconStyles}>
                 {item.icon}
            </Link>);
        })}
    </div>
  );
};

export default Social;