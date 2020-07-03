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

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  render() {
    let currenlyVisibleSate = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currenlyVisibleSate = <NewKegForm />
      buttonText = "Return to Keg List";
    } else {
      currenlyVisibleSate = <KegList />
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currenlyVisibleSate}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
  
}

export default KegControl;
