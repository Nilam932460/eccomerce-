import { AbstractControl, ValidationErrors , ValidatorFn } from "@angular/forms";


// what we do in this validator is we check if the name control has the value "admin"
// if it does we return an error object with the key forbiddenWords and the value of the name control
// if it does not we return null indicating that the control is valid
// This validator can be used to prevent certain words from being used in a form control, such as "admin".
// This is useful for preventing unauthorized access or actions in an application.
export function forbiddenWordsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const name = control.value ;

    if(name === "admin") {
      return { forbiddenWords: { name } };
    }
    return null;
  };
}

