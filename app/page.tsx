import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { Heading2, Heading3 } from "@/components/Headings";
import { Subtitle, Text } from "@/components/Typography";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  return (
    <main>
      <Banner />

      <Container background="#F9FAFC" padding="60px 0">
        <div className="grid grid-cols-2">
          <div>
            <Subtitle> Name </Subtitle>
            <Heading2> Project Title </Heading2>
            <br />
            <br />

            <TextInput
              type="text"
              label={"City"}
              handleTextChange={(e) => {}}
              placeholder={"City Name"}
            />

            <br />

            <Dropdown
              items={["Operational", "Running", "Stopped"]}
              name={"Stopped"}
              handleSelected={() => {}}
            />
            <br />

            <Button title={"Submit"} />

            <br />
            <br />
          </div>

          <Card>
            <div className="flex flex-col gap-4">
              <Image
                height={350}
                width={350}
                src={"/sprites.png"}
                alt="sprite"
              />
              <Text className="text-center"> Get Started </Text>

              <Heading3 className="text-center"> Sign Up Progress </Heading3>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
