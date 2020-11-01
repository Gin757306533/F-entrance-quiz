// eslint-disable-next-line no-unused-vars,no-undef
import React from 'react';

// TODO GTB-工程实践: - 不应该disable eslint哈，如果有eslint error应该要去fix error
class Home extends React.PureComponent {
  // eslint-disable-next-line constructor-super,no-unused-vars,no-useless-constructor
  constructor(props) {
    super(props);
  }
// TODO GTB-工程实践: - css class的命名格式不统一，且不正确。正确的规范是a-b这种格式。

  render() {
    return (
      <div className="container">
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <div className="leftTitle">分组列表</div>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <div className="rightTitle">
          {/* eslint-disable-next-line react/button-has-type,react/react-in-jsx-scope,no-undef */}
          <button className="button" type="button">
            分组学员
          </button>
        </div>
        <div className="clear" />

        <div className="Bottom">
          <div className="bottomTitle">学员列表</div>
          <div className="studentsList">
            <div className="singleStudent">1. 成吉思汗</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
