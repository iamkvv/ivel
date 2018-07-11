import React from 'react';
import { Link, Router } from '@reach/router';

const Objects = () => (
    <div>
        <Router >
            <Objectlinks path={`${process.env.PUBLIC_URL}/`} />
        </Router>

    </div>
)



const Objectlinks = () => (
    <div style={{ width: '50%', margin: '0 30px' }}>
        <div>
            <Link to={`${process.env.PUBLIC_URL}/objects/object_1`} >
                <h3>
                    Объект I
            </h3>
            </Link>
        </div>
        <div>
            <Link to={`${process.env.PUBLIC_URL}/objects/object_2`} >
                <h3>
                    Объект II
            </h3>
            </Link>
        </div>
    </div>
)

export default Objects;