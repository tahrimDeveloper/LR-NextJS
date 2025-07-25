import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Divide } from 'lucide-react';
import { getSubscribers } from '@/queries';

async function subsUser() {
  const subscribers = await getSubscribers();
  console.log(subscribers);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Subscription Added</CardTitle>
          <CardDescription>Please check your email</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <div className="flex flex-col justify-center items-center my-4">
          {subscribers.map(sub => {
            <Card key={sub.id} className="my-2">
              <CardContent>
                <p className="my-2">Wow! ${sub.name} Subscribed</p>
                <p>
                  Subscribed on:{' '}
                  {new Intl.DateTimeFormat('en-us').format(sub.createdAt)}
                </p>
              </CardContent>
            </Card>;
          })}
        </div>
        <CardFooter>
          <p>Last Subscription at: {new Date().toTimeString()}</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default subsUser;
