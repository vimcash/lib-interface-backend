/**
 * This is a simple User interface
 */

import SimpleUser from "../SimpleUser";

 export interface TraditionalUser extends SimpleUser {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email?: string;
}

export default TraditionalUser;