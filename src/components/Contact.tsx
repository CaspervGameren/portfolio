export default function Contact() {
    return (
        <section class="contact">
            <form action="" method="post">
                <fieldset>
                    <legend>Personal information</legend>
                    <label for="name">Your name:</label>
                    <input type="text" id="name" name="name" placeholder="John Doe.." />

                    <label for="email">Email address:</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com.." />
                </fieldset>

            </form>
        </section>
    );
}