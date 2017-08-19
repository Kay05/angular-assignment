import {User} from './user';

export class Employee {
  age: number;
  id_number: number;
  user: User;
  birth_date: string;
  email: string;
  personal_email: string;
  leave_remaining: number;
  is_foreigner: boolean;
  is_employed: boolean;
  days_to_birthday: number;
  gender: string;
  next_review: string;
  physical_address: string;
  start_date: string;
  end_date: string;
  tax_number: number;
  visa_document: object;
  id_document: object;
  github_user: string;
  phone_number: string;
  race: string;
  years_worked: string;
  position: object;
  employee_next_of_kin: object[];
  employee_review: object[];
}
