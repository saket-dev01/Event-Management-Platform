import Link from "next/link"

export default function EventCard({ id, name, date, location, image }: {
    id: string
    name: string
    date: string
    location: string
    image: string
}) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt="Event 1" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                <div className="flex items-center mb-4 text-gray-500">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    <span>{date}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-500">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center mb-4 text-gray-500">
                    <MapPinIcon className="w-5 h-5 mr-2" />
                    <span>{location}</span>
                </div>
                <Link
                    href={`/events/${id}`}
                    className="inline-flex items-center px-4 py-2 bg-white hover:bg-black text-black font-semibold hover:text-white py-1.5 px-3 text-sm border border-black hover:border-transparent rounded"
                >
                    Learn More
                </Link>

            </div>
        </div>
    )
}

function CalendarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function ClockIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}

function MapPinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}