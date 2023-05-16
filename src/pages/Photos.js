import React, { useContext } from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return (
    <div>
      <main className="photos">{imageElements}</main>
      <Footer />
    </div>
  );
}

export default Photos;
