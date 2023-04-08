import { h } from '../helpers/methods/h.method';
export class AuthRegistrationPage {
  get Page() {
    return h(`
            <div class="w-full h-[100vh] bg-cyan-500 flex flex-col items-center">
                <div class="w-full h-[80px] flex justify-between items-center px-5">
                    <div class="max-w-[300px]">
                        <a href="/">
                            <h1 class="text-white text-[1.8rem] text-center">Messenger</h1>
                        </a>
                    </div>
                    <div class="flex gap-5 justify-around items-center">
                        <a href="/auth/login">Sign In</a>
                        <a href="/auth/registration">Sign Up</a>
                        <a href="/messenger">Get Started</a> 
                    </div>
                </div>
                
                <div class="max-w-[380px]">
                    <form action="" class="flex flex-col gap-10">
                        <input type="text" placeholder="Имя">
                        <input type="text" placeholder="Фамилия">
                        <input type="text" placeholder="Емайл">
                        <input type="password" placeholder="Пароль">
                        <input type="password" placeholder="Подтверждение пароля">
                    </form>
                </div>
            </div>
        `);
  }
}
