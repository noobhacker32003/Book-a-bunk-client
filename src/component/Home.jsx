import React from 'react';

import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {

    
    return (
        <div>
            
<Sidebar></Sidebar>
<div className='flex w-full justify-end'>
    
    
    <Link to="/login"><button className='p-2 mr-9 mt-5 btn btn-accent w-28'>Login</button> </Link>
</div>

<div className=''><h1 className='text-center text-5xl '>Book a bunk</h1></div>

        </div>
    );
};

export default Home;