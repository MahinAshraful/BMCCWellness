import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function RCard(){

    return(
        <div className="flex justify-around mt-1">

        <Card>
            <CardHeader>
                <CardTitle>Learning Resource Center</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
                <p>199 Chambers Street, Room: S-510</p>
                <p>Phone: (212) 220-1383</p>
            </CardContent>

            <CardFooter>
                <a href="https://www.bmcc.cuny.edu/students/lrc/online-tutoring/tutoring-schedule/">Click Here For Tutoring Schedule</a>
            </CardFooter>
        </Card>    

        <Card>
            <CardHeader>
                <CardTitle>Counseling Services</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
                <p>199 Chambers Street, Room S-343</p>
                <p>Phone: (212) 220-8140</p>
                <p>Email: counselingcenter@bmcc.cuny.edu</p>
            </CardContent>

            <CardFooter>
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=s_BgbwZfCU6XFZiduozH2NNGPlqtzw9HneF5bgW6e19UNDlXSk5QOTBZQkM1Rzk4TUZXOTE0WVcxMi4u">Click Here to Book Counseling</a>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Panther Station</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
                <p>199 Chambers Street, Room S-225</p>
                <p>Phone: (212) 220-8000</p>
            </CardContent>

            <CardFooter>
                <a href="https://www.bmcc.cuny.edu/finaid/">Click Here for Financial Aid Help</a>
            </CardFooter>
        </Card>
        </div>

    );
}

export default RCard