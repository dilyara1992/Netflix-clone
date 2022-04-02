// import React from 'react';
// import { BrowseContainer } from '../containers/browse';
// import { useContent } from '../hooks';
// import { selectionMap } from '../utils';

// export default function Browse() {
//     const { series } = useContent('series');
//     const { films } = useContent('films');
//     const slides = selectionMap({ series, films });
    
//     console.log(slides);

//     return <BrowseContainer slides={slides} />;
// }

import React, {useContext} from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionMap } from '../utils';
import { doc, setDoc } from "firebase/firestore"; 

export default function Browse() {
   
    // const { series } = useContent('series');
    // const { films } = useContent('films');
    
    // console.log(series);
    // console.log(films);
 
   

    return <BrowseContainer />;
}