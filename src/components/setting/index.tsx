import SettingsForm from '../settings-form';

const Setting = () => {
  return (
    <div className='bg-gray-100 rounded-xl p-6 lg:p-10 text-white'>
      <div className='mb-12'>
        <h2 className='m-0 mb-6 text-[28px]'>Change Your Profile Details</h2>
        <SettingsForm />
      </div>
    </div>
  );
};

export default Setting;
