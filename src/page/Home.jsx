import Layout from "../Componnent/Layout";
import Banner from "../Componnent/Banner";
import Counter from "../Componnent/Counter";
import AboutWeb from "../Componnent/AboutWeb";
import AllSubject from "../Componnent/FourcoreSubject/AllSubject";
import InvestToday from "../Componnent/InvestToday";

export default function Home() {
  return (
   <Layout>
  
    <Banner />
    <Counter/>
    <AboutWeb/>
    <AllSubject/>
    <InvestToday/>
  
   </Layout>
  )
}
