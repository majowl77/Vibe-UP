import { AspectRatio } from "@radix-ui/themes";

export default function Image() {
  return (
    <div>
      <AspectRatio ratio={16 / 8}>
        <img
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-2)",
          }}
        />
      </AspectRatio>
    </div>
  );
}
