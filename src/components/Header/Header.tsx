export default function Header() {
    return (
        <header class="flex flex-col gap-12 text-center items-center h-auto lg:gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:h-[60dvh]">
            <h1 class="text-3xl py-8 lg:col-span-3 lg:justify-self-center lg:self-center">
                Hey there, I am Casper!
            </h1>
            <div class="order-3 lg:order-0 lg:col-span-1 lg:justify-self-center lg:self-center xl:justify-self-end">
                <h2 class="text-2xl">Welcome to my portfolio!</h2>
                <p class="max-w-80 text-lg">
                    It is here I will tell you about myself,
                    my journey to becoming a Software Developer, and more!
                </p>
            </div>
            <figure class="order-2 lg:order-0 lg:col-span-1 lg:row-span-2 lg:self-end">
                <img class="mx-auto max-h-[40dvh]" src="/assets/images/power-pose.png" alt="..." />
            </figure>
            <div class="order-4 lg:order-0 lg:col-span-1 lg:justify-self-center lg:self-center xl:justify-self-start">
                <h2 class="text-2xl">Feel free to look around!</h2>
                <p class="max-w-80 text-lg">
                    Do not forget to check out all of the amazing projects I have built on my journey to becoming a Developer!
                </p>
            </div>
        </header>
    );
}