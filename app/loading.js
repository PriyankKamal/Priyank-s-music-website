import React from 'react'

const loading = () => {
    return (
        <>
            {/* <div className="loading"> */}
                <video className='loader-video' autoPlay loop muted src="./Videos/loadervideo.mp4"></video>
                {/* <div className="loading-box">
                    <div id="loading-animation" class="heading large-text"><p className='loading-text'>l</p><p className='loading-text'>o</p><p className='loading-text'>a</p><p className='loading-text'>d</p><p className='loading-text'>i</p><p className='loading-text'>n</p><p className='loading-text'>g</p></div>
                </div> */}
            {/* </div> */}
        </>
    )
}

export default loading
