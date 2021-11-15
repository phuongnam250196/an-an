import { Component } from 'react';
import './document.css';

class Document extends Component {
 render() {
  return (
    <div className="documentFrameWrap">
        <div className="documentFrame">
          <div className="documentContent">
            {/* start item document  */}
            <div className="documentItem">
              <div className="documentItemCard">
                <div className="documentItemCardWrap">
                  <div className="documentIcon">
                    <i className="fa fa-window-maximize" />
                    <i className="fas fa-box    " />
                  </div> 
                  <p>
                    Nghị định
                  </p>
                </div>
              </div>
              <div className="documentItemCard">
                <div className="documentItemCardWrap">
                  <div className="documentIcon">
                    <i className="fa fa-briefcase" />
                  </div> 
                  <p>
                    Thông tư
                  </p>
                </div>
              </div>
            </div>
            {/* end item document  */}
          </div>
        </div>
      </div>
  );
 }
}

export default Document;
