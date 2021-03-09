const Headerleft = ({name,job}) => {
    return (
        <div className='styleHeaderleft'>
            <h3>Hello , I am <span style={{color:'slateblue'}}>{name}</span> </h3>
            <h4 className='lead'>{job}</h4>
        </div>
    )
}

export default Headerleft
