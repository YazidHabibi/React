function Notification ({priority}) {
    if (priority === 'low') {
        return "No Immediate Action required"
    }else if (priority === 'medium') {
        return "Please Address This Issue Soon"
    }else if (priority === 'high') {
        return "Immediate Action Required !"
    }
}

export default function Notif () {
    return (
        <div className="ml-10 mt-10">
            <Notification priority={'low'}/>
            <br />
            <Notification priority={'medium'}/>
            <br />
            <Notification priority={'high'}/>
        </div>
    )
}