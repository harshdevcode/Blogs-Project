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
            return res.status(OK).json({ success: true, data: post });
        } else {
            return res.status(OK).json({ success: false, message: 'Invalid Admin Credentials' });
        }
    } catch (e) {
        console.log(e);
        return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
};

// Main Request Handler
export default async function handler(req, res) {
    console.log('Recieved Request at Posts');
    try {
        // Handle Request
        switch (req.method) {
            case 'GET':
                break;
            case 'POST':
                return createPostHandler(req, res);
            case 'DELETE':
                break;
            // return await deleteComment(req, res);
            default:
                return res.status(200).json({ message: 'Invalid method.' });
        }
    } catch (e) {
        // Handle Error
        console.log(e.message);
    } finally {
    }
}
