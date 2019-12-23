import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm = new FormGroup({
        userName: new FormControl(''),
        password: new FormControl('')
    });

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.loginForm.value);
        // Send credentials to JWT-Auth endpoint with appropriate headers
        // If response successful, save token to local storage and redirect to route
        // else show user error message and allow retry
    }
}
