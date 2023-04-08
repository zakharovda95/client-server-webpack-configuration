import { h } from '../helpers/methods/h.method';
export class MainPage {
  get Page() {
    return h(`
            <div class="w-full h-[100vh] bg-cyan-500">
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
                
                <div class="flex w-full h-[calc(100vh-80px)] gap-5 justify-center items-center">
                     <div class="flex flex-col justify-center items-center text-center">
                        <h1 class="2xl:text-[18rem] xl:text-[16rem] lg:text-[12rem] md:text-[9rem] text-[5rem] text-white">Messenger</h1>
                        <p class="text-[1.5rem]">Simple chat for everyone!</p>
                        <a href="/messenger">
                            <button class="h-[50px] bg-cyan-800 rounded-3xl text-white mt-10 w-[280px] h-[50px]">Get Started</button> 
                        </a>
                     </div>
                </div>
            </div>
        `);
  }
}
