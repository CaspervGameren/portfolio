import { For } from "solid-js";
import { journeyItem } from "../../../data/journey";
import JourneyCard from "./JourneyCard";

export default function Journey() {
    return (
        <section>
            <h2>My journey</h2>
            <For each={journeyItem}>
                {(journey) => (
                    <JourneyCard {...journey}/>
                )}
            </For>
        </section>
    );
}