import style from "./Post.module.css";

export function Post({ content, conclusion, state = false, onDeleteComment }) {
  function handleDeleteComment() {
    console.log("deletar");

    onDeleteComment(content);
  }
  return (
    <div className={style.mainPost}>
      <div className={style.Content}>
        <div className={style.informationTask}>
          <label className={style.radioLabel}>
            <input className={style.radio} state={state} type="radio" />
          </label>
          <span className={style.contentInput}>{content}</span>
        </div>
        <button onClick={handleDeleteComment} className={style.deleteButton}>
          Deletar
        </button>
      </div>
    </div>
  );
}
