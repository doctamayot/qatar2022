import { AuthLayout } from "../../components/layouts";
import { Grupob } from "../../components";
import type { NextPage } from "next";

const Grupob1: NextPage = () => {
  return (
    <AuthLayout title="Grupo B" aviso="true">
      <Grupob />
    </AuthLayout>
  );
};

export default Grupob1;
