import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import SalesCard from './components/SalesCard';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />

      <main>
        <section id="sales">
          <div className="dsmetaContainer">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
