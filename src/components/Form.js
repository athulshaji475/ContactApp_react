import { useForm } from 'react-hook-form';

function Form({formSubc}) {

  const {
    register,
    handleSubmit,
    formState:{errors},
    reset,
  }=useForm()


  const OnSub=(data)=>{
    //adding aditional parameters
    data.fav=false
    data.id=Date.now()
    formSubc(data)  //called formsub function
reset()
  }

  return (
    <div className='boxshadow' >
      <form onSubmit={handleSubmit(OnSub)}>
      <br/>
      <div className="form-group">
    <label for="exampleInputEmail1">Name</label>

    <input type="text" 
    className="form-control"
     name='name'
      id="name"  
      placeholder="Enter name"
     {...register("name",{required:" name is required"})}/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <br/>

      <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"
    name='email'
     className="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp" 
     placeholder="Enter email"
      {...register('email',{required:"Enter email"})}
     />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <br/>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input 
    type="password"
     class="form-control" 
     id="exampleInputPassword1"
      placeholder="Password"
      name='password'
      {...register('password',{required:"password is required"})}
      />
  </div>
  <br/>
  <div className="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">  Check me out</label>
  </div>
  <br>

  </br>
  <br/>
  <br />
  <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form
