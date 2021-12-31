import { NextApiRequest, NextApiResponse } from 'next'
import firestore from 'lib/firestore'
import { doc, getDoc } from '@firebase/firestore/lite'

export default async function getPreviousProjects(req: NextApiRequest, res: NextApiResponse) {
  const docRef = doc(firestore, 'src/projects')
  const docSnap = await getDoc(docRef);
  const data = docSnap.data().previous
  res.status(200).json({ data })
}