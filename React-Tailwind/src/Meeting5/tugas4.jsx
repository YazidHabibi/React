function Greeting ({time}) {
    if (time >=5 &&  time <=11) {
        return "Good Morning!"
    }else if (time >=12 && time <=17) {
        return "Good Afternoon!"
    }else if (time >=18 && time <=20) {
        return "Good Evening!"
    }else if (time >=21 <=4) {
        return "Good Night!"
    }
}

export default function Waktu () {
    return (
        <div>
            <Greeting time={5}/>
            <br />
            <Greeting time={15}/>
            <br />
            <Greeting time={20}/>
            <br />
            <Greeting time={3}/>
        </div>
    )
}