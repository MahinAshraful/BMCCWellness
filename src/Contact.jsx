import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

function Contact(){
    return(
        <HoverCard>
        <HoverCardTrigger>Ashraful Mahin</HoverCardTrigger>
        <HoverCardContent>
            mahinashraful08@gmail.com
            <br />
            646-338-1720
        </HoverCardContent>
        </HoverCard>

    );
}

export default Contact