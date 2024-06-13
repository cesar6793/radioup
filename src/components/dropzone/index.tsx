"use client";
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onDrop }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDropHandler = useCallback((acceptedFiles) => {
    // Puedes manejar los archivos subidos aquí
    console.log(acceptedFiles);
    if (onDrop) {
      onDrop(acceptedFiles);
    }
    // Guarda la primera imagen seleccionada (si hay alguna)
    if (acceptedFiles.length > 0) {
      setSelectedImage(URL.createObjectURL(acceptedFiles[0]));
    }
  }, [onDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onDropHandler });

  // Estilos para el contenedor del Dropzone
  const dropzoneStyle = {
    border: '2px dashed #000',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '10px',
    maxWidth: '1000px',
    margin: 'auto',
    marginTop: '20px',
    height: selectedImage ? 'auto' : '300px', // Ajusta la altura según si hay una imagen seleccionada
  };

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {selectedImage ? (
        <img src={selectedImage} alt="Imagen seleccionada" style={{ maxWidth: '100%' }} />
      ) : isDragActive ? (
        <p>Suelta los archivos aquí...</p>
      ) : (
        <p>Arrastra y suelta la radiografía aquí, o haz clic para seleccionar imágenes</p>
      )}
    </div>
  );
};

export default Dropzone;
