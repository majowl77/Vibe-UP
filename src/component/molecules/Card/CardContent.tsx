import { Card, Inset } from "@radix-ui/themes";
import Image from "../../atoms/Image/Image";
import TextGroup from "../../atoms/TextGroup/TextGroup";
import BasicButton from "../../atoms/Button/BasicButton";
export default function CardContent() {
  return (
    <div>
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <Image />
        </Inset>
        <TextGroup />
        <BasicButton name={"More Details"} />
      </Card>
    </div>
  );
}
