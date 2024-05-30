import { INTERNAL_SERVER_ERROR, OK } from "../../../utils/http-status-codes";
import Comment from "../../../database/models/Comment";
import User from "../../../database/models/User";
import axios from 'axios';

const authenticate = (username, password) => {
  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
};

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
        new: true, // for latest comment
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
    if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
      try {
        await axios({
          method: "POST",
          url: process.env.MO_ENDPOINTS_TESTING,
          data: {
            firstName: name,
            email,
            ccEmail: "doc-team@xecurify.com",
            phone: "",
            query: `<b>New comment is posted on blog</b><br>${post_slug}<br><b>Comment Content:</b><br>${content}<br><button>
            <a href="http://miniorange.com/blog/commentApproval/${postedComment.dataValues.id}/${process.env.ADMIN_USERNAME}/${process.env.ADMIN_PASSWORD}">Approve Comment</a></button>`,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }

    return res.status(OK).json(postedComment);
  } catch (e) {
    console.log(e.message);
        return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
}
// update comments handler ( for comment approval )
const updateCommentHandler = async (req, res) => {
  const { pid } = req.query;
  const { username, password } = req.body;
  const commentId = pid;
  try {
    if (authenticate(username, password)) {
      const comment = await Comment.update(
        {
          is_approved: true,
        },
        { where: { id: commentId } }
      );
      return res.status(OK).json({ message: "Comment approved !" });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Admin Credentials" });
    }
  } catch (err) {
    console.log(err);
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
        return getCommentsHandler(req, res);
      case "POST":
        return postCommentHandler(req, res);
      case "PUT":
        return updateCommentHandler(req, res);
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
