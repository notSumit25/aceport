import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, message } = req.body;
        console.log(firstName, lastName, email, message);

        res.status(200).json({ message: 'Data received successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
