import { AbstractControl } from "@angular/forms";

export function MohithMail(control:AbstractControl){
    
    if (control.value.includes('@mohithit.com')) {
        return null;
    } else {
        return{'mohithMail':'please use Mohith Mail only'}
    }
}