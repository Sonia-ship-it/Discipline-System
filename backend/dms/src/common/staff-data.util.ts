import { StaffRole } from '../generated';

const VALID_ROLES: string[] = ['ADMIN', 'DISCIPLINE', 'NURSE', 'LIBRARIAN'];

/** Fields allowed on Staff model — includes role for admin-created accounts */
export function toStaffCreateData(data: Record<string, unknown>) {
  const { firstName, lastName, email, phoneNumber, password, role } = data;
  const out: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    role?: StaffRole;
  } = {
    firstName: String(firstName),
    lastName: String(lastName),
    email: String(email),
    phoneNumber: String(phoneNumber ?? ''),
    password: String(password),
  };
  if (role && VALID_ROLES.includes(String(role))) {
    out.role = String(role) as StaffRole;
  }
  return out;
}

export function toStaffUpdateData(data: Record<string, unknown>) {
  const out: Record<string, string> = {};
  if (data.firstName !== undefined) out.firstName = String(data.firstName);
  if (data.lastName !== undefined) out.lastName = String(data.lastName);
  if (data.email !== undefined) out.email = String(data.email);
  if (data.phoneNumber !== undefined) out.phoneNumber = String(data.phoneNumber);
  if (data.password !== undefined) out.password = String(data.password);
  return out;
}
