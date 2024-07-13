import React, { useEffect, useState } from "react";
import Banner from "Components/Banner";
import Categoria from "Components/Categoria";
import CardVideo from "Components/CardVideo";

function Inicio({ videos, categorias }) {
    const [videosState, setVideosState] = useState([]);

    useEffect(() => {
        setVideosState(videos);
    }, [videos]);

    const eliminarVideo = (id) => {
        const updatedVideos = videosState.filter(video => video.id !== id);
        setVideosState(updatedVideos);
        localStorage.setItem('videos', JSON.stringify(updatedVideos));
    };

    return (
        <>
            <section>
                <Banner />
            </section>
            {categorias.map((categoria) => (
                <Categoria
                    key={categoria.nombre}
                    nombre={categoria.nombre}
                    color={categoria.color}
                    videos={videosState.filter((video) => video.categoria === categoria.nombre)}
                    eliminarVideo={eliminarVideo} 
                />
            ))}
        </>
    );
}

export default Inicio;




