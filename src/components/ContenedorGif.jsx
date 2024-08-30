export const ContenedorGif = ({ arregloGifs }) => {

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ gap: '10px' }}>
                {arregloGifs.map(({ id, url }) => {
                    return (
                        <img className="w-25" key={id} src={url} />
                    )
                })}
            </div>
        </>
    )
}
