export default function JourneyCard({title, year, content} : {title: string, year: number, content: string}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}