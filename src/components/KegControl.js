import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Keg from './Keg';

const styledKegControl = {
  justifyContent: 'left',
  marginLeft: '2vh',
  marginRight: '2vh',
  fontFamily: 'Comic Sans MS, Comic Sans, cursive'
}

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
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
    const { dispatch } = this.props;
    const { id, name, brand, price, flavor } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      pintCount: 124,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
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
      currentlyVisibleState = <KegList kegList={this.props.masterKegList}
      onKegSelection={this.handleChangingSelectedKeg} />;
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

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
