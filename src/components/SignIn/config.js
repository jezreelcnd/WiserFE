/* Client Id for Linkedin */
export const clienID = '86m13p23ezn5bi';

/* Secret Key for Linkedin */
export const secretKey = 'nsGe8KIyHdf46EbD';

/* Gets host name from the url */
const urlHost = window.location.host;

/* Callback url for Linkedin */
export const callBackUrl = `http://${urlHost}/signinlinkedin`;

/* Backend route for getting Linkedin Access Token */
export const accessTokenRoute = `https://www.linkedin.com/uas/oauth2/accessToken`;

/* Backend route for getting Linkedin User Details */
//export const userDetailsRoute = `http://${urlHost}/linkedinuserdetails`;
export const userDetailsRoute = `http://localhost:8000/profile_admin/asociateUser/`;