import { Component } from 'react';
import './header2.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Header extends Component {

  // checkbutton = () => {
  //     alert("Heloo baybe");
  // }

  floatUL = () => {
      var checkbtnS = document.getElementsByClassName("menuHeaderList");
      checkbtnS[0].classList.toggle("checked");
  }
  hiddenUL = () => {
      var checkbtnS = document.getElementsByClassName("menuHeaderList");
      checkbtnS[0].classList.remove("checked");
  }
  buttonClick = () => {
    var listDrop = document.getElementsByClassName("dropdown-content");
    listDrop[0].classList.toggle("show");
  }
  
  buttonClick2 = () => {
    var listDrop = document.getElementsByClassName("dropdown-content");
    listDrop[1].classList.toggle("show");
  }

 render() {
  return (
    <div className="header">
        <div className="headerContainer">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn" onClick={() => this.floatUL()}>
            <i className="fa fa-bars" />
          </label>
          <div className="logoLeft">
          <NavLink to="/">AN AN</NavLink>
          </div>
          <div className="headerList">
            <ul className="menuHeaderList">
              <li className="menuHeaderItem">
              <NavLink to="/" onClick={()=>this.hiddenUL()}>Trang chủ</NavLink>
              </li>
              <li className="menuHeaderItem">
                <NavLink to="/gioithieu" onClick={()=>this.hiddenUL()}>Giới thiệu</NavLink>
                
              </li>
              <li className="menuHeaderItem dropdown">
                <NavLink to="/dichvu" className="dropbtn" onClick={()=>this.buttonClick()}>Dịch vụ <i className="fa fa-angle-down" ></i></NavLink>
                <div id="myDropdown" className="dropdown-content">
                  <a href="/dichvu">Tư vấn Kế toán - Thuế</a>
                  <a href="/dichvu">Dịch vụ Kế toán - Thuế</a>
                  <a href="/dichvu">Tư vấn kiểm soát nội bộ</a>
                  <a href="/dichvu">Dịch vụ bảo đảm rà soát</a>
                  <a href="/dichvu">Dịch vụ kê khai giao dịch</a>
                  <a href="/dichvu">Kiểm toán Báo cáo tài chính</a>
                </div>
              </li>
              <li className="menuHeaderItem dropdown">
                <NavLink to="/tailieu" className="dropbtn" onClick={()=>this.buttonClick2()}>Tài liệu <i className="fa fa-angle-down"></i></NavLink>
                <div id="myDropdown" className="dropdown-content">
                  <a href="/tailieu">Thông tư</a>
                  <a href="/tailieu">Nghị định</a>
                </div>
              </li>
              <li className="menuHeaderItem">
                <NavLink to="/lienhe" onClick={()=>this.hiddenUL()} >Liên hệ</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
 }
}

export default Header;
