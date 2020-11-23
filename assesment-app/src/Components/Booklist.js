import React from 'react'
import Books from '../data.js'

function BookList(props) {

    const mappedBooklist = props.books.map((element, index) => {
        return <Books/>
    })

    return(<div>{mappedBooklist}</div>)

}




export default BookList