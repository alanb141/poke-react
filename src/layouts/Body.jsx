import React from 'react'
import Button from"../components/Button"
import Search from"../components/Search"

function Body({data}) {
    return (
        <>
            <Search data={data} />
            <Button data={data} />
        </>
    );
  }
  
  export default Body;