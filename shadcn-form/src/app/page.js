import SubsUser from '@/components/subsUser';
import SubscriptionForm from '@/components/subscriptionForm';
import DialogDemo from '@/components/dialog';

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around p-4">
        <SubscriptionForm />
        <SubsUser />
      </div>
      <DialogDemo />
    </>
  );
}
