import { h } from '../helpers/methods/h.method';
export class MessengerPage {
  get Page() {
    return h(`
            <div class="w-full h-[100vh] bg-cyan-500 flex flex-col items-center justify-between">
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
                
                <div class="overflow-auto max-w-[800px]">
                    <ul>
                        <li class="bg-white p-5 m-5 rounded">
                            <div>
                                <p class="text-[0.9rem]">Имя Фамилия</p>
                                <p class="text-[0.7rem]">08.04.2023</p>
                                <p class="text-[0.8rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi asperiores autem beatae consequuntur cum cupiditate delectus earum eligendi enim expedita harum hic impedit, iste labore nam natus nesciunt obcaecati omnis optio perferendis perspiciatis qui quidem quos rem repellendus sapiente similique tempore totam velit. Aliquam labore molestiae quod tenetur veniam.</p>
                            </div>
                        </li>
                        <li class="bg-white p-5 m-5 rounded">
                            <div>
                                <p class="text-[0.9rem]">Имя Фамилия</p>
                                <p class="text-[0.7rem]">08.04.2023</p>
                                <p class="text-[0.8rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi asperiores autem beatae consequuntur cum cupiditate delectus earum eligendi enim expedita harum hic impedit, iste labore nam natus nesciunt obcaecati omnis optio perferendis perspiciatis qui quidem quos rem repellendus sapiente similique tempore totam velit. Aliquam labore molestiae quod tenetur veniam.</p>
                            </div>
                        </li>
                        <li class="bg-white p-5 m-5 rounded">
                            <div>
                                <p class="text-[0.9rem]">Имя Фамилия</p>
                                <p class="text-[0.7rem]">08.04.2023</p>
                                <p class="text-[0.8rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi asperiores autem beatae consequuntur cum cupiditate delectus earum eligendi enim expedita harum hic impedit, iste labore nam natus nesciunt obcaecati omnis optio perferendis perspiciatis qui quidem quos rem repellendus sapiente similique tempore totam velit. Aliquam labore molestiae quod tenetur veniam.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div class=" h-[320px] flex flex-col justify-center items-center w-[90%] max-w-[800px]">
                    <form action="" class="flex flex-col gap-10 w-full">
                        <textarea class="p-5 rounded outline-0 max-h-[150px]" placeholder="Enter the message!"></textarea>  
                        <button class="h-[50px] bg-cyan-800 rounded-3xl text-white">Отправить</button>
                    </form>
                </div>
            </div>
        `);
  }
}
