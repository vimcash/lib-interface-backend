/**
 * This is a simple User interface
 */

import SimpleUser from "../SimpleUser";

 export interface TradicionalUser extends SimpleUser {
    firstName: String;
    lastName: String;
    phoneNumber?: String;
    email?: String;
}

export default TradicionalUser;