
import { ILoginDTO } from '../types/ILoginDTO';

/**
 * Signs in the user.
 * @param loginDto - The login data transfer object.
 */
export async function signIn(loginDto: ILoginDTO) {
  console.log(loginDto);
}

/**
 * Clears the user data by removing the token from the store and dispatching a LoggedOut action.
 * @returns {Promise<void>} A promise that resolves once the user data is cleared.
 */
export async function clearUser() {

  // Store.dispatch(LoggedOut());
}

/**
 * Signs out the user by clearing user data.
 */
export function signOut() {
  clearUser();
}
