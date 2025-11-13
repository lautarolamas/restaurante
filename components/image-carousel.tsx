"use client";

const images = [
  {
    src: "/images/gallery/mestizo3.jpeg",
    alt: "Picnic Scene",
  },
  {
    src: "/images/gallery/mestizo2.jpeg",
    alt: "Dark Menu with Cutlery",
  },
  {
    src: "/images/gallery/mestizo1.jpeg",
    alt: "Cream Menu with Green Bottle",
  },
];

export function ImageCarousel() {
  // Duplicar imágenes para el efecto infinito
  const duplicatedImages = [...images, ...images];

  return (
    <>
      {/* Mobile Carousel - Pantallas pequeñas (ancho completo) */}
      <div className="md:hidden relative w-full mx-auto mb-16 overflow-hidden">
        <div
          className="flex"
          style={{
            animation: "scroll-left 12s linear infinite",
            width: `${duplicatedImages.length * 100}%`,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / duplicatedImages.length}%` }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-300/50 mx-4">
                <div
                  className="bg-cover bg-center bg-no-repeat w-full"
                  style={{
                    aspectRatio: "380/570",
                    backgroundImage: `url('${image.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `,
          }}
        />
      </div>

      {/* Tablet Carousel - Cards de tamaño fijo */}
      <div className="hidden md:block lg:hidden relative w-full mx-auto mb-16 overflow-hidden">
        <div
          className="flex justify-center"
          style={{
            animation: "scroll-left 12s linear infinite",
            width: `${duplicatedImages.length * 380}px`,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "380px", marginRight: "1.5rem" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-300/50">
                <div
                  className="bg-cover bg-center bg-no-repeat"
                  style={{
                    width: "380px",
                    height: "570px",
                    backgroundImage: `url('${image.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `,
          }}
        />
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:block relative max-w-7xl mx-auto mb-16 px-4">
        <div className="grid grid-cols-3 gap-8 xl:gap-12 justify-items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-300/50"
              style={{
                width: "380px",
                maxWidth: "100%",
              }}
            >
              <div
                className="bg-cover bg-center bg-no-repeat w-full"
                style={{
                  aspectRatio: "380/570",
                  backgroundImage: `url('${image.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
