import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper(){
    return (
        <div id="content"> 
             < TopBar />
             < ContentRowTop />
             < Footer />
        </div>
    )
}

export default ContentWrapper;