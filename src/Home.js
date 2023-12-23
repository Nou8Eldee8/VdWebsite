import { useNavigate } from "react-router-dom";
import wlogo from './wlogo.svg';

function Home(){
    return(
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
      <img src={wlogo} className="fixed top-4 h-40 self-center"/>
      <div className="text-center">
            

        <h1 className="text-4xl font-bold mb-8 text-white">I'm ...</h1>
        <div className="flex justify-center space-x-8">
          <ChoiceIcon title="an influencer" iconClass="fas fa-users" to="/influencer"/>
          <ChoiceIcon title="a business" iconClass="fas fa-building" to="/business"/>
        </div>
      </div>
      </div>
      );
      }

      
      
      const ChoiceIcon = ({ title, iconClass, to }) => {
        const navigate = useNavigate();
      
        const handleClick = () => {
          navigate(to);
        };
      
        return (
          <div className="hover:duration-700 hover:scale-110 bg-gradient-to-r from-neutral-50 to-stone-100 rounded-2xl justify-center">
            <button onClick={handleClick} className="hover:duration-700  flex flex-col items-center m-10 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              <i className={`text-5xl mb-2 ${iconClass}`}></i>
              <p className="text-lg font-semibold">{title}</p>
            </button>
          </div>
        );
      };
export default Home;