import { postAPI } from "@/apiServices";
import { roleDataTypes } from "@/types/apptypes/appDataTypes";

export function configRoleAPI(data: { role: roleDataTypes; userName: string }) {
  return postAPI("user/config/role", data);
}
