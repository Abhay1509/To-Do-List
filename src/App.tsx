import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function App() {
  const {
    data: todoList,
    isLoading,
    isError,
  }: { data: any; isLoading: Boolean; isError: Boolean } = useQuery({
    queryKey: ["todoListItems"],
    queryFn: () => axios.get("https://jsonplaceholder.typicode.com/todos/"),
  });
  

  if (!isLoading || !isError) console.log(todoList?.data);
  return (
    <>
      {isLoading && <>Loading</>}
      {isError && <>Error</>}
      {!isLoading && !isError && (
        <ol>
          {todoList?.data.map((obj: any, idx: any) => {
            return (
              <li key={idx}>
                {`userId=${obj.userId}`}
                <br />
                {`To-Do Id=${obj.id}`}
                <br />
                {`Title=${obj.title}`}
                <br />
                
                {obj.completed? "completed yes" : "completed no"}
                
                <br />
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
}
