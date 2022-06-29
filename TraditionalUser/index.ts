/**
 * This is a simple User interface
 */

import SimpleUser from "../SimpleUser";

 export interface TraditionalUser extends SimpleUser {
    firstName: String;
    lastName: String;
    phoneNumber?: String;
    email?: String;
}

export default TraditionalUser;