import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends react.Component{

    state={
        filter:'',
        filterBoolean:false,
        addUserBoolean:false,
        users:[],
        information:{
            ism:'',
            familya:'',
            yosh:'',
            email:''
        }
    }

    //  AddUser button funksiyasi
    AddUserBtn=()=>{
        this.setState({
            addUserBoolean:!this.state.addUserBoolean
        })
    }

    // Deleted button funksiyasi
    deletedBtn=(index)=>{
        let users = this.state.users
        users.splice(index, 1)
        this.setState({
            users
        })
    }

    //  User qo'shish inputlari uchun funksiyalar
    ismInput=(event)=>{
        this.setState({
            information:{
                ism:event.target.value,
                familya:this.state.information.familya,
                yosh:this.state.information.yosh,
                email:this.state.information.email
            }
        })
    }
    familyaInput=(event)=>{
        this.setState({
            information:{
                ism:this.state.information.ism,
                familya:event.target.value,
                yosh:this.state.information.yosh,
                email:this.state.information.email
            }
        })
    }
    yoshInput=(event)=>{
        this.setState({
            information:{
                ism:this.state.information.ism,
                familya:this.state.information.familya,
                yosh:event.target.value,
                email:this.state.information.email
            }
        })
    }
    emailInput=(event)=>{
        this.setState({
            information:{
                ism:this.state.information.ism,
                familya:this.state.information.familya,
                yosh:this.state.information.yosh,
                email:event.target.value
            }
        })
    }

    // Qo'shish button uchun funksiya
    addInformation=()=>{
        let users = this.state.users
        users.push(this.state.information)
        this.setState({
            users,
            information:{
                ism:'',
                familya:'',
                yosh:'',
                email:''
            }
        })
    }

    // Search input uchun
    searchInput=(event)=>{
        this.setState({
            filter:event.target.value,
        })
    }

    // Search Button uchun
    searchBtn=()=>{

        this.setState({
            filterBoolean:!this.setState.filterBoolean,
        })
    }


    render(){

        const{users, filter} = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredUser = users.filter(item =>{
            return Object.keys(item).some(key=>
                item[key].toLowerCase().includes(lowercasedFilter)    
            )
        })

        return(
            <div>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-6 offset-3'>
                            {/* Search input; Search button; Add User button */}
                            <div className='row'>
                                <div className='col-md-9'>
                                    <input className='form-control' onChange={this.searchInput} placeholder='Search...' />
                                </div>
                                <div className='col-md-3'>
                                    <button className='btn btn-outline-primary' onClick={this.AddUserBtn}>Add User</button>
                                </div>
                            </div>
                            {/* User qo'shish saxifasi. Add user bosilganda chiqadi*/}
                            {this.state.addUserBoolean
                                ?<div className='row mt-5'>
                                <div className='col-md-12'>
                                    <div className='card text-center'>
                                        <div className='card-header'>
                                            <h5>User qo'shish uchun ma'lumotlarni kiriting</h5>
                                        </div>
                                        <div className='card-body'>
                                            <form className='form-group'>
                                                <input type="text" className='form-control' placeholder='Ismni kiriting...' value={this.state.information.ism} onChange={this.ismInput}/>
                                                <input type="text" className='form-control mt-2' placeholder='Familyani kiriting...' value={this.state.information.familya} onChange={this.familyaInput}/>
                                                <input type="number" className='form-control mt-2' placeholder='Yoshni kiriting...' value={this.state.information.yosh} onChange={this.yoshInput}/>
                                                <input type="text" className='form-control mt-2' placeholder='Email pochtani kiriting...' value={this.state.information.email} onChange={this.emailInput}/>
                                            </form>
                                        </div>
                                        <div className='card-footer'>
                                            <button className='btn btn-outline-success col-md-12' onClick={this.addInformation}>Qo'shish</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :''
                            }
                            {/* Userlar ro'yhati jadval */}
                            <table className='table mt-5'>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Ism</th>
                                        <th>Familya</th>
                                        <th>Yosh</th>
                                        <th>Email pochta</th>
                                        <th>O'chirish</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredUser.map((user,index)=>{
                                            return<tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{user.ism}</td>
                                                <td>{user.familya}</td>
                                                <td>{user.yosh}</td>
                                                <td>{user.email}</td>
                                                <td><button className='btn btn-outline-danger' onClick={()=>this.deletedBtn(index)}>Deleted</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App 