import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ icon }) => {
  return (
    <div className="rrssContainer">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default SocialButton;
