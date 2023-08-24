interface ImgClasses {
  classList: string;
  src?: string;
  alt: string;
}
export function CreateFormImg({ classList, src, alt }: ImgClasses) {
  return (
    <div className={classList}>
      <img src={src} alt={alt} />
    </div>
  );
}
