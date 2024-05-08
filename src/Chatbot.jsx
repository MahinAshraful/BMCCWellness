import { useState } from "react";
import axios from "axios";
import { supabase } from "./client";


function Chatbot(){
    const[question, setQuestion] = useState("");
    const[answer, setAnswer] = useState("");

    const [formData, setFormData] = useState({
        fName: '', lName: '', emplid:'', email:'', password:''
    })

    console.log(formData)

    function handleChange(event){
        setFormData((prevFormData) =>{
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }

    async function handleSubmit(e){
        e.preventDefault()

        try {
        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
            data: {
                first_name: formData.fName,
                last_name: formData.lName,
                bmccemplid: formData.emplid,
            }
            }
        }
        )
        alert('Check your email for a verification link')
        } catch (error){
            alert(error)
        }
    }
    

    async function generateAnswer(){
        const modQuestion = question + 'Reply to this as a person as a therapist dont say anything else but a response to this no bullet points or extra information i understand you are only a bot but just respond and respond with your name as Calvin. Answer this for BMCC students, here is some imnformation there are barbershop talks where people can go to talk to someone, tehere is a counceling office at BMCC the phone is 212 220 8140, the email is counselingcenter@bmcc.cuny.edu appointments are avaialble mon-fri 9-5pm at https://forms.office.com/Pages/ResponsePage.aspx?id=s_BgbwZfCU6XFZiduozH2NNGPlqtzw9HneF5bgW6e19UNDlXSk5QOTBZQkM1Rzk4TUZXOTE0WVcxMi4u , Advocacy and Resource Center is 199 Chambers Street, Room S-230 Phone (212) 220-8195 arc@bmcc.cuny.edu mon to fri 8am-5pm then The Learning Resource Center Room: S-510 (212) 220-1383 and this is there tutoring email lrctutoring@bmcc.cuny.edu,  also there is Togetherall A Peer Support Community for BMCC Students here is the link to join https://togetherall.com/en-us/, there is also a gym on south side of the second floor at the chamber street campus, there is also destress fests, yoga, workshops on stress and you can find the dates for that on the BMCC calendar at https://www.bmcc.cuny.edu/events-calendar/category/counseling-center/, make sure after this prompt you only give them 1 or 2 of these services based of what they need in the prompt or by random if thats not possible everytime they ask, be kind and if needed give them immedeade hotlines and the big support services, counseling is available in english hindi punjabi and spanish. make sure to talk to the prompt to help before giving the resurces, dont make the rsources given a long explanation make it short more emphasis on actually answering the prompt only give out 1-2 resources per prompt and sound enthusistic talk a bit:   '
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
        <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} cols="30" rows="10" className="w-full h-10 px-4 py-2 border-2 border-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        
        

        <button onClick={generateAnswer}>Send</button>

        <p>{answer}</p>

        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="First Name" name="fName" onChange={handleChange}/>
                <input placeholder="Last Name" name="lName" onChange={handleChange}/>
                <input placeholder="EMPLID" name="emplid" onChange={handleChange}/>
                <input placeholder="BMCC Email" name="email" onChange={handleChange}/>
                <input placeholder="Password" name="password" onChange={handleChange} type="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
    );

}

export default Chatbot