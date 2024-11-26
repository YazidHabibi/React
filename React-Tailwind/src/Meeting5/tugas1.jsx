// eslint-disable-next-line react/prop-types
function WelcomeMessage ({isLoggedIn}) {
    return (
      <div>
    <li>
        {isLoggedIn 
        ? 'Welcome back, user!'
        : 'Please log in to continue!'
    }
    </li>
    </div>    
    )
}

export default function Message () {
    return (
        <div>
            <WelcomeMessage isLoggedIn={true}/>
            <WelcomeMessage isLoggedIn={false}/>
        </div>
    )
}