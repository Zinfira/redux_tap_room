import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       formVisibleOnPage: false
    };
  }
  
  render() {
    let currenlyVisibleSate = null;
    if (this.state.formVisibleOnPage) {
      currenlyVisibleSate = <NewKegForm />
    } else {
      currenlyVisibleSate = <KegList />
    }
    return (
      <React.Fragment>
        {currenlyVisibleSate}
      </React.Fragment>
    );
  }
  
}

export default KegControl;
