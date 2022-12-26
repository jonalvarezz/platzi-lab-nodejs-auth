import { hash } from "bcrypt";

export const HashPassword = async (password) => {
  try {
    const hashed = await hash(password, 10)
    return [hashed, null]
  } catch (error) {
    return [null, error]
  }
}