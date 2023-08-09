import { INTERNAL_SERVER_ERROR, OK } from '../../../utils/http-status-codes';
import Comment from '../../../database/models/Comment';
import User from '../../../database/models/User';
import axios from 'axios';
import { MO_ENDPOINTS, MO_ENDPOINTS_TESTING } from 'utils/endpoints';

// Handler Functions
// GET comments Handler
const getCommentsHandler = async (req, res) => {
    try {
        const { pid } = req.query;
        const comments = await Comment.findAll({ where: { post_id: pid } });
        return res.status(OK).json(comments);
    } catch (e) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
};

// POST comments Handler
const postCommentHandler = async (req, res) => {
    try {
        const { name, email, content, post_slug } = req.body;
        const { pid } = req.query;

        const user = await User.findOne({ where: { email: email } });

        let postedComment = null;

        if (user) {
            // User Already Registered as Guest
            postedComment = await Comment.create({
                user_id: user.id,
                post_id: pid,
                content,
                post_slug,
            });
        } else {
            // User Does not Exists
            // Create New User
            const guest = await User.create({
                name,
                email,
            });
            postedComment = await Comment.create({
                user_id: guest.id,
                post_id: pid,
                content,
                post_slug,
            });
        }
        // Send main about new comment
        if (process.env.NODE_ENV === 'production') {
            await axios({
                method: 'POST',
                url: MO_ENDPOINTS_TESTING.CONTACT_US,
                data: {
                    email,
                    ccEmail: 'marketing@xecurify.com',
                    phone: '',
                    query: `New comment is posted on blog<br>${post_slug}<br>Comment Content<br>${content}<br>`,
                },
            });
        }

        return res.status(OK).json(postedComment);
    } catch (e) {
        console.log(e.message);
        return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
};

// Main Request Handler
export default async function handler(req, res) {
    try {
        // Handle Request
        switch (req.method) {
            case 'GET':
                return getCommentsHandler(req, res);
            case 'POST':
                return postCommentHandler(req, res);
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
