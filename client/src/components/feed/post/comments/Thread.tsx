import "./Thread.css";
import CommentReactionBar from "./CommentReactionBar";
import LikeCommentBar from "./LikeCommentBar";
import ThreadCollapser from "./ThreadCollapser";
import { IThread } from "./CommentSection";
import { useEffect, useState } from "react";

type ThreadProps = {
  comment: IThread;
};

function Thread(props: ThreadProps) {
  const [show, setShow] = useState(true);
  const [reactions, setReactions] = useState<string[][]>(
    props.comment.reactions
  );

  const toggleShow = () => {
    setShow(!show);
  };

  const updateReactions = (index: number) => {
    // TODO: if user has reacted to comment, remove reaction
    // else add reaction
    const newReactions = [...reactions];
    newReactions[index]
      ? newReactions[index].push("john")
      : (newReactions[index] = ["john"]);
    setReactions(newReactions);
    // update database
  };

  useEffect(() => {}, [reactions]);

  const nestedComments = (props.comment.children || []).map((comment) => {
    return <Thread comment={comment} />;
  });

  return (
    <div className="Thread" key={props.comment.commentNumber}>
      <div className="ProfilePicture"> </div>
      {show && <ThreadCollapser collapse={toggleShow} />}
      <div className="CommentHeader">
        <p className="CommentAuthor">{props.comment.author}</p>
        {/* <p className="CommentDate">{props.comment.commentTime}</p> */}
        <LikeCommentBar updateReactions={updateReactions} />
      </div>
      {show && (
        <div className="Comment">
          <p className="CommentBody">{props.comment.content}</p>
          <CommentReactionBar reactions={reactions} />
          {nestedComments}
        </div>
      )}
    </div>
  );
}

export default Thread;
