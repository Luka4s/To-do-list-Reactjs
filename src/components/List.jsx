import { useState } from "react";
import style from "./List.module.css";
import { Post } from "./Post";

export function List() {
  const [publishTask, setpublishTask] = useState([]);

  const [NewTaskPost, setNewTaskPost] = useState("");

  function handleUserClick() {
    event.preventDefault();
    setpublishTask([...publishTask, NewTaskPost]);
    setNewTaskPost("");
    console.log(publishTask);
  }

  function handleNewCommentChange() {
    setNewTaskPost(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const deleteTask = publishTask.filter((comment) => {
      return comment !== commentToDelete;
    });
    setpublishTask(deleteTask);
  }

  return (
    <div className={style.containerList}>
      <div>
        <div className={style.containerInput}>
          <form onSubmit={handleUserClick}>
            <textarea
              name="NewTask"
              value={NewTaskPost}
              onChange={handleNewCommentChange}
              placeholder="Digite sua nova tarefa !"
              className={style.textarea}
            />
            <button className={style.buttonInput}>Criar</button>
          </form>
        </div>
      </div>

      <div className={style.InfoTask}>
        <div className={style.created}>
          <span className={style.createdtasks}>
            Tarefas criadas{" "}
            <div className={style.counterLeft}>{publishTask.length}</div>
          </span>
        </div>

        <div className={style.created}>
          <span className={style.Concluidas}>
            Concluídas
            <div className={style.counterRight}>
              {/*  {publishTask.filter((item) => {
                return (
                  if(item == false){
                    
                  }
                )
              })} */}
            </div>
          </span>
        </div>
      </div>
      {/* Container de quando a lista estiver vazia  */}
      <div className={style.ListItens}>
        <div>
          <span className={style.strongsubtitle}>
            Você ainda não tem tarefas cadastradas
          </span>
          <span className={style.subtitle}>
            Crie tarefas e organize seus itens a fazer
          </span>
        </div>
      </div>
      {publishTask.map((comment, conclusion, estado) => {
        console.log(publishTask);
        return (
          <Post
            content={comment}
            conclusion={conclusion}
            onDeleteComment={deleteComment}
          />
        );
      })}
    </div>
  );
}
