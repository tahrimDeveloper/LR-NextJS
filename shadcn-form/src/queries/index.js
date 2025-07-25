import { Subscriber } from '@/models/subs-model';
import { replaceMongoIdInArray } from '@/lib/idTransform';

export async function getSubscribers() {
  try {
    const subscribers = await Subscriber.find({}).lean();
    return replaceMongoIdInArray(subscribers);
  } catch (e) {
    throw new Error(e.message);
  }
}
