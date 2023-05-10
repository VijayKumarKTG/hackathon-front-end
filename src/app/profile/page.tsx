/* eslint-disable @next/next/no-img-element */
const Profile = () => {
  return (
    <div className='relative bg-darkblue'>
      <div className='w-full h-40'>
        <img
          className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1682847842653-a881916772b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
          alt='Banner'
        />
      </div>
      <div className='absolute w-36 h-36 rounded-xl overflow-hidden border-2 border-white'>
        <img
          className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1683451822283-873f6dfc6aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'
          alt='Banner'
        />
      </div>
      <div className='mt-36'>
        <h1>John Doe</h1>
        <h2>johndoe@gmail.com</h2>
      </div>
    </div>
  );
};

export default Profile;
