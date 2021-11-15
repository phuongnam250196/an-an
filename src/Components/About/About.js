import { Component } from 'react';
import './about.css';


class About extends Component {
 render() {
  return (
    <div className="aboutFrameWrap">
        <div className="aboutFrame">
          <div className="aboutContent">
            <div className="aboutItem">
              <div className="aboutItemCard">
                <div className="aboutIcon">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-full" />
                </div> 
                <p>
                  Xuất phát từ nhu cầu của thị trường trong lĩnh vực kế toán - kiểm toán - tài chính -thuế, với mục tiêu mang đến cho khách sự an toàn, an tâm, Kế toán An An cung cấp tới Quý Khách hàng các dịch vụ đa dạng, cập nhật thường xuyên bằng năng lực chuyên môn và kinh nghiệm thực tiễn trong nhiều năm hành nghề.
                </p>
              </div>
              <hr className="hr-about mb-2" />
              <div className="aboutItemCard">
                <div className="aboutIcon">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-full" />
                </div> 
                <p>
                  Đến với Kế toán An An, Quý Khách hàng sẽ được cung cấp dịch vụ tốt nhất, được tư vấn và hỗ trợ trong suốt quá trình hoạt động, đảm bảo đáp ứng mọi nhu cầu trong ngắn hạn cũng như dài hạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
 }
}

export default About;
