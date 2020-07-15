import React, { useState, useEffect } from 'react';
import { getContentfulAboutMe } from '../queries/index';

const HomePageSections = () => {
    const [data, setData] = useState({});

    const getData = async () => {
        const theData = await getContentfulAboutMe();
        setData(theData);
    }

    useEffect(()=>{
        getData();
    }, [])

    console.log(data)
;    if (Object.entries(data).length > 0 ){
        return(
            <main>
                {data.fields.homePageSections.map((section, i)=>{
                    const {sectionTitle, textContent} = section.fields;
                    return(
                        <section key={i}>
                            <h2>{sectionTitle}</h2>
                        </section>
                    )

                })}
            </main>
        )
    }
    return <div>loading</div>
}

export default HomePageSections