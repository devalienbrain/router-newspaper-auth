import logo from "../../public/assets/logo.png";

import moment from "moment/moment";

const Header = () => {
  return (
    <div className="text-center py-5">
      <img className="mx-auto" src={logo} />
      <h5>Journalism Without Fear or Favor</h5>
      <div> {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
    </div>
  );
};

export default Header;
