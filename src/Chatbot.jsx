import { useState } from "react";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea"


function Chatbot(){
    const[question, setQuestion] = useState("");
    const[answer, setAnswer] = useState("");
    

    async function generateAnswer(){
        const modQuestion = question + 'Reply to this as a person as a therapist dont say anything else but a response to this no bullet points or extra information i understand you are only a bot but just respond and respond with your name as Calvin. Answer this for BMCC students, here is some imnformation there are barbershop talks where people can go to talk to someone, tehere is a counceling office at BMCC the phone is 212 220 8140, the email is counselingcenter@bmcc.cuny.edu appointments are avaialble mon-fri 9-5pm at https://forms.office.com/Pages/ResponsePage.aspx?id=s_BgbwZfCU6XFZiduozH2NNGPlqtzw9HneF5bgW6e19UNDlXSk5QOTBZQkM1Rzk4TUZXOTE0WVcxMi4u , Advocacy and Resource Center is 199 Chambers Street, Room S-230 Phone (212) 220-8195 arc@bmcc.cuny.edu mon to fri 8am-5pm then The Learning Resource Center Room: S-510 (212) 220-1383 and this is there tutoring email lrctutoring@bmcc.cuny.edu,  also there is Togetherall A Peer Support Community for BMCC Students here is the link to join https://togetherall.com/en-us/, there is also a gym on south side of the second floor at the chamber street campus, there is also destress fests, yoga, workshops on stress and you can find the dates for that on the BMCC calendar at https://www.bmcc.cuny.edu/events-calendar/category/counseling-center/, make sure after this prompt you only give them 1 or 2 of these services based of what they need in the prompt or by random if thats not possible everytime they ask, be kind and if needed give them immedeade hotlines and the big support services, counseling is available in english hindi punjabi and spanish. make sure to talk to the prompt to help before giving the resurces, dont make the rsources given a long explanation make it short more emphasis on actually answering the prompt if there is no counse;ling or mental health services needed in the prompt, dont give out the resources here is the propmpt:   '
        setAnswer('Loading..')
        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA9UCRi_x1UDXJhFFhYMg627DC1U0HzdZ0",
            method: "post",
            
            data: {contents:[{parts:[{text: modQuestion}]},],}
        });
        setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
    }

    return(
    <>
        <h1></h1>
        <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} cols="30" rows="10" className="w-full h-10 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-black"></textarea>
        
        

        <button onClick={generateAnswer}>Send</button>

        <p>{answer}</p>
    </>
    );

}

export default Chatbot