import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await axios.get('https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json');
        res.status(200).json(response.data);
    } catch (error: any) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
};

export default handler;
