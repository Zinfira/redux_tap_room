import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

const styledKegControl = {
  justifyContent: 'left',
  marginLeft: '2vh',
  marginRight: '2vh',
  backgroundColor: ''
}

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList, 
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuyingKeg = (id) => {
    const currentlySelectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const newPintCount = currentlySelectedKeg.pintCount - 1;
    const afterBuyingPint = {...currentlySelectedKeg, pintCount: newPintCount};
    const beforeBuyingPint = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...beforeBuyingPint, afterBuyingPint],
      selectedKeg: afterBuyingPint
    });
  }

  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg}
      onClickingBuy = {this.handleBuyingKeg} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}  />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <div style={styledKegControl}>
        {currentlyVisibleState}
        <button className="my-button" onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
  
}

export default KegControl;
