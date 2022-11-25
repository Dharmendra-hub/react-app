import './App.css';
import PostsLists from './features/PostsLists';
import AddPostForm from './features/AddPostForm';

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsLists />
    </main>
  );
}

export default App;
