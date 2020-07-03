import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       formVisibleOnPage: false,
       masterKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList, 
      formVisibleOnPage: false});
  }
  
  render() {
    let currenlyVisibleSate = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currenlyVisibleSate = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currenlyVisibleSate = <KegList kegList={this.state.masterKegList} />;
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
