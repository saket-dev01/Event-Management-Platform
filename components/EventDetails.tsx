import React from 'react';

interface EventDetailsProps {
    name?: string;
    date?: string;
    location?: string;
    price?: string;
    imageUrl?: string;
    description?: string;
    organizer?: string;
}

export default function EventDetails({
    name,
    date,
    location,
    price,
    imageUrl = '/placeholder.svg',
    description = 'No description available.',
    organizer,
}: EventDetailsProps) {
    return (
        <div className="w-full max-w-2xl">
            <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>
                <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
                    <img src={imageUrl} alt="Event Image" className="rounded-lg object-cover aspect-square" />
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 text-gray-500">
                                <CalendarIcon className="w-5 h-5" />
                                <span>{date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <LocateIcon className="w-5 h-5" />
                                <span>{location}</span>
                            </div>
                        </div>
                        <div className="prose">
                            <p>{description}</p>
                        </div>
                        <div className="grid sm:grid-cols-[1fr_auto] gap-4">
                            <div className="flex items-center gap-2 text-gray-500">
                                <DollarSignIcon className="w-5 h-5" />
                                <span>{price}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <UserIcon className="w-5 h-5" />
                                <span>Organized by {organizer}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <button
                        type="button"
                        className="bg-blue-500 text-white rounded-md px-4 py-2 w-full font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        RSVP
                    </button>
                </div>
            </div>
        </div>
    );
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


function DollarSignIcon(props: any) {
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
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    )
}


function LocateIcon(props: any) {
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
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}


function UserIcon(props: any) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}