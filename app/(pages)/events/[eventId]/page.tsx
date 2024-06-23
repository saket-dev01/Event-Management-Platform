import { getEvent } from '@/app/lib/actions/getEvent';
import EventDetails from '@/components/EventDetails';

export default async function Page({ params }: { params: { eventId: string } }) {
  const event = await getEvent(params.eventId);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <EventDetails
        name={event?.name ?? ''}
        date={event?.date ? event.date.toISOString().split('T')[0] : ''}
        location={event?.location ?? ''}
        price={event?.price ? `${event.price.toFixed(2)}` : ''}
        imageUrl={event?.image ?? '/placeholder.svg'}
        description={event?.description ?? 'No description available.'}
        organizer={event?.user?.name ?? ''}
      />
    </div>
  );
}
