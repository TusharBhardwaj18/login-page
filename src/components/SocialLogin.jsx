import React from 'react'

const SocialLogin = () => {
  return (
    <div className='p-2 flex items-center justify-center'>
    <button className=' border-2 m-2 p-2 w-40 rounded-md border-blue-900 text-blue-900'>     
    <img src="../assets/googleLogo.webp" alt="Google" className="social-icon h-7 inline" />
     <span>Google</span>  </button>
    <button className=' border-2 m-2 p-2 w-40 rounded-md border-black hover:bg-black hover:text-white transition duration-4000 delay-4000'>
    <img src="../assets/appleLogo.webp" alt="Apple" className="social-icon h-6 inline" />
    <span className='ml-2'>Apple</span>
      </button>
      </div>
    
  )
}

export default SocialLogin
