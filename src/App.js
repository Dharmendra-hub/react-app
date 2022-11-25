import './App.css';
import PostsLists from './features/posts/PostsLists';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsLists />
    </main>
  );
}

export default App;
