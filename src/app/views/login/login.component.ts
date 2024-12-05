import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PATH } from '@constants/routes';
import { ButtonComponent, InputSearchComponent, InputTextComponent } from '@shared/components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputSearchComponent,
    InputTextComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // private _service = inject(SessionService);
  #router = inject(Router);
  form: FormGroup;

  public loading = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    // this._service.clearSession()
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.loading) {
      return
    }

    if (this.form.valid) {
      this.loading = true;
      const { email, password } = this.form.value;
      console.log(this.form.value);

      // this._service.login({ email, password }).subscribe({
      //   next: (res) => {
      //     if (!res.error && res.data && res.data.token) {
      //       this._service.saveSession(res.data.token);
      //       this.#router.navigate([PATH.PROVIDERS]);
      //     }
      //   },
      //   error: (err) => {
      //     console.log(err);
      //   },
      //   complete: () => {
      //     this.loading = false;
      //   },
      // });
    }
  }
}
