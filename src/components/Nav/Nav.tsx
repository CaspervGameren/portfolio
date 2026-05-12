//TODO Add hover effects and mobile friendly design for nav

export default function Nav() {
    return (
        <nav class="grid bg-amber-200">
            <ul class="flex justify-between w-100 justify-self-center py-5">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    );
}