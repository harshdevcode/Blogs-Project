import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'

function CommentApproval() {
  const router = useRouter();
  useEffect(() => {
    const handleApproveComment = async () => {
      const params = router.query.slug;
      if (params) {
        const cid = params[0];
        const uname = params[1];
        const upassword = params[2];
        try {
          const approveComment = await axios({
            method: 'PUT',
            url: `/blog/api/comments/${cid}`,
            headers: {
              'Content-Type': 'application/json',
            },
            data:{
              username: uname,
              password: upassword
            }
          })
          window.alert("Comment Approved");
          window.close();
        }
        catch (err) {
          window.alert("Comment not found");
          window.close();
        }
      }

    
    }
    handleApproveComment();
  }, [router.query.slug])
  return (
    <div></div>
  )
}

export default CommentApproval