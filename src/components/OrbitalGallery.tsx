import { galleryImages } from "../data/site";
import type { CSSProperties } from "react";
import { MagicRings } from "./react-bits/MagicRings";

const orbitImages = galleryImages.filter((image) => image.role !== "hero");
const centerImage = galleryImages[0];

export function OrbitalGallery() {
  return (
    <div className="orbital-gallery" aria-label="Фотографии модульных домов Ledaks">
      <MagicRings />
      <div className="orbit-ring" aria-hidden="true" />
      <figure className="orbit-center">
        <img src={centerImage.src} alt={centerImage.alt} loading="eager" />
      </figure>
      <div className="orbit-track">
        {orbitImages.map((image, index) => (
          <figure
            className={`orbit-card orbit-card-${index + 1}`}
            key={image.src}
            style={{ "--orbit-index": index } as CSSProperties}
          >
            <img src={image.src} alt={image.alt} loading={index < 2 ? "eager" : "lazy"} />
          </figure>
        ))}
      </div>
    </div>
  );
}
