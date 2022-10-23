import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 가져와서 url을 바꿔준다.
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div class="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <div> 로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://1000logos.net/wp-content/uploads/2017/02/Hennes-Logo-19682.jpg"
        ></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
