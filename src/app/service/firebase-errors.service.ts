import { Injectable } from '@angular/core';
import { FirebaseErrorsEnum } from '../common/firebase-errors';

@Injectable({
  providedIn: 'root',
})
export class FirebaseCodeErrorService {
  constructor() {}

  codeError(code: string) {
    switch (code) {
      // El correo ya existe
      case FirebaseErrorsEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

      // Contraseña debil
      case FirebaseErrorsEnum.WeakPassword:
        return 'La contraseña es muy debil';

      // Correo invalido
      case FirebaseErrorsEnum.InvalidEmail:
        return 'Correo invalido';

      // Contraseña incorrecta
      case FirebaseErrorsEnum.WrongPassword:
        return 'Contraseña incorrecta';

      // El usuario no existe
      case FirebaseErrorsEnum.UserNotFound:
        return 'El usuario no existe'; 
      default:
        return 'Error desconocido';
    }
  }
}
