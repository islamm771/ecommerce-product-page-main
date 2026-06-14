"use client"

import Image from "next/image";
import { useState } from "react";
import { productImages } from "../data/index";
import Lightbox from "./Lightbox";

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Image
          src={productImages[active]}
          alt=""
          onClick={() => setOpen(true)}
          className="rounded-2xl cursor-pointer max-w-md w-full mx-auto"
        />

        <div className="flex gap-4 mt-8 justify-center">
          {productImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                overflow-hidden rounded-xl border-2
                ${active === index
                  ? "border-orange-500 opacity-50"
                  : "border-transparent"
                }
              `}
            >
              <Image
                src={image}
                alt=""
                className="w-16"
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          active={active}
          setActive={setActive}
          close={() => setOpen(false)}
        />
      )}
    </>
  );
}