import { h } from '../helpers/methods/h.method';
export class MessengerPage {
  get Page() {
    return h(`
            <div class="w-full h-[100vh] bg-cyan-500">
                <div class="w-full h-[80px] flex justify-between items-center px-5">
                    <div class="max-w-[300px]">
                        <h1 class="color-white text-[1.8rem] text-center font-puppy" style="font-family: Puppy, sans-serif">Messenger</h1>
                    </div>
                    <div class="flex gap-5 justify-around items-center">
                        <a href="/auth/login">Sign In</a>
                        <a href="/auth/registration">Sign Up</a>
                        <a href="/messenger">Get Started</a> 
                    </div>
                </div>
                
                <div>
                    <form action="">
                        <textarea placeholder="Введите ваше сообщение">
                    </form>
                </div>
            </div>
        `);
  }
}
