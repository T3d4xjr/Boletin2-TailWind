const images = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=7",
    "https://picsum.photos/200/300?random=8",
  ];
  
  export default function EjercicioFinal() {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-gray-100 min-h-screen">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg group animate-fade-in"
          >
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              className="w-full h-auto cursor-pointer transition-transform duration-300 group-active:animate-bounce group-active:scale-110"
            />
          </div>
        ))}
      </div>
    );
  }
  