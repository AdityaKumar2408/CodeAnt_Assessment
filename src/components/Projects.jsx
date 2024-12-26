import React from 'react';
import { Button } from './ui/button';
import { Plus, RefreshCcw } from 'lucide-react';
import SearchInput from './SearchInput';
import Details from './Details';

const Repo = () => {
  return (
    <div className='bg-white h-full w-full rounded-xl shadow-md'>
      <div className='px-4 py-2 flex justify-between items-center'>
        <div>
          <h1 className='font-semibold text-xl'>Repositories</h1>
          <h5 className='text-gray-400 text-sm'>33 Total Repositories</h5>
        </div>
        <div className='flex space-x-4'>
          <Button variant="outline" className="text-gray-500 border rounded-xl shadow-md">
            <RefreshCcw className="mr-2" />
            Refresh All
          </Button>
          <Button variant="solid" className="text-white bg-blue-500 rounded-xl shadow-md hover:bg-blue-600">
            <Plus className="mr-2" />
            Add Repositories
          </Button>
        </div>
      </div>
  <SearchInput />
      <hr className="border-t-2 border-gray-200 my-4" />
      <Details />
    </div>
  );
}

export default Repo;
