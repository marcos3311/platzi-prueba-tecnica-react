import Layout from '../../Components/Layout'

function SignIn() {
  return (
    <Layout>
      <h1 className='text-xl font-medium'>Welcome</h1>
      <form action="#" className='flex flex-col gap-5 items-end text-sm mt-10'>
        <div className='flex gap-3 items-center'>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name='email' placeholder='Insert your e-mail...' required className='border border-black rounded-md px-3 py-1'/>
        </div>
        <div className='flex gap-3 items-center'>
          <label htmlFor="password">Password:</label>
          <input type="password" name='email' placeholder='Insert your password...' required className='border border-black rounded-md px-3 py-1'/>
        </div>
        <div className='w-full flex flex-col items-center gap-3'>
          <button type="submit" className='w-full bg-black text-white rounded-md py-2'>Log In</button>
          <a href="#" className='underline text-sm text-gray-500'>Forgot my password</a>
          <button type="submit" className='w-full border border-black text-black rounded-md py-2'>Sign Up</button>

        </div>
      </form>
    </Layout>
  )
}

export default SignIn