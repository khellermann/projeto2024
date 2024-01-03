import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css";

export function App() {
  return (
    <div>

    <Header/>

      <Post
        author="Khellermann Machado"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet repudiandae at asperiores? Porro, consequatur sed? Inventore maiores rerum perferendis quos alias sunt, neque nobis aspernatur optio explicabo quia nihil eius."
      />
      <Post
        author="Khauê Lemos Machado"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet repudiandae at asperiores? Porro, consequatur sed? Inventore maiores rerum perferendis quos alias sunt, neque nobis aspernatur optio explicabo quia nihil eius."
      />
    </div>
  );
}
