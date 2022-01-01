import { NextApiRequest, NextApiResponse } from 'next'
import firestore from 'lib/firestore'
import { doc, getDoc } from '@firebase/firestore/lite'

export default async function getTimeline(req: NextApiRequest, res: NextApiResponse) {
  const docRef = doc(firestore, 'src/about')
  const docSnap = await getDoc(docRef);
  const data = docSnap.data().timeline
  res.status(200).json({ data })
}