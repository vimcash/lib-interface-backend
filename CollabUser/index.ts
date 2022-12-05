/**
 * This is a simple company interface
 */
import CompanyUser from "../CompanyUser"

export interface CollabUser extends CompanyUser{
    userCode: string;
    collabStatus: boolean
}

export default CollabUser;