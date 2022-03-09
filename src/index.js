import react from 'react'
import reactDOM from 'react-dom'
import App from './App'

class Index extends react.Component{
    render(){
        return(
            <div>
                <App/>
            </div>
        )
    }
}

reactDOM.render(<Index/>,document.getElementById('root'))
