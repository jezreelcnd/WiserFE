/* global FB */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addFacebookScript } from './scripts';
export default class Facebook extends PureComponent {
 static propTypes = {
  loading: PropTypes.bool.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
 };
 
 async componentDidMount() {
  try {
   await addFacebookScript();
   const params = {
    appId: FACEBOOK_APP_ID,
    cookie: false,
    xfbml: false,
    version: 'v3.2'
   };
   FB.init(params);
   FB.getLoginStatus(resp => console.log('FB:status:', resp.status));
  } catch (error) {
   console.log(error.name, ':', error.message);
  }
 }
 
 handleClick = () => {
  const { loading, onSuccess } = this.props;
  if (loading) {
   return;
  }
 
  FB.getLoginStatus((resp) => {
   console.log('FB:status:', resp.status);
    const params = {
     provider: 'facebook'
    };
  
   if (resp.status === 'connected') {
    params.uid = resp.authResponse.accessToken;
// Send data to back end
    onSuccess(params);
    return;
   }
 
   FB.login((response) => {
    console.log('FB:status:', response.status);
    if (response.authResponse) {
     params.uid = resp.authResponse.accessToken;
     onSuccess(params);
    }
   }, { scope: 'email' });
  });
 }
 
 render() {
  return (
   <button
    type="button"
    className="btn facebook"
    onClick={this.handleClick} >
    <i className="icon-facebook" />
   </button>
  );
 }
}