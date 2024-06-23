import Link from "next/link"
import EventCard from "@/components/EventCard"
import { getAllEvents } from "@/app/lib/actions/getAllEvents"
export default async function Page() {
    const events = await getAllEvents();
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h1>
                <p className="mt-4 text-lg text-gray-500">Check out our upcoming events and join us for an exciting time.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {events.map(event => (
                    <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <EventCard
                            id={event.id}
                            name={event.name}
                            date={new Date(event.date).toLocaleDateString()}
                            location={event.location}
                            image={event.image || "https://picsum.photos/200"}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <button >
                    View More Events
                </button>
            </div>
        </div>
    )
}

