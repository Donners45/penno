import { getImage } from "astro:assets";
import galleryData from "../data/gallery.json";

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/gallery/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

export interface GalleryItem {
  slug: string;
  title: string;
  file: string;
  image: ImageMetadata;
  fullSrc: string;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return Promise.all(
    galleryData.map(async (entry) => {
      const mod = imageModules[`../assets/gallery/${entry.file}`];
      const image = mod.default;
      const full = await getImage({ src: image, width: 1600, format: "webp" });
      return { ...entry, image, fullSrc: full.src };
    })
  );
}
