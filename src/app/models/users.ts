export interface Users {
  id: string;
  // username:string,
  // password:string,
  firstname: string;
  lastname: string;
  university: {
    name: string;
    faculty: string;
    major: string;
  };
  email: string;
  phone: string;
}
