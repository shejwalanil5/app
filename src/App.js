import Task from "./Task.js"
import './App.css'
import About from "./About.js"
import Creator from "./Creator.js"
import CommentBox from "./CommentBox.js"
import Footer from "./Footer.js"
import Footer2 from "./Footer2.js"


function App() {
  
  return (
    <>
      <div className="container">
        <Task/>
        <About/>
        <Creator/>
        <CommentBox/>
        <Footer/>
        <Footer2/>
      </div>
    </>
  )
}

export default App
