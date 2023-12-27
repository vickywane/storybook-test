import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { Heading3 } from "@/components/Headings";
import { Text } from "@/components/Typography";
import Card from "@/components/Card";
import Image from "next/image";
import ProjectDetailsForm from "@/components/ProjectDetailsForm";

export default function Home() {
  return (
    <main>
      <Banner />

      <Container background="#F9FAFC" padding="80px 0">
        <div className="grid grid-cols-2 gap-24">
          <ProjectDetailsForm />

          <Card>
            <div className="flex flex-col gap-4">
              <Image
                height={350}
                width={350}
                src={"/sprites.png"}
                alt="sprite"
              />

              <Text className="text-center"> Setup Project </Text>
              <Heading3 className="text-center"> Project Setup Progress </Heading3>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
