import Post from "../../../database/models/Post";
import { INTERNAL_SERVER_ERROR, OK } from "../../../utils/http-status-codes";

// POST posts Handler
const createPostHandler = async (req, res) => {
    try {
        const { author_name, slug } = req.body;
        const post = await Post.create({ author_name, slug });
        return res.status(OK).json({ data: post });
    } catch (e) {
        console.log(e);
        return res
            .status(INTERNAL_SERVER_ERROR)
            .json({ message: "Internal Server Error" });
    }
};

// Main Request Handler
export default async function handler(req, res) {
    try {
        // Handle Request
        switch (req.method) {
            case "GET":
                break;
            case "POST":
                return createPostHandler(req, res);
            case "DELETE":
                break;
            // return await deleteComment(req, res);
            default:
                return res.status(200).json({ message: "Invalid method." });
        }
    } catch (e) {
        // Handle Error
        console.log(e.message);
    } finally {
    }
}
