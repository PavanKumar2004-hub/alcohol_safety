const AlcoholReadings = () => {
  return (
    <section className='w-[20rem] h-[18rem] !mt-[1rem] !shadow-lg bg-white !py-5 !mx-auto rounded-lg'>
      <div className='overflow-x-auto'>
        <h2 className='text-lg text-center underline font-semibold'>
          Car Details
        </h2>
        <table className='w-[18rem] border-collapse bg-gray-50 shadow-md !mx-auto !mt-[0.5rem]'>
          <thead className='bg-blue-500 text-white'>
            <th>Parameter</th>
            <th>Value</th>
          </thead>
          <tbody className=' divide-y divide-gray-200'>
            <tr>
              <td className='readings bg-orange-400 text-white font-medium'>
                Car Model
              </td>
              <td className=' bg-orange-200 text-orange-700 font-medium'>
                Toyato_XL12
              </td>
            </tr>
            <tr>
              <td className='readings bg-indigo-400 text-white font-medium'>
                ACV
              </td>
              <td className=' bg-indigo-200 text-indigo-700 font-medium'>
                120
              </td>
            </tr>
            <tr>
              <td className='readings bg-green-400 text-white font-medium'>
                Current Speed
              </td>
              <td className=' bg-green-200 text-green-700 font-medium'>
                120Km
              </td>
            </tr>
            <tr>
              <td className='readings bg-yellow-400 text-white font-medium'>
                User Drive Mode
              </td>
              <td className=' bg-yellow-200 text-yellow-700 font-medium'>
                Manual
              </td>
            </tr>
            <tr>
              <td className='readings bg-red-400 text-white font-medium'>
                Situation
              </td>
              <td className=' bg-red-200 text-red-700 font-medium'>Normal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AlcoholReadings;
