import React from 'react'
import { Link } from 'react-router-dom'

export const CustomLinkButton = ({to, linkTitle}) => {
    return (
        <div>
            <Link className="btn-see-more" to={ to }> { linkTitle } </Link>
        </div>
    )
}
