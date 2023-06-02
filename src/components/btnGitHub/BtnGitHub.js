import "./style.css"

import gitHubIcons from "./gitHub-black.svg"


const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHubIcons} alt="" />
        GitHub repo
    </a>
     );
}
 
export default BtnGitHub;