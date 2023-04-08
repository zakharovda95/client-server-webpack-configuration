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
                
                <div>
                
                </div>
                
                <div class="max-w-[380px] h-[calc(100vh-80px)] flex flex-col justify-center items-center w-[90%] p-[5%]">
                    <h3 class="mb-5 text-[1.3rem]">Регистрация</h3>
                    <form action="" class="flex flex-col gap-10 w-full">
                        <input class="h-[50px] p-5 rounded outline-0" type="text" placeholder="Имя">
                        <input type="text" class="h-[50px] p-5 rounded outline-0" placeholder="Фамилия">
                        <input type="text" class="h-[50px] p-5 rounded outline-0" placeholder="Емайл">
                        <input type="password" class="h-[50px] p-5 rounded outline-0" placeholder="Пароль">
                        <input type="password" class="h-[50px] p-5 rounded outline-0" placeholder="Подтверждение пароля">
                        <button class="h-[50px] bg-cyan-800 rounded-3xl text-white">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        `);
  }
}
