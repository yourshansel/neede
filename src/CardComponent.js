import React, { Component } from 'react';
import './css/CardComponent.css';
import IconComponent from './IconComponent.js';
import { store } from './App.js'
import NotificationSystem from 'react-notification-system';
import style from './styles.js';
import {CopyToClipboard} from 'react-copy-to-clipboard';




export function rootReducer(state=[], action) {

  switch(action.type) {
    case 'ADD_FAVORITE':
    return [...state,action.data];
    case 'SUB_FAVORITE':
    return [...state.filter(state => state.name !== action.data.name)];
    default:
    return state;
  }
};







class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.toggleFavorites = this.toggleFavorites.bind(this);


  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }



  toggleCopied(e) {
    this._notificationSystem.addNotification({
      message: this.props.data.name + ' has been copied to clipboard',
      autoDismiss: 2,
      level: 'info',
      position: 'tr',
      dismissible: 'click'
    })
  }





  toggleFavorites(e) {
    if
      (store.getState().includes(this.props.data))
    {
      this._notificationSystem.addNotification({
        message: this.props.data.name + ' has been removed from Favorites',
        autoDismiss: 2,
        level: 'info',
        position: 'tr',
        dismissible: 'click'
      });
      console.log(this.props.data.name + ' removed from favorites');
      this.props.data.fav = false;
      store.dispatch({type: 'SUB_FAVORITE', data: this.props.data});

    }

      else
    {
      this._notificationSystem.addNotification({
        message: this.props.data.name + ' has been added to Favorites',
        autoDismiss: 2,
        level: 'info',
        position: 'tr',
        dismissible: 'click'
      });
      console.log(this.props.data.name + ' added to favorites');
      this.props.data.fav = true;
      store.dispatch({type: 'ADD_FAVORITE', data: this.props.data});

    }
  }


  render() {
    let {name, description, url, screenshot, fav} = this.props.data;

    if (!fav) {
  fav = false;
  }

  

    return (
      <div className="cardComponent_wrapper">
        <div className="notification-system"><NotificationSystem style={style} ref="notificationSystem"/></div>
          <div className="cardComponent slideUp">
            <div className="CTA-container">


              <div className="CTA-wrapper">
                
                <div onClick={() => this.toggleFavorites(this.props.data)}
                      className={this.props.data.fav ? "CTA-icon-selected" : "CTA-icon"}>
                      <IconComponent icon={this.props.data.fav ? "favorited" : "favorite"}/>
                </div>


                <div onClick={() => this.toggleCopied(this.props.data)}
                  className="CTA-icon">
                  <CopyToClipboard text={url}><span><IconComponent icon="copy"/></span></CopyToClipboard>
                </div>

                <a href={url} className="CTA-icon" target="_blank" rel="noopener noreferrer"><IconComponent icon="link"/></a>
              </div>

            </div>
            <img src={screenshot} alt="a" className="cardComponent_img"/>
            <a href={url} className="cardComponent_name" target="_blank" rel="noopener noreferrer">{name}</a>
            <p className="cardComponent_description">{description}</p>
        </div>
      </div>
      );
    };
  };




  export default CardComponent;
