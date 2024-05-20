import"bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCount from "./components/displaycounter";
import Container from "./components/container";
import Controls from "./components/controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/privacymessage";
function App() {
  const privacy=useSelector((store)=>store.privacy);

  return (
    <>
 <center className="px-4 py-5 my-5 text-center">
  <Container>
<Header></Header>
<div className="col-lg-6 mx-auto">
{privacy ?<PrivacyMessage></PrivacyMessage> :<DisplayCount></DisplayCount>}
<Controls></Controls>
</div>
</Container>
</center>
    </>

  )
}

export default App;
