// eslint-disable-next-line no-unused-vars,no-undef
import React from 'react';

class Home extends React.PureComponent {
  // eslint-disable-next-line constructor-super,no-unused-vars,no-useless-constructor
  constructor(props) {
    super(props);
  }

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
