import Header from "./components/Header";
import "./App.css";
import Aboutpage from "./components/pages/Aboutpage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/shared/FeedbackStats";
import Feedbackform from "./components/Feedbackform";
import Aboutlink from "./components/shared/Aboutlink";
import { FeedbackProvider } from "./components/Feedbackcontext/Feedbackcontext";

function App() {
  
  

  return (
  
     <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />
        <Routes>
          <Route exact path="/about" Component={Aboutpage} /> 
          <Route exact path="/" element= {<>
          <Feedbackform  />          
          <FeedbackStats  />
         <Feedbacklist   />
         </>
          }
          />
          
          </Routes>
          <Aboutlink/>
      </Router>
      </FeedbackProvider>
      
      
  );
}

export default App;
