export default function AboutMe({name, age, location, description}) {
    return (
        <section>
            <h2>A little bit about me first:</h2>
            <p>My name is: {name}</p>
            <p>{age}</p>
            <p>{location}</p>
            <p>{description}</p>
        </section>
    );
}