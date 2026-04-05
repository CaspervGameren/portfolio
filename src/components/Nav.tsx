export default function Nav() {
    return (
        <nav class="grid w-full">
            <ul class="flex mx-auto justify-around [&>li]:hover:scale-110 [&>li]:hover:-translate-y-1 [&>li]:transition [&>li]:duration-300">
                <li class="px-5 cursor-pointer"><a href=""></a>Home</li>
                <li class="px-5 cursor-pointer">About me</li>
                <li class="px-5 cursor-pointer"><a href="#skills">Skills</a></li>
            </ul>
        </nav>
    )
}