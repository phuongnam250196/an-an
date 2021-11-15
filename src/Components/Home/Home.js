import { Component } from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


class Home extends Component {
 render() {
  return (
    <div className="mainContent">
      <div className="headerFrameWrap">
        <div className="headerFrame">
          <div className="headerContent">
            <div className="headerItem">
              <h1>An An</h1>
              <hr />
              <h3>Giải pháp bảo vệ doanh nghiệp</h3>
              <div className="btnHeader">
                <div className="btnGroup">
                
                  <div className="btnHeaderItem"><NavLink to="/dichvu">Tư vấn dịch vụ</NavLink></div>
                  <div className="btnHeaderItem"><NavLink to="/tailieu">Kiến thức</NavLink></div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
        <div className="elementor-container">
          <div className="elementor-row">
            <div className="element-col-4">
              <div className="element-col-wrap">
                <div className="element-icon">
                <NavLink to="/dichvu"><i className="fa fa-suitcase" /></NavLink>
                  
                </div>
                <div className="element-content">
                  <h3>
                    Tư vấn thuế
                  </h3>
                  <p>
                    Tư vấn toàn bộ các vấn đề về thuế liên quan đến doanh nghiệp, giúp khách hàng hạn chế tối đa rủi ro trong hoạt động. Sao Khuê hiểu rõ hệ thống các sắc thuế tại Việt Nam, luôn cập nhật chính sách mới, chúng tôi sẽ giúp khách hàng đạt được các mục tiêu về thuế trong bối cảnh thế giới không ngừng biến đổi hiện nay
                  </p></div>                            
              </div>  
            </div>
            <div className="element-col-4">
              <div className="element-col-wrap">
                <div className="element-icon">
                <NavLink to="/dichvu"><i className="fa fa-book" /></NavLink>
                  
                </div>
                <div className="element-content">
                  <h3>
                    Dịch vụ thuế
                  </h3>
                  <p>
                    Bạn đang lo lắng về độ minh bạch của số liệu kế toán? Hệ thống kiểm soát nội bộ hoạt động không hiệu quả? Là những kiểm toán viên đã làm việc tại các công ty kiểm toán hàng đầu Việt Nam, cùng kinh nghiệm làm việc với hơn 1.000 doanh nghiệp thuộc nhiều lĩnh vực, chúng tôi sẽ mang đến giải pháp cho mọi vấn đề trên ...
                  </p>
                </div>
              </div>
            </div>
            <div className="element-col-4">
              <div className="element-col-wrap">
                <div className="element-icon">
                  <NavLink to="/dichvu"><i className="fa fa-tasks" /></NavLink>
                </div>
                <div className="element-content">
                  <h3>
                    Kiểm toán
                  </h3>
                  <p>
                    "Hiền tài là nguyên khí của quốc gia", trình độ của đội ngũ nhân sự sẽ quyết định lớn đến khả năng phát triển của doanh nghiệp. Với 10 năm kinh nghiệm hoạt động trong lĩnh vực tư vấn thuế, kiểm toán và tài chính, Sao Khuê tự tin cung cấp các chuyên đề đào tạo phù hợp nhất với từng yêu cầu của bạn ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-container2">
          <div className="elementor-row">
            <div className="element-col-4">
              <div className="button-col-wrap">
                <NavLink to="/dichvu">              
                    <div className="button-content">
                      <i className="fa fa-external-link-square" />
                      <span>Chi tiết</span>
                    </div>                                       
                </NavLink>                        
              </div>
            </div>
            <div className="element-col-4">
              <div className="button-col-wrap">
                <NavLink to="/dichvu">              
                    <div className="button-content">
                      <i className="fa fa-external-link-square" />
                      <span>Chi tiết</span>
                    </div>                                       
                </NavLink>                        
              </div>
            </div>
            <div className="element-col-4">
            <div className="button-col-wrap">
                <NavLink to="/dichvu">              
                    <div className="button-content">
                      <i className="fa fa-external-link-square" />
                      <span>Chi tiết</span>
                    </div>                                       
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* end 3 element */}
        {/* start dividebar */}
        <div className="divide-bar">
          <div className="bar-image">
            <div className="bar-item">
            </div>
          </div>
        </div>
        {/* end dividerbar */}
        {/* start about us  */}
        <div className="about-us-header">
          <div className="about-us-container">
            <h3>Về chúng tôi ...</h3>
          </div>
        </div>
        <div className="about-us">
          <div className="about-us-wrap">
            <div className="about-us-content">
              <p>
                Xuất phát từ nhu cầu của thị trường trong lĩnh vực kế toán - kiểm toán - tài chính -thuế, với mục tiêu mang đến cho khách sự an toàn, an tâm, Kế toán An An cung cấp tới Quý Khách hàng các dịch vụ đa dạng, cập nhật thường xuyên bằng năng lực chuyên môn và kinh nghiệm thực tiễn trong nhiều năm hành nghề.
              </p>
              <p>
                Đến với Kế toán An An, Quý Khách hàng sẽ được cung cấp dịch vụ tốt nhất, được tư vấn và hỗ trợ trong suốt quá trình hoạt động, đảm bảo đáp ứng mọi nhu cầu trong ngắn hạn cũng như dài hạn.
              </p>
            </div>
          </div>
        </div>
        {/* end about us  */}
        
      </div>
  );
 }
}

export default Home;
