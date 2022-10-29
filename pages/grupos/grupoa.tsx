import { AuthLayout } from "../../components/layouts";
import { Grupoa } from "../../components";
import type { NextPage } from "next";

const Grupoa1: NextPage = () => {
  return (
    <AuthLayout title="Grupo A" aviso="true">
      <Grupoa />
    </AuthLayout>
  );
};

export default Grupoa1;
