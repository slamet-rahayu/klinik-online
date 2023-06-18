import { ReactElement } from "react";
import { Container } from "@/modules/generic/components";

export default function FooterHome(): ReactElement {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#ecf8fc] py-10">
      <Container>
        <p className="text-[#515557] text-xs">Copyright &copy; {year}. All rights reserved</p>
      </Container>
    </div>
  );
}
