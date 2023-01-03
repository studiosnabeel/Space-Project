import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissionsData } from '../Redux/missionSlice';


const Missions = () => {
	const dispatch = useDispatch()
	useEffect(() =>{
		dispatch(getMissionsData());
	}, [dispatch]);

	return (
	<div className="flex flex-col px-12">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Missions
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Description
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mission 1</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Lorem, ipsum dolor sit amet consectetur  elit. 
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <p className='bg-neutral-700 text-white rounded w-fit px-1'>Not a member</p>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button className='border-solid rounded border-2 border-[#4b5056] px-4 py-1' type='button'>Join Mission</button>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mission 2</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
							<p className='bg-[#18a2b8] text-white rounded w-fit px-1'>Active member</p>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button className='border-solid border-2 rounded text-[#db3745] border-[#db3745] px-4 py-1' type='button'>Leave Mission</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
	)
}

export default Missions