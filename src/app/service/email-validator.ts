import {FormControl} from '@angular/forms';


export class EmailValidator {

    isValidMailFormat(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true);
        }
        return (false)
    }

}