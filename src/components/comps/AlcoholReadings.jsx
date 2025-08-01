const AlcoholReadings = () => {
  const card =
    'bg-white rounded-[15px] !p-[20px] shadow-lg border-y-4 border-x-2 border-y-[#e5e7eb]';
  const H3 = 'text-[#6b7280] !mb-[4px] uppercase tracking-[0.5px] text-[13px]';
  const para = 'text-[19px] font-[600] !m-0';
  return (
    <section className='w-[20rem] h-[26rem] !mt-[1rem] !shadow-lg bg-gray-50 !py-5 !mx-auto rounded-lg'>
      <div className='overflow-x-auto'>
        <h2 className='text-lg text-center underline font-semibold'>
          Car Details
        </h2>
        <div className='grid grid-cols-2 gap-2 !w-[90%] !mx-auto !my-4'>
          <div className={`${card} text-[#10b981]  !border-[#10b981]`}>
            <h3 className={H3}>Situation</h3>
            <p className={para}>Normal</p>
          </div>
          <div className={`${card} text-[#ef4444] !border-[#ef4444]`}>
            <h3 className={H3}>ACV</h3>
            <p className={para}>120</p>
          </div>
          <div className={`${card} text-[#f59e0b] !border-[#f59e0b]`}>
            <h3 className={H3}>User Drive Mode</h3>
            <p className={para}>Manual</p>
          </div>
          <div className={`${card} text-[#3b82f6] !border-[#3b82f6]`}>
            <h3 className={H3}>Current Speed</h3>
            <p className={para}>120 Km/h</p>
          </div>
          <div
            className={`${card} col-span-2 text-[#8b5cf6] !border-[#8b5cf6]`}
          >
            <h3 className={H3}>Car Model</h3>
            <p className={para}>Toyato_XL12</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlcoholReadings;
