import Post from '../../../database/models/Post';
import { INTERNAL_SERVER_ERROR, OK } from '../../../utils/http-status-codes';

const authenticate = (username, password) => {
    return username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD;
};

// POST posts Handler
const createPostHandler = async (req, res) => {
    try {
        const { username, password, author_name, slug } = req.body;
        if (authenticate(username, password)) {
            const post = await Post.create({ author_name, slug });
            return res.status(200).json({ success: true, data: post });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid Admin Credentials' });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error", error: e });
    }
};

// Main Request Handler
export default function handler(req, res) {
    console.log('Recieved Request at Posts');
    try {
        // Handle Request
        switch (req.method) {
            case 'GET':
                return res.status(405).json({ message: 'Invalid method.' });
            case 'OPTIONS':
                return res.status(200).json({});
            case 'POST':
                return createPostHandler(req, res);
            case 'DELETE':
                return res.status(405).json({ message: 'Invalid method.' });
            // return await deleteComment(req, res);
            default:
                return res.status(405).json({ message: 'Invalid method.' });
        }
    } catch (e) {
        // Handle Error
        console.log(e.message);
    } finally {
    }
}
