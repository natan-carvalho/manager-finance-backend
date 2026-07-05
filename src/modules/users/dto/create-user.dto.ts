export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  emailVerified: boolean;
  status: "ACTIVE" | "INACTIVE" | "PENDING" | "BLOCKED";
}
