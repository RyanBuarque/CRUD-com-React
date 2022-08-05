import React from 'react'

function Main(props) {
    return (
        <React.Fragment>
            <main className="content bg-secondary p-2 m-2 ms-5 rounded-5">
                <div className>
                    {props.children}
                    </div>
            </main>
        </React.Fragment>

    )
}

export default Main