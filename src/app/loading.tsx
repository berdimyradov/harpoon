import Image from "next/image";

export default function Loading() {
  return (
    <Image
      className="animate-spin"
      width={192}
      height={192}
      src="/pokeball.png"
      alt="Loading..."
      priority
    />
  );
}
