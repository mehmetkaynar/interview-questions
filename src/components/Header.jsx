import logo from "../helper/logo192.png";

const Header = () => {
  return (
    <div className="container d-flex p-5 justify-content-center align-items-center">
      <h1 className="text-center display-5 text-white">
        REACT INTERVIEW QUESTIONS AND ANSWERS
      </h1>

      <div>
        <img
          style={({ width: "100px" }, { height: "100px" })}
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
