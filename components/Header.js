/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from '@heroicons/react/outline';

function Header() {
	return (
		<div>
			<div className='flex max-w-6xl justify-between '>
				{/*Left  */}
				<div className='relative hidden  w-24 cursor-pointer lg:inline-grid'>
					<Image
						src='https://links.papareact.com/ocw'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div className='relative w-10 flex-shrink-0 cursor-pointer lg:hidden'>
					<Image
						src='https://links.papareact.com/jjm'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				{/*Middle */}
				<div className='relative mt-1 rounded-md  p-3'>
					<div className='pointer-events-none absolute inset-y-6 flex items-center pl-3'>
						<SearchIcon className='h-5 w-5 text-gray-400' />
					</div>

					<input className='bg-gray-50 block w-full p-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' type='text' placeholder='Search' />
				</div>

				{/*Right  */}
			</div>
		</div>
	);
}

export default Header;
