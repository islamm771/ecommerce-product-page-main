import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { productImages } from "../data/index";

interface Props {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  close: () => void;
}

export default function Lightbox({
  active,
  setActive,
  close,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex flex-col justify-center items-center">
      <button
        onClick={close}
        className="absolute top-10 right-10 text-white"
      >
        <X />
      </button>

      <div className="relative">

        <button
          onClick={() =>
            setActive(
              active === 0
                ? productImages.length - 1
                : active - 1
            )
          }
          className="absolute -left-6.25 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center"
        >
          <ChevronLeft />
        </button>

        <Image
          src={productImages[active]}
          alt=""
          className="max-w-2xs md:max-w-125 rounded-xl"
        />

        <button
          onClick={() =>
            setActive(
              active === productImages.length - 1
                ? 0
                : active + 1
            )
          }
          className="absolute -right-6.25 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}