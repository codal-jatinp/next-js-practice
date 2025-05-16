import db from './db';

export async function getTrainings() {
  return await db.trainings.findMany({});
}
