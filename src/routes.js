import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBase from "Pages/PaginaBase";
import Inicio from "Pages/Inicio";
import NuevoVideo from "Pages/NuevoVideo";

function AppRoutes() {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const storedVideos = localStorage.getItem('videos');
        if (storedVideos) {
            setVideos(JSON.parse(storedVideos));
        }

        fetch("https://my-json-server.typicode.com/jecsonrv/alura-flix-api/categorias")
            .then(response => response.json())
            .then(data => setCategorias(data))
            .catch(error => console.error('Error fetching categorias:', error));
    }, []);

    const registrarVideo = (video) => {
        fetch("https://my-json-server.typicode.com/jecsonrv/alura-flix-api/videos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(video)
        })
        .then(response => response.json())
        .then(data => {
            // Actualizar estado local
            setVideos(prevVideos => [...prevVideos, data]);
            
            // Guardar en localStorage
            const updatedVideos = [...videos, data];
            localStorage.setItem('videos', JSON.stringify(updatedVideos));
        })
        .catch(error => console.error('Error adding video:', error));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio videos={videos} categorias={categorias} />} />
                    <Route path="nuevo-video" element={<NuevoVideo registrarVideo={registrarVideo} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;





