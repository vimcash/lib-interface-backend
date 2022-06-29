/**
 * This is a simple User interface
 */

import SimpleUser from "../SimpleUser";

 export interface TradicionalUser extends SimpleUser {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email?: string;
}

export default TradicionalUser;