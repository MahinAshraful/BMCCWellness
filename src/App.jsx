import Bar from "./Bar";
import './App.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Chatbot from "./Chatbot";
import RCard from "./RCard";
import Contact from "./Contact";

function App() {
  const [text] = useTypewriter({
    words: ['Supported', 'Resilient', 'Understood', 'Heard'],
    loop: {},
  })


  return (
    <>
    <div className="flex">
      <Bar />

      <div className="flex flex-col items-center justify-center flex-1 mt-64 mb-64 text-4xl">
        <h1 className="font-bold text-black customsz">Feel <br />
        <br />
        <br />
        <br />
        <br />
          <span>
            {text}
          </span>
          <Cursor></Cursor>
        </h1>
      </div>
<br />

    </div>
<br />
<div className="mt-64">
  <h1 className="text-4xl font-bold text-black " id="about">What is BMCC Wellness</h1>
  <p className="mt-5 mb-5 text-l" >
    <br />
      BMCC Wellness is more than just a program; it's a comprehensive support system designed to prioritize the mental and emotional well-being of every individual within the BMCC community. At its core, BMCC Wellness embodies a commitment to fostering a nurturing environment where students and staff alike can thrive not only academically but also personally.
    
      One of the pioneering features of BMCC Wellness is CALVIN, an AI bot that goes beyond mere technology; it represents a beacon of compassionate counseling and adaptive assistance. CALVIN stands for Compassionate Counseling, Adaptive Assistance, Listening Support, Virtual Therapy, Interactive Guidance, and Nurturing. It's not just an acronym; it's a testament to our dedication to utilizing cutting-edge technology in the service of human connection and support. CALVIN provides a confidential space for individuals to express themselves, seek guidance, and receive virtual therapy sessions tailored to their specific needs and concerns.
    
      In addition to CALVIN, BMCC Wellness offers a plethora of resources aimed at promoting mental and emotional well-being. From workshops and seminars focusing on stress management and resilience-building to support groups and peer counseling initiatives, there are numerous avenues through which individuals can access the support they need. Furthermore, our team of dedicated counselors and mental health professionals is always on hand to provide personalized assistance and guidance to anyone seeking help.
    
      But BMCC Wellness isn't just about providing resources; it's about fostering a culture of care and support that permeates every aspect of campus life. Through initiatives such as mental health awareness campaigns, community-building events, and partnerships with local organizations, we strive to create an environment where everyone feels seen, heard, and supported on their journey toward holistic well-being.
    
      In essence, BMCC Wellness is more than a program; it's a philosophy—a belief in the power of compassion, empathy, and community to transform lives for the better. Whether you're struggling with academic pressures, personal challenges, or simply seeking a space to connect with others, BMCC Wellness is here to accompany you every step of the way. Together, we can cultivate a culture of wellness that uplifts and empowers everyone within the BMCC community.
    
      Join us as we embark on a mission to redefine mental health support at BMCC. Together, with CALVIN and BMCC Wellness by your side, you can embrace healing, resilience, and academic success.
    <br />
  </p>
</div>


<div className="topspace">
  <h1 className="text-4xl font-bold text-black mb-7 " id="CALVIN">CALVIN</h1>
</div>


<div>
  <Chatbot></Chatbot>
</div>

<div className="mb-32 topspace1">
  <h1 className="text-4xl font-bold text-black mb-7 " id="Resources">Resources</h1>
</div>

<div className="">
  <RCard></RCard>
</div>


<div className="mb-32 topspace1">
  <h1 className="text-4xl font-bold text-black mb-7 " id="Contact">Contact</h1>
</div>

<div>
  <Contact></Contact>
</div>

    </>
  );
}

export default App;
